import './desktop.css'

interface DesktopProps {
    openBrowserCallback: () => void
}

export default function Desktop({openBrowserCallback}: DesktopProps) {

    return <div className="desktop">
        <div className="apps-list">
            <div className="app-wrapper">
                <div className="dsk-pp-button" onClick={openBrowserCallback}>
                    <img className="dsk-app-icon" alt="a" src="/assets/app-icons/potato-browser.png"/>
                    <div className="dsk-app-label">potato browser</div>
                </div>
            </div>
        </div>
    </div>
}
