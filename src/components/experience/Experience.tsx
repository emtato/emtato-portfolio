import "./Experience.css"
import TimelineCard from "./TimelineCard.tsx";

export default function Experience() {

    /*
                              <TimelineCard
                                title="Software Development Intern"
                                organization="Ontario Public Service"
                                context="Digital Solutions Branch · 8-month internship"
                                description="My team is modernizing the Java backend supporting Ontario’s driver and vehicle services."
                                tags={["Java", "Backend systems", "Public services"]}
                                dateRange="Sept 2023 - Dec 2023"
                                season="fall"
                            />
     */
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
                        <div className="timeline-insertion-point">

                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-long season-fall"/>
                        <div className="timeline-dot season-fall"/>

                        <div className="timeline-year-text TYT-right">2204</div>
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
