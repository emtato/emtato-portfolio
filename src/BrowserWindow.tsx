import './App.css'


export default function BrowserWindow() {
    return <div className="browser-window">
        <div className="browser-window-topleft">
            <img className="browser-window-render-top-row" alt="a" src="/assets/browser/frame/top-left-corner-browser.png"/>
        </div>
        <div className="browser-window-top"></div>
        <div className="browser-window-topright">
            <img className="browser-window-render-top-row" alt="a" src="/assets/browser/frame/top-right-corner-browser.png"/>
        </div>

        <div className="browser-window-left"></div>
        <div className="browser-window-center">
            <div className="browser-window-search-layer"></div>
            <div className="browser-window-page-content"></div>

        </div>
        <div className="browser-window-right"></div>
        <div className="browser-window-bottomleft"></div>
        <div className="browser-window-bottom"></div>
        <div className="browser-window-bottomright"></div>
    </div>
}
