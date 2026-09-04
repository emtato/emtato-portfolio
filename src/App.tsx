import {useEffect, useState, useRef} from 'react'
import './index.css'


export default function App() {
    const [loading, setLoading] = useState(true)
    const [browserOpen, setBrowserOpen] = useState(false)
    const [focusedAppName, setFocusedAppName] = useState<string | null>("placeholder")
    const [helpOpen, setHelpOpen] = useState(false)
    const [potatoIsSpeaking, setPotatoIsSpeaking] = useState(false)
    const [currentTimeString, setCurrentTimeString] = useState<string | null>("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false) //function to call when timer runs out
        }, 967) //TODO: add load only the first 2 times of visit

        return () => clearTimeout(timer)
    }, []) //empty dependency array means this effect runs only once, not every react render
    //TODO: fix backgrund image dimensions upon window resize
    //TODO: remeber to add website to resume and cover letter and github and linkedin when done

    useEffect(() => { //update clock time every second
        const clockInterval = setInterval(() => {
            const now = new Date()
            const shortMonth = now.toLocaleDateString(undefined, {
                weekday: "short", month: "short", day: "numeric",
                hour: "numeric", minute: "numeric", second: "numeric"})
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

    if (loading) {
        return <div className="loading-main">
            <img className="potato-icon" alt="a" src="/assets/system-assets/potato-icon.png"/>
            <div className="loading-text">emtato loading..</div>
            <div className="loading-bar">
                <div className="loading-bar-fill"></div>
            </div>
        </div>
    } else {
        return <div className="os-main">
            <div className="menu-bar">

                {/* left side menu bar*/}
                <button className="potato-button" onClick={potatoed}>
                    <img className="menu-bar-icon" alt="a" src="/assets/system-assets/potato-icon.png"/>
                </button>
                {potatoIsSpeaking && <>
                    <img className="potatomeow" alt="a" src="/assets/system-assets/speech-bubble.png"></img>
                    <div className="potatospeak">meow</div>
                </>
                }
                <div className="menu-bar-text">{focusedAppName}</div>
                <a className="menu-bar-button" href="/assets/files/Emilia%20Ma%20resume.pdf" target="_blank">Resume
                    <span className="link-icon-stack">
                        <img
                            className="link-icon-menubar link-icon-default"
                            src="/assets/system-assets/link-icon.png"
                            alt=""
                        />
                        <img
                            className="link-icon-menubar link-icon-hover"
                            src="/assets/system-assets/link-icon-hover.png"
                            alt=""
                        />
                    </span>
                </a>
                <a className="menu-bar-button" href="https://github.com/emtato" target="_blank">GitHub
                    <span className="link-icon-stack">
                        <img
                            className="link-icon-menubar link-icon-default"
                            src="/assets/system-assets/link-icon.png"
                            alt=""
                        />
                        <img
                            className="link-icon-menubar link-icon-hover"
                            src="/assets/system-assets/link-icon-hover.png"
                            alt=""
                        />
                    </span>
                </a>
                <a className="menu-bar-button" href="https://linkedin.com/in/emilia-ma" target="_blank">LinkedIn
                    <span className="link-icon-stack">
                        <img
                            className="link-icon-menubar link-icon-default"
                            src="/assets/system-assets/link-icon.png"
                            alt=""
                        />
                        <img
                            className="link-icon-menubar link-icon-hover"
                            src="/assets/system-assets/link-icon-hover.png"
                            alt=""
                        />
                    </span>
                </a>
                <a className="menu-bar-button" href="mailto:emilia.ma@mail.utoronto.ca">Email Me!
                    <span className="link-icon-stack">
                        <img
                            className="link-icon-menubar link-icon-default"
                            src="/assets/system-assets/link-icon.png"
                            alt=""
                        />
                        <img
                            className="link-icon-menubar link-icon-hover"
                            src="/assets/system-assets/link-icon-hover.png"
                            alt=""
                        />
                    </span>
                </a>
                <button className="menu-bar-button" onClick={() => {
                    setHelpOpen(true)
                }}>?
                </button>
            </div>
            {/* right side menu bar*/}
            <div className="right-side-menu-bar">
                <div className="menu-bar-text">{currentTimeString}</div>

            </div>

            {/* rest of OS*/}
            <img className="os-main-background" alt="a" src="/assets/system-assets/toronto.jpg"/>
            <div className="dock">
                <img className="dock-left" alt="doc" src="/assets/system-assets/dock-left.png"/>
                <div className="dock-middle"></div>
                <img className="dock-right" alt="doc" src="/assets/system-assets/dock-right.png"/>
            </div>
        </div>
    }
}

