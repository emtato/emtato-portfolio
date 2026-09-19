import './BrowserWindow.css'
import {useRef, useState} from "react";
import BrowserTab from "./BrowserTab.tsx";
import AboutMe from "../about/AboutMe.tsx";
import Experience from "../experience/Experience.tsx";
import Contact from "../contact/Contact.tsx";
import {Stack} from "./tabHistory.ts";

export interface BrowserWindowProps {
    isOpen: boolean
    onClose: () => void
    isBig: boolean
    maximize: () => void //maximize window
    minimize: () => void
}

const tabIDs = new Map<string, number>([
    ["emtato://about-me", 0],
    ["emtato://experience", 1],
    ["emtato://contact", 2]
]);
export default function BrowserWindow({isOpen: boolean, onClose, isBig, maximize, minimize}: BrowserWindowProps) {
    const [activeTab, setActiveTab] = useState(0) //0 -> about me, 1 -> projects, 2 -> contact
    const [url, setUrl] = useState("emtato://about-me")
    const backHistory = useRef(new Stack<string>());
    const forwardHistory = useRef(new Stack<string>());
    const [newTabError, setNewTabError] = useState(false)

    function prevTab() {
        if (!backHistory.current.isEmpty()) {
            const prevUrl = backHistory.current.pop()
            setUrl(prevUrl)
            if (tabIDs.get(prevUrl) != undefined) {
                setActiveTab(tabIDs.get(prevUrl)!)
            }
            forwardHistory.current.push(url)
        }
    }

    function nextTab() {
        if (!forwardHistory.current.isEmpty()) {
            const nextUrl = forwardHistory.current.pop()
            if (tabIDs.get(nextUrl) != undefined) {
                setActiveTab(tabIDs.get(nextUrl)!)
            }
            setUrl(nextUrl)
            backHistory.current.push(url)
        }
    }

    function fakeRefreshTab(tab: number) {
        setActiveTab(3)
        const timeoutId = window.setTimeout(() => {
            setActiveTab(tab);
        }, 345)
    }

    function changeTab(tab: number) {
        if (tab == activeTab) return
        setActiveTab(tab)
        backHistory.current.push(url)
        forwardHistory.current.clear()
        if (tab === 0) {
            setUrl("emtato://about-me")
        } else if (tab === 1) {
            setUrl("emtato://experience")
        } else if (tab === 2) {
            setUrl("emtato://contact")
        }
    }


    /* main browser window render
    * top row */
    return <div className={isBig ? "browser-window-big" : "browser-window"}>
        <div className="browser-window-topleft">
            <img className="browser-window-render-top-row" alt="a"
                 src="/assets/browser/frame/top-left-corner-browser.png"/>
            <div className="browser-window-traffic-lights">
                <button className="circle-button" onClick={onClose}>
                    <img className="browser-window-traffic-light" alt="a" src="/assets/system/close-icon.png"/>
                </button>
                <button className="circle-button" onClick={minimize}>
                    <img className="browser-window-traffic-light" alt="a" src="/assets/system/min-icon.png"/></button>
                <button className="circle-button" onClick={maximize}>
                    <img className="browser-window-traffic-light" alt="a" src="/assets/system/max-icon.png"/>
                </button>
            </div>
        </div>
        <div className="browser-window-top">
            {/* render tabs*/}
            <div className="browser-tabs-list">
                <BrowserTab id={0} label="About Me" isActive={activeTab === 0} onSelect={() => changeTab(0)}/>
                <BrowserTab id={1} label="Experience" isActive={activeTab === 1} onSelect={() => changeTab(1)}/>
                <BrowserTab id={2} label="Contact" isActive={activeTab === 2} onSelect={() => changeTab(2)}/>
            </div>
        </div>
        <div className="browser-window-topright">
            <img className="browser-window-render-top-row" alt="a"
                 src="/assets/browser/frame/top-right-corner-browser.png"/>
        </div>
        {/* middle row*/}
        <div className="browser-window-left"></div>
        <div className="browser-window-center">
            <div className="browser-window-search-layer">
                <div className="browser-window-toolbar">
                    <button className="browser-nav-button" onClick={prevTab}>
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/back.png"/>
                    </button>
                    <button className="browser-nav-button" onClick={nextTab}>
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/next.png"/>
                    </button>
                    <button className="browser-nav-button">
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/reload.png"
                             onClick={() => {
                                 fakeRefreshTab(activeTab)
                             }}/>
                    </button>
                    <button className="browser-nav-button" onClick={() => {
                        changeTab(0)
                    }}>
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/home-icon.png"/>
                    </button>
                    <div className="browser-search-bar-combined">
                        <img className="browser-search-bar-bounds" alt="a"
                             src="/assets/browser/toolbar/search-bar-bound.png"/>
                        <div className="browser-tiled-search-bar"></div>
                        <img className="browser-search-icon" alt=""
                             src="/assets/browser/toolbar/search-icon.png"/>
                        <input className="browser-search-bar-text" value={url} onClick={() => {
                            setUrl("")
                        }}
                               onChange={(event) => setUrl(event.currentTarget.value)} onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                window.open("https://www.google.com/search?q=" + event.currentTarget.value, "_blank")
                            }
                        }}></input>
                    </div>
                    <button className="browser-nav-button" onClick={() => setNewTabError(true)}>
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/new-tab.png"/>
                    </button>
                </div>
            </div>
            {newTabError &&
                <div className="newTabError">
                    <img className="newTabError-img" alt="a" src="/assets/system/error-window.png"/>
                    <div className="newTabError-header">error :&lt;</div>
                    <div className="newTabError-text">sorry i dont have enough ram for 4 tabs .-. <br/><br/> have u seen
                        the prices ? :o
                    </div>
                    <img className="newTabError-close-button" alt="a" src="/assets/system/close-icon.png"
                         onClick={() => setNewTabError(false)}/>
                </div>}
            <div className="browser-window-page-content">
                {/* render pages*/}
                <div className="browser-window-page">
                    {activeTab === 0 && <AboutMe nextTab={() => changeTab(1)}/>}
                    {activeTab === 1 && <Experience/>}
                    {activeTab === 2 && <Contact/>}
                    {activeTab == 3 && <div className="browser-tab-empty"/>}
                </div>
            </div>
        </div>
        <div className="browser-window-right"></div>
        {/* bottom row*/}
        <div className="browser-window-bottomleft">
            <img className="browser-window-render-bottom-row" alt="a"
                 src="/assets/browser/frame/bottom-left-corner-browser.png"/>
        </div>
        <div className="browser-window-bottom"></div>
        <div className="browser-window-bottomright">
            <img className="browser-window-render-bottom-row" alt="a"
                 src="/assets/browser/frame/bottom-right-corner-browser.png"/>
        </div>


    </div>
}
