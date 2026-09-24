import './dock.css'

interface DockProps {
    openBrowserCallback: () => void
    openContact: () => void
    openTempo: () => void
}

export default function Dock({openBrowserCallback, openContact, openTempo}: DockProps) {

    function openBrowser() {
        openBrowserCallback()
    }


    return <div className="dock">
        <div className="dock-background">
            <img className="dock-left" alt="doc" src="/assets/system/dock/dock-left.png"/>
            <div className="dock-middle"></div>
            <img className="dock-right" alt="doc" src="/assets/system/dock/dock-right.png"/>
        </div>
        {/* apps*/}
        <div className="dock-apps-container">
            <div className="app-button" onClick={openBrowser}>
                <img className="app-icon" alt="a" src="/assets/app-icons/potato-browser.png"/>
                {/*TODO: onhover, show app name and outline icon white or make it highlighted idk*/}
            </div>
            <div className="app-button" onClick={openContact}>
                <img className="app-icon" alt="a" src="/assets/app-icons/mail.png"/>
            </div>
            <a className="app-button" href="https://linkedin.com/in/emilia-ma" target="_blank">
                <img className="app-icon" alt="a" src="/assets/app-icons/linkedin.png"/>
            </a>
            <div className="app-button" onClick={openTempo}>
                <img className="app-icon" alt="a" src="/assets/app-icons/Calendar.png"/>
            </div>
            <div className="app-button">
                <img className="app-icon" alt="a" src="/assets/app-icons/uwucord.png"/>
            </div>
            <div className="app-button">
                <img className="app-icon" alt="a" src="/assets/app-icons/map.png"/>
            </div>
            <div className="app-button">
                <img className="app-icon" alt="a" src="/assets/app-icons/photos.png"/>
            </div>
        </div>
    </div>
}
