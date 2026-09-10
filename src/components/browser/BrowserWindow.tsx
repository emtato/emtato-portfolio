import './BrowserWindow.css'
import {useState} from "react";
import BrowserTab from "./BrowserTab.tsx";
import AboutMe from "../about/AboutMe.tsx";
import Experience from "../experience/Experience.tsx";
import Contact from "../contact/Contact.tsx";

export interface BrowserWindowProps {
    isOpen: boolean
    onClose: () => void
    isBig: boolean
    maximize: () => void //maximize window
    minimize: () => void
}

export default function BrowserWindow({isOpen: boolean, onClose, isBig, maximize, minimize}: BrowserWindowProps) {
    const [activeTab, setActiveTab] = useState(0) //0 -> about me, 1 -> projects, 2 -> contact
    const [url, setUrl] = useState("emtato://about-me")

    function changeTab(tab: number) {
        setActiveTab(tab)
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
                    <button className="browser-nav-button">
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/back.png"/>
                    </button>
                    <button className="browser-nav-button">
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/next.png"/>
                    </button>
                    <button className="browser-nav-button">
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/reload.png"/>
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
                        <span className="browser-search-bar-text">{url}</span> {/*TODO eventually into input->gogole*/}

                    </div>
                    <button className="browser-nav-button">
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/new-tab.png"/>
                    </button>
                </div>
            </div>
            <div className="browser-window-page-content">
                {/* render pages*/}
                <div className="browser-window-page">
                    {activeTab === 0 && <AboutMe/>}
                    {activeTab === 1 && <Experience/>}
                    {activeTab === 2 && <Contact/>}
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
