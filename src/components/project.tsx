import {useState} from "react";

interface ProjectProps {
    title: string
    description: string
    card_image_source: string
    assets: string[]
}


export default function Project({title, description, card_image_source, assets}: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isOpen, setisOpen] = useState(false)

    return <div className="project-card">
        <div className="project-card-image">
            <img className="project-card-image-source" alt="a" src={card_image_source}/>
        </div>
        <div className="project-card-text">
            <div className="project-card-title">{title}</div>
            <div className="project-card-description">{description}</div>
        </div>
        {isOpen && <div className="project-card-expanded">

        </div>}
    </div>
}
