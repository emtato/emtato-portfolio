import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface ProjectProps {
    title: string
    shortHighlight?: string
    highlight: string
    stack: string[]
    shortDesc: string
    description: string
    myContribution: string
    cardImg: string
    expandedImgs: string[]
    timeInfo: string
    detailedTimeInfo: string
    projectLink?: string
    github: string
}


export default function ProjectCard({
                                        title, shortDesc, shortHighlight, stack, highlight, description, cardImg,
                                        expandedImgs, timeInfo, projectLink, github, detailedTimeInfo, myContribution
                                    }: ProjectProps) {
    const [isOpen, setisOpen] = useState(false)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const projectImages = [cardImg].concat(expandedImgs)
    const portalTarget = document.querySelector(".browser-window-page")

    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setisOpen(false)
            }
        }

        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("keydown", handleEscape)
        }
    }, [])

    function openProject() {
        setActiveImageIndex(0)
        setisOpen(true)
    }

    function showPreviousImage() {
        setActiveImageIndex((currentIndex) =>
            currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1
        )
    }

    function showNextImage() {
        setActiveImageIndex((currentIndex) =>
            currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1
        )
    }

    function addCommaSpacing(text: string) {
        return text.replace(/, /g, ",\u200A ")
    }

    //TODO: change descriptions, maybe shortdesc, implement achievementbanner, maybe change title font,and reorganizeview:

    return <>
        <article className="project-card" onClick={openProject}>
            {shortHighlight && <div className="project-card-banner">
                <div className="project-card-banner-text">{shortHighlight}</div>
            </div>}

            <div className="project-card-image-wrapper">
                {cardImg && <img className="project-card-image" alt='a' src={cardImg}/>}
            </div>
            <div className="project-card-text-wrapper">
                <div className="project-card-heading">
                    <div className="project-card-title-group">
                        <h3 className="project-card-title">{title}</h3>
                        <div className="project-card-links">
                            {projectLink && <a className="project-card-link-button" href={projectLink} target="_blank"
                                               onClick={(event) => event.stopPropagation()}>
                                <img className="project-card-link-icon" alt="a"
                                     src="/assets/system/link-icon-hover.png"/>
                            </a>}
                            {github && <a className="project-card-link-button-gh" href={github} target="_blank"
                                          onClick={(event) => event.stopPropagation()}>
                                <img className="project-card-github-icon" alt=""
                                     src="/assets/browser/content/experience/github.png"/>
                            </a>}
                        </div>
                    </div>
                    {timeInfo && <div className="project-card-timeInfo">{timeInfo}</div>}
                </div>
                <p className="project-card-shortDesc">{addCommaSpacing(shortDesc)}</p>

                {stack.length > 0 && <div className="project-card-stack-wrapper">
                    {stack.map((technology) =>
                        <span className="project-card-stack-tag" key={technology}>{technology}</span>
                    )}
                </div>}
            </div>
        </article>

        {/*opened card*/}
        {isOpen && portalTarget && createPortal( /* escape current parent container (projects container) bounds)*/
            <div className="opened-project-overlay" onMouseDown={() => setisOpen(false)}>
                <section className="opened-project-card" onMouseDown={(event) => event.stopPropagation()}>
                    <div className="opened-project-header-two-sections">

                        <header className="opened-project-header">
                            <div className="opened-project-title-row">

                                <h2 className="opened-project-title">{title}</h2>
                                <div className="opened-project-links">
                                    {projectLink &&
                                        <a className="project-card-link-button opened-project-link-button"
                                           href={projectLink} target="_blank">
                                            <img className="project-card-link-icon opened-project-link-icon" alt=""
                                                 src="/assets/system/link-icon-hover.png"/>
                                        </a>}
                                    {github && <a className="project-card-link-button-gh opened-project-link-button"
                                                  href={github} target="_blank">
                                        <img className="project-card-github-icon opened-project-github-icon" alt=""
                                             src="/assets/browser/content/experience/github.png"/>
                                    </a>}
                                </div>

                            </div>
                            <p className="opened-project-desc">{addCommaSpacing(description)}</p>
                        </header>
                        <div className="project-card-right-group">
                            <span className="opened-project-time">{detailedTimeInfo}</span>
                            {highlight && <div className="opened-project-highlight">
                                {addCommaSpacing(highlight)}</div>}
                        </div>
                    </div>

                    <div className="opened-project-body">
                        <div className="opened-project-body-row1">
                            <section className="opened-project-myContribution-section">
                                <div className="opened-project-myContribution-title">Engineering highlights</div>
                                <div
                                    className="opened-project-detail-myContribution opened-project-detail-myContribution">{addCommaSpacing(myContribution)}</div>
                            </section>
                        </div>
                        <div className="opened-project-body-row2">
                            <div className="opened-project-gallery-column">
                                {projectImages.length > 0 && <>
                                    <div className="opened-project-gallery">
                                        <img className="opened-project-image" src={projectImages[activeImageIndex]}
                                             alt="a"/>

                                        {projectImages.length > 1 && <>
                                            <button className="opened-project-gallery-button gallery-button-previous"
                                                    type="button"
                                                    onClick={showPreviousImage}>
                                                &lt;
                                            </button>
                                            <button className="opened-project-gallery-button gallery-button-next"
                                                    type="button" onClick={showNextImage}>
                                                &gt;
                                            </button>
                                        </>}

                                        <span className="opened-project-image-count">
                                        {activeImageIndex + 1} / {projectImages.length}
                                    </span>
                                    </div>
                                </>}
                            </div>
                            {stack.length > 0 &&
                                <section className="opened-project-stack-section">
                                    <h3 className="opened-project-section-label">I used..</h3>
                                    <div className="opened-project-stack">
                                        {stack.map((technology) =>
                                            <span className="opened-project-stack-tag"
                                                  key={technology}>{technology}</span>
                                        )}
                                    </div>
                                </section>}
                        </div>
                    </div>
                </section>
            </div>,
            portalTarget
        )}
    </>
}
//TODO: achievement/emphasis baner diagonal across
