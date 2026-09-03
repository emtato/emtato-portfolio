import {useEffect, useState, useRef} from 'react'
import './index.css'

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false) //function to call when timer runs out
        }, 1567)

        return () => clearTimeout(timer)
    }, []) //empty dependency array means this effect runs only once, not every react render


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
            <div className="menu-bar"></div>
            <img className="os-main-background" alt="a" src="/assets/system-assets/toronto.jpg"/>
        </div>
    }
}

