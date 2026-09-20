import './dock.css'

interface DockProps {
    openBrowserCallback: () => void
    openContact: () => void
}
export default function Dock({openBrowserCallback, openContact}: DockProps) {

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

        </div>
    </div>
}
