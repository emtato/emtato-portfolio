import {useState} from "react";

interface ProjectProps {
    title: string
    shortDesc: string
    stack: string[]
    standout: string
    description: string
    cardImg: string
    expandedImgs: string[]
    timeInfo: string
    projectLink?: string
    github: string
}


export default function ProjectCard({
                                        title, shortDesc, stack, cardImg, timeInfo, projectLink, github
                                    }: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false) /* TODO: hover effects*/
    const [isOpen, setisOpen] = useState(false)

    return <article className="project-card">
        <div className="project-card-image-wrapper">
            {cardImg && <img className="project-card-image" alt='a' src={cardImg}/>}
        </div>
        <div className="project-card-text-wrapper">
            <div className="project-card-heading">
                <div className="project-card-title-group">
                    <h3 className="project-card-title">{title}</h3>
                    <div className="project-card-links">
                        {projectLink && <a className="project-card-link-button" href={projectLink} target="_blank">
                            <img className="project-card-link-icon" alt="a" src="/assets/system/link-icon-hover.png"/>
                        </a>}
                        {github && <a className="project-card-link-button-gh" href={github} target="_blank">
                            <img className="project-card-github-icon" alt=""
                                 src="/assets/browser/content/experience/github.png"/>
                        </a>}
                    </div>
                </div>

                {timeInfo && <div className="project-card-timeInfo">{timeInfo}</div>}
            </div>
            <p className="project-card-shortDesc">{shortDesc}</p>

            {stack.length > 0 && <div className="project-card-stack-wrapper">
                {stack.map((technology) =>
                    <span className="project-card-stack-tag" key={technology}>{technology}</span>
                )}
            </div>}
        </div>
    </article>
}
