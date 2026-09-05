import {useEffect, useState} from 'react'
import {useBattery} from 'react-use'

interface MenuBarProps {
    focusedAppName: string | null
    currentModeIsDark: boolean
    onToggleMode: () => void
    onOpenHelp: () => void
}

export default function MenuBar({
                                    focusedAppName,
                                    currentModeIsDark,
                                    onToggleMode,
                                    onOpenHelp,
                                }: MenuBarProps) {
    const [potatoIsSpeaking, setPotatoIsSpeaking] = useState(false)
    const [currentTimeString, setCurrentTimeString] = useState<string | null>("")
    const [miguIsSpeaking, setMiguIsSpeaking] = useState(false)
    const battery = useBattery()

    const batteryPercentage = battery.isSupported && battery.fetched ? Math.round(battery.level * 100) : 68

    useEffect(() => { //update clock time every second
        const clockInterval = setInterval(() => {
            const now = new Date()
            const shortMonth = now.toLocaleDateString(undefined, {
                weekday: "short", month: "short", day: "numeric",
                hour: "numeric", minute: "numeric", second: "numeric"
            })
            setCurrentTimeString(shortMonth)
        }, 1000)

        return () => clearInterval(clockInterval)
    }, [])

    function potatoed() { //potato clicked
        setPotatoIsSpeaking(true)
        setTimeout(() => {
            setPotatoIsSpeaking(false)
        }, 1000)
    }

    function wified() {
        setMiguIsSpeaking(true)
        setTimeout(() => {
            setMiguIsSpeaking(false)
        }, 1000)
    }

    return <>
        <div className="menu-bar">
            <button className="potato-button" onClick={potatoed}>
                <img className="menu-bar-potato-icon" alt="a" src="/assets/system/shared/potato-icon.png"/>
            </button>
            {potatoIsSpeaking && <>
                <img className="potatomeow" alt="a" src="/assets/system/menu-bar/speech-bubble.png"/>
                <div className="potatospeak">meow</div>
            </>}
            <div className="left-menu-bar">
                {/* left side menu bar*/}

                <div className="menu-bar-text">{focusedAppName}</div>
                <a className="menu-bar-button" href="/assets/documents/Emilia%20Ma%20resume.pdf" target="_blank">Resume
                    <span className="link-icon-stack">
                    <img
                        className="link-icon-menubar link-icon-default"
                        src="/assets/system/shared/link-icon.png"
                        alt=""
                    />
                    <img
                        className="link-icon-menubar link-icon-hover"
                        src="/assets/system/shared/link-icon-hover.png"
                        alt=""
                    />
                </span>
                </a>
                <a className="menu-bar-button" href="https://github.com/emtato" target="_blank">GitHub
                    <span className="link-icon-stack">
                    <img
                        className="link-icon-menubar link-icon-default"
                        src="/assets/system/shared/link-icon.png"
                        alt=""
                    />
                    <img
                        className="link-icon-menubar link-icon-hover"
                        src="/assets/system/shared/link-icon-hover.png"
                        alt=""
                    />
                </span>
                </a>
                <a className="menu-bar-button" href="https://linkedin.com/in/emilia-ma" target="_blank">LinkedIn
                    <span className="link-icon-stack">
                    <img
                        className="link-icon-menubar link-icon-default"
                        src="/assets/system/shared/link-icon.png"
                        alt=""
                    />
                    <img
                        className="link-icon-menubar link-icon-hover"
                        src="/assets/system/shared/link-icon-hover.png"
                        alt=""
                    />
                </span>
                </a>
                <a className="menu-bar-button" href="mailto:emilia.ma@mail.utoronto.ca">Email Me!
                    <span className="link-icon-stack">
                    <img
                        className="link-icon-menubar link-icon-default"
                        src="/assets/system/shared/link-icon.png"
                        alt=""
                    />
                    <img
                        className="link-icon-menubar link-icon-hover"
                        src="/assets/system/shared/link-icon-hover.png"
                        alt=""
                    />
                </span>
                </a>
                <button className="menu-bar-button" onClick={onOpenHelp}>?
                </button>
            </div>

            {/* right side menu bar*/}
            <div className="right-side-menu-bar">
                <button className="wifi-button" onClick={wified}>
                    <img className="menu-bar-icon" alt="a" src="/assets/system/menu-bar/wifi-icon.png"/>
                </button>
                {miguIsSpeaking && <>
                    <img className="migu" alt="a" src="/assets/system/menu-bar/speech-bubble.png"/>
                    <div className="miguspeak">hiding in your wifi</div>
                </>}
                <div className="battery">
                    <div className="battery-percentage">{batteryPercentage}</div>
                    <img className="menu-bar-icon" alt="a" src="/assets/system/menu-bar/battery-icon.png"/>
                </div>
                <button className="menu-bar-button" onClick={onToggleMode}>
                <span className="link-icon-stack">
                    {!currentModeIsDark && <img
                        className=" light-mode-button"
                        src="/assets/system/menu-bar/light-mode-icon.png"
                        alt=""
                    />}
                    {currentModeIsDark && <img
                        className="dark-mode-button"
                        src="/assets/system/menu-bar/dark-mode-icon.png"
                        alt=""
                    />}
                </span>
                </button>

                <div className="menu-bar-text">{currentTimeString}</div>
            </div>
        </div>
    </>
}
