import './dockApp.css'
import {useState} from "react";

interface DockAppProps {
    src: string
    onClick?: () => void
    href?: string
    rotate?: boolean
    mobileHide?: boolean
    hoverText: string
    browserOpen: boolean
}

export default function DockApp({
                                    src, onClick, href, hoverText,
                                    rotate = false, mobileHide, browserOpen
                                }: DockAppProps) {
    const icon = <img className={rotate ? "app-icon app-icon-rotate" : "app-icon"} alt="a" src={src}/>
    const [isHovered, setIsHovered] = useState(false)

    if (mobileHide) {
        return <></>
    }
    return <div className="app-wrapper" onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
        {href &&
            <a className="app-button" href={href} target="_blank"
            >{icon}</a>}
        {!href &&
            <div className="app-button" onClick={onClick}
            >{icon}</div>}
        {isHovered && <div className={`app-icon-hoverText browserOpen-${browserOpen}`}>{hoverText}</div>}
    </div>
}
