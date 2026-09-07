export type TabId = 0 | 1 | 2

type BrowserTabProps = {
    id: TabId
    label: string
    isActive: boolean
    onSelect: (id: TabId) => void
}

export default function BrowserTab({id, label, isActive, onSelect}: BrowserTabProps) {
    return <button className="browser-tab-button" onClick={() => onSelect(id)}>
        {isActive && <img className="browser-tab-img" alt="a" src="/assets/browser/toolbar/active-tab.png"/>}
        {!isActive && <img className="browser-tab-img" alt="a" src="/assets/browser/toolbar/inactive-tab.png"/>}
        <span className="browser-tab-label">{label}</span>
    </button>
}
