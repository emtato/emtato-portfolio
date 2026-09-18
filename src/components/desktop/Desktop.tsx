import './desktop.css'

interface DesktopProps {
    openBrowserCallback: () => void
}

export default function Desktop({openBrowserCallback}: DesktopProps) {

    return <div className="desktop">
        <div className="apps-list">
            <div className="app-wrapper">
                <div className="dsk-app-button" onClick={openBrowserCallback}>
                    <img className="dsk-app-icon" alt="a" src="/assets/app-icons/potato-browser.png"/>
                    <div className="dsk-app-label">potato browser</div>
                </div>
            </div>
            <div className="app-wrapper">
                <a className="dsk-app-button" href="https://tempo.ems.lol" target="_blank">
                    <img className="dsk-app-icon" alt="a" src="/assets/app-icons/Calendar.png"/>
                    <div className="dsk-app-label">tempo</div>
                </a>
            </div>
        </div>
        {/* TODO: photo gallery for more of my photos*/}
    </div>
}
