import "./Experience.css"

export default function Experience() {

    return (

        <div className="experience-container">
            <section className="work-experience-container">
                <header className="section-header">
                    <img className="section-image" alt="a" src="/assets/browser/content/experience/work.png"/>
                    <div className="section-uppertext">My Career so far</div>
                    <h2 className="section-title">Experience</h2>
                    <div className="section-accent"/>
                </header>
                <div className="work-experience-timeline">
                    <div className="work-experience-timeline-line-container">
                        <div className="timeline-segment season-spring"/>
                        <div className="timeline-segment segment-long season-fall"/>
                        <div className="timeline-year-text TYT-left">2204</div>
                        <div className="timeline-dot season-fall"/>
                    </div>
                </div>
            </section>
            <section className="projects-container">
                <header className="section-header">
                    <img className="section-image" alt="a" src="/assets/browser/content/experience/code.png"/>
                    <div className="section-uppertext">My Code Babies</div>
                    <h2 className="section-title">Projects</h2>
                    <div className="section-accent"/>
                </header>
                <div className="projects-grid">

                </div>
            </section>
        </div>
    )
}
