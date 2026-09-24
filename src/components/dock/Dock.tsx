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
            <DockApp src="/assets/app-icons/potato-browser.png" onClick={openBrowser} hoverText="potato browser"/>
            {/*TODO: onhover, show app name and outline icon white or make it highlighted idk*/}
            <DockApp src="/assets/app-icons/mail.png" onClick={openContact} hoverText="contact me"/>
            <DockApp src="/assets/app-icons/linkedin.png" href="https://linkedin.com/in/emilia-ma" hoverText="linkedin"/>
            <DockApp src="/assets/app-icons/calendar.png" onClick={openTempo} hoverText="tempo"/>
            <DockApp src="/assets/app-icons/uwucord.png" hoverText="uwucord"/>
            <DockApp src="/assets/app-icons/map.png" hoverText="map"/>
            <DockApp src="/assets/app-icons/photos.png" rotate={true} hoverText="photos"/>
            <DockApp src="/assets/app-icons/contacts.png" hoverText="contacts"/>
        </div>
    </div>
}
