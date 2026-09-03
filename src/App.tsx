import {useEffect, useState, useRef} from 'react'
import './index.css'

export default function App() {
    const [loading, setLoading] = useState(true)
    const [browserOpen, setBrowserOpen] = useState(false)
    const [focusedAppName, setFocusedAppName] = useState<string | null>("placeholder")
    const [helpOpen, setHelpOpen] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false) //function to call when timer runs out
        }, 1067) //TODO: add load only the first 2 times of visit

        return () => clearTimeout(timer)
    }, []) //empty dependency array means this effect runs only once, not every react render
    //TODO: fix backgrund image dimensions upon window resize
    //TODO: remeber to add website to resume and cover letter and github and linkedin when done
    //TODO: potato menu bar clickable,  something cool? text bubble +" meow"?)
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
                <img className="menu-bar-icon" alt="a" src="/assets/system-assets/potato-icon.png"/>
                <div className="menu-bar-text">{focusedAppName}</div>
                <a className="menu-bar-button" href="/assets/files/Emilia%20Ma%20resume.pdf">Resume
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
                <a className="menu-bar-button" href="https://github.com/emtato">GitHub
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
                <a className="menu-bar-button" href="https://linkedin.com/in/emilia-ma">LinkedIn
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
                <button className="menu-bar-button" onClick={() => {setHelpOpen(true)}}>?</button>
            </div>
            <img className="os-main-background" alt="a" src="/assets/system-assets/toronto.jpg"/>
            <div className="dock">
                <img className="dock-left" alt="doc" src="/assets/system-assets/dock-left.png"/>
                <div className="dock-middle"></div>
                <img className="dock-right" alt="doc" src="/assets/system-assets/dock-right.png"/>
            </div>
        </div>
    }
}

