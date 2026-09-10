import "./Experience.css"

export default function Experience() {

    return (

        <div className="experience-container">
            <section className="work-experience-container">
                <header className="section-header">
                    <img className="section-number" alt="a" src="/assets/browser/content/experience/work.png"/>
                    <div className="section-uppertext">My Career so far</div>
                    <h2 className="section-title">Experience</h2>
                    <div className="section-accent"/>
                </header>
                <div className="work-experience-timeline">

                </div>
            </section>
            <section className="projects-container">
                <header className="section-header">
                    <div className="section-uppertext">Selected projects</div>
                    <h2 className="section-title">Things I’ve Built</h2>
                    <div className="section-accent"/>
                </header>
                <div className="projects-grid">

                </div>
            </section>
        </div>
    )
}
