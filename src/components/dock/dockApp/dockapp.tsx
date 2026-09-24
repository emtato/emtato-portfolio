import './dockApp.css'
import {useState} from "react";

interface DockAppProps {
    src: string
    onClick?: () => void
    href?: string
    rotate?: boolean
    hoverText: string
}

export default function DockApp({src, onClick, href, hoverText, rotate = false}: DockAppProps) {
    const icon = <img className={rotate ? "app-icon app-icon-rotate" : "app-icon"} alt="a" src={src}/>
    const [isHovered, setIsHovered] = useState(false)

    return <div className="app-wrapper" onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
        {href &&
            <a className="app-button" href={href} target="_blank"
            >{icon}</a>}
        {!href &&
            <div className="app-button" onClick={onClick}
            >{icon}</div>}
        {isHovered && <div className="app-icon-hoverText">{hoverText}</div>}
    </div>
}
