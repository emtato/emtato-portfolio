import {useEffect, useState} from 'react'
import './index.css'
import MenuBar from './MenuBar'


export default function App() {
    const [loading, setLoading] = useState(true)
    const [browserOpen, setBrowserOpen] = useState(false)
    const [focusedAppName, setFocusedAppName] = useState<string | null>("placeholder")
    const [helpOpen, setHelpOpen] = useState(false)
    const [currentModeIsDark, setCurrentModeIsDark] = useState(true) //dark mode by default

    //TODO: modify things for dark/light mode visually
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false) //function to call when timer runs out
        }, 967) //TODO: add load only the first 2 times of visit

        return () => clearTimeout(timer)
    }, []) //empty dependency array means this effect runs only once, not every react render
    //TODO: fix backgrund image dimensions upon window resize
    //TODO: remeber to add website to resume and cover letter and github and linkedin when done

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
            <MenuBar
                focusedAppName={focusedAppName}
                currentModeIsDark={currentModeIsDark}
                onToggleMode={() => setCurrentModeIsDark(modeIsDark => !modeIsDark)}
                onOpenHelp={() => setHelpOpen(true)}
            />

            {/* rest of OS*/
            }
            <img className="os-main-background" alt="a" src="/assets/system-assets/toronto.jpg"/>
            <div className="dock">
                <img className="dock-left" alt="doc" src="/assets/system-assets/dock-left.png"/>
                <div className="dock-middle"></div>
                <img className="dock-right" alt="doc" src="/assets/system-assets/dock-right.png"/>
            </div>
        </div>
    }
}
