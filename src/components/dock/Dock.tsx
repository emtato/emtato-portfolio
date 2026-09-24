import './dock.css'
import DockApp from './dockApp/dockapp.tsx'

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
            <DockApp src="/assets/app-icons/potato-browser.png" onClick={openBrowser}/>
            {/*TODO: onhover, show app name and outline icon white or make it highlighted idk*/}
            <DockApp src="/assets/app-icons/mail.png" onClick={openContact}/>
            <DockApp src="/assets/app-icons/linkedin.png" href="https://linkedin.com/in/emilia-ma"/>
            <DockApp src="/assets/app-icons/Calendar.png" onClick={openTempo}/>
            <DockApp src="/assets/app-icons/uwucord.png"/>
            <DockApp src="/assets/app-icons/map.png"/>
            <DockApp src="/assets/app-icons/photos.png" rotate/>
            <DockApp src="/assets/app-icons/duosion.png"/>
        </div>
    </div>
}
