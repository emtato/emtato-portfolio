import './dock.css'
import DockApp from './dockApp/dockapp.tsx'
import {useEffect, useState} from "react";

interface DockProps {
    openBrowserCallback: () => void
    openContact: () => void
    openTempo: () => void
}

export default function Dock({openBrowserCallback, openContact, openTempo}: DockProps) {
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        if (!copied) return

        const copiedTimer = window.setTimeout(() => setCopied(false), 1500)
        return () => window.clearTimeout(copiedTimer)
    }, [copied])

    function openBrowser() {
        openBrowserCallback()
    }


    async function copyDiscord() {
        await navigator.clipboard.writeText("@.emtato");
        setCopied(true)
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
            <DockApp src="/assets/app-icons/linkedin.png" href="https://linkedin.com/in/emilia-ma"
                     hoverText="linkedin"/>
            <DockApp src="/assets/app-icons/calendar.png" onClick={openTempo} hoverText="tempo"/>
            <DockApp src="/assets/app-icons/uwucord.png" hoverText="uwucord" onClick={copyDiscord}/>
            {copied && <span className="dock-app-copied">copied!</span>}

            <DockApp src="/assets/app-icons/map.png" hoverText="map (coming soon)"/>
            <DockApp src="/assets/app-icons/photos.png" rotate={true} hoverText="photos (coming soon)"/>
            <DockApp src="/assets/app-icons/contacts.png" hoverText="contacts" onClick={openContact}/>
            <DockApp src="/assets/app-icons/music.png" hoverText="peak" href="https://www.youtube.com/watch?v=kgAVoL49H3M"/>
            {/*https://www.youtube.com/watch?v=83C3TZ4Zm_o LEMONADE*/}
            <DockApp src="/assets/app-icons/trash.png" hoverText="trash"/>
        </div>
    </div>
}
