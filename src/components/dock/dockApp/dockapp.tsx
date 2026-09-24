import './dockApp.css'

interface DockAppProps {
    src: string
    onClick?: () => void
    href?: string
    rotate?: boolean
}

export default function DockApp({src, onClick, href, rotate = false}: DockAppProps) {
    const icon = <img className={rotate ? "app-icon app-icon-rotate" : "app-icon"} alt="a" src={src}/>

    if (href) {
        return <a className="app-button" href={href} target="_blank">{icon}</a>
    }

    return <div className="app-button" onClick={onClick}>{icon}</div>
}
