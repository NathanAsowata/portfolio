
type buttonProp = {
    name: string,
    url: string
}

const Button = ({name, url}:buttonProp) => {
  return (
    <a 
        href={url} 
        target="_blank"
        className="border-dark hover:border-transparent border outline-none hover:bg-dark text-dark hover:text-white text-[16px] p-3 mx-1 rounded-[50px]"
    >
      {name}
    </a>
  )
}

export default Button