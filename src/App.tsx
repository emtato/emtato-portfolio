import {useEffect, useState, useRef} from 'react'
import './index.css'

export default function App() {
    const [loading, setLoading] = useState(true)
    const [browserOpen, setBrowserOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false) //function to call when timer runs out
        }, 1067) //change back to 1567 when done

        return () => clearTimeout(timer)
    }, []) //empty dependency array means this effect runs only once, not every react render
    //TODO: fix backgrund image dimensions upon window resize

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

