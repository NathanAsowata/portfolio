import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"


type customCheckBoxProps = {
    name: string,
    checked?: boolean
}

const CheckBox = ({name, checked}: customCheckBoxProps) => {

    if(checked){
        return (
            <div className="flex flex-row text-[18px] items-center gap-2">
                <MdCheckBox className="text-primary text-[20px]" />
                <span className="overflow-clip">{name}</span>
            </div>
        )
    }
    
    return (
        <div className="flex flex-row flex-wrap text-[18px] items-center gap-2">
        <MdCheckBoxOutlineBlank className="text-primary text-[20px]" />
        <p>{name}</p>
    </div>
  )
}

export default CheckBox