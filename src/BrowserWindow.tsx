import './App.css'


export default function BrowserWindow() {
    return <div className="browser-window">
        <div className="browser-window-topleft">
            <img className="browser-window-render-top-row" alt="a"
                 src="/assets/browser/frame/top-left-corner-browser.png"/>
            <div className="browser-window-traffic-lights">
                <button className="circle-button" onClick={() => {
                }}>
                    <img className="browser-window-traffic-light" alt="a" src="/assets/system/close-icon.png"/>
                </button>
                <button className="circle-button" onClick={() => {
                }}>
                    <img className="browser-window-traffic-light" alt="a" src="/assets/system/min-icon.png"/></button>
                <button className="circle-button" onClick={() => {
                }}><img className="browser-window-traffic-light" alt="a" src="/assets/system/max-icon.png"/></button>
            </div>
        </div>
        <div className="browser-window-top"></div>
        <div className="browser-window-topright">
            <img className="browser-window-render-top-row" alt="a"
                 src="/assets/browser/frame/top-right-corner-browser.png"/>
        </div>

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
                    <button className="browser-nav-button">
                        <img className="browser-nav-icon" alt="a" src="/assets/browser/toolbar/new-tab.png"/>
                    </button>
                    <div className="browser-search-bar-combined">
                        <img className="browser-search-bar-bounds" alt="a" src="/assets/browser/toolbar/search-bar-bound.png"/>
                        <div className="browser-tiled-search-bar"></div>
                    </div>
                </div>
            </div>
            <div className="browser-window-page-content"></div>
        </div>
        <div className="browser-window-right"></div>

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
