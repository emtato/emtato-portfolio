import {useState} from "react";

interface ProjectProps {
    title: string
    shortDesc: string
    stack: string[]
    standout: string
    description: string
    cardImgs: string
    expandedImgs: string[]
    timeInfo: string
    projectLink?: string
    github: string
}


export default function ProjectCard({
                                        title, shortDesc, stack, standout, description,
                                        cardImgs, expandedImgs, timeInfo, projectLink, github
                                    }: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isOpen, setisOpen] = useState(false)

    return <div className="project-card">
        <div className="project-card-image-wrapper">
            <img className="project-card-image" alt="a" src={cardImgs}/>
        </div>
        <div className="project-card-text-wrapper">
            <div className="project-card-title">{title}</div>
            <div className="project-card-links">
                {projectLink && <a className="project-card-link" href={projectLink} target="_blank">
                    <img className="project-card-link-icon" alt="a" src="/assets/system/link-icon.png"/>
                </a>}
                <a className="project-card-link" href={github} target="_blank">
                    <img className="project-card-link-icon" alt="a" src="/assets/system/github-icon.png"/>
                </a>
            </div>
            <div className="project-card-shortDesc">{shortDesc}</div>
            <div className="project-card-timeInfo">
            </div>
            {isOpen && <div className="project-card-expanded">

            </div>}
        </div>
    </div>
}
