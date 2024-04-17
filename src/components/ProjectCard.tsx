import { ReactNode } from "react"

type cardProp = {
    name: string,
    url:  string,
    github: string,
    img: string,
    children: ReactNode
}

const ProjectCard = ({name, url, github, img, children}: cardProp) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 mb-5 p-3 sm:p-5 w-fit bg-gray-100 border border-dark hover:border-primary shadow-lg rounded-lg">
        <section className="max-w-[500px]">
            <h3 className="text-[24px] font-bold font-heading text-dark mb-2">{name}</h3>
            <div>{children}</div>
            <br />
            <a 
                href={url} 
                target="_blank"
                className="font-medium text-primary hover:text-hover hover:underline text-[18px]"
                >
                    Visit live site &rarr;
            </a>
            <br />
            <a 
                href={github} 
                target="_blank"
                className="font-medium text-primary hover:text-hover hover:underline text-[18px]"
                >
                    Read more on Github &rarr;
            </a>
        </section>
        <img 
            src={img} 
            alt={name} 
            className="aspect-w-16 aspect-h-9 w-[40vw] min-w-[340px] max-w-[600px] border border-dark hover:border-primary shadow-lg rounded-md"
        />
    </div>
  )
}

export default ProjectCard