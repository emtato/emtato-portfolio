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
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-fall2026" alt="a"
                                 src="/assets/browser/content/experience/fall-1.png"/>
                            <TimelineCard
                                title="Backend developer / Junior Technical Analyst"
                                organization="Ontario Public Service"
                                context="Digital Solutions Branch · 4-8 month internship"
                                description="Working on the Java backend behind Ontario’s driver and vehicle services, with a focus on system modernization, testing, and core business logic."
                                tags={["Java", "Backend", "E2E testing", "Playwright"]}
                                dateRange="Sept 2026 - Present"
                                season="fall"
                                highlights={["AHDIAHIDA", "ANJKANKJAA"]}
                                mini={false}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-segment segment-small season-summer"/>
                        <div className="timeline-segment segment-small season-spring"/>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-winter2026" alt="a"
                                 src="/assets/browser/content/experience/winter.png"/>
                            <TimelineCard
                                title="hackathon"
                                organization="Ontario asdasdada Service"
                                context="Digital adasdas Branch · 4-8 month internship"
                                description="Working on adasdasdas Java backend behind Ontario’s driver and vehicle services, with a focus on system modernization, testing, and core business logic."
                                tags={["a"]}
                                dateRange="jan"
                                season="winter"
                                highlights={["AHDIAHIDA", "ANJKANKJAA"]}
                                mini={true}
                            />
                            <div className="timeline-marker season-winter"/>
                        </div>
                        <div className="timeline-segment segment-xs season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2026</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-segment segment-xs season-summer"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-winter2026" alt="a"
                                 src="/assets/browser/content/experience/summer.png"/>
                            <TimelineCard
                                title="deans list scholar"
                                organization="Ontario asdasdada Service"
                                context="Digital adasdas Branch · 4-8 month internship"
                                description="Working on adasdasdas Java backend behind Ontario’s driver and vehicle services, with a focus on system modernization, testing, and core business logic."
                                tags={["a"]}
                                dateRange="summer idk"
                                season="summer"
                                highlights={["AHDIAHIDA", "ANJKANKJAA"]}
                                mini={true}
                            />
                            <div className="timeline-marker season-summer"/>
                        </div>
                        <div className="timeline-segment segment-xs season-summer"/>
                        <div className="timeline-segment segment-small season-spring"/>
                        <div className="timeline-segment segment-xs season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2025</div>
                        <div className="timeline-segment segment-xs season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-insertion-point">
                            <TimelineCard
                                title="Uoft"
                                organization="aa"
                                context="Computer Science Specialist"
                                description="asdddddd"
                                tags={["UOP"]}
                                dateRange="Sept 2024 - Present"
                                season="fall"
                                mini={false}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-segment season-summer"/>
                        <div className="timeline-segment segment-small season-spring"/>
                        <div className="timeline-insertion-point">
                            <TimelineCard
                                title="graduated tfs"
                                organization="aa"
                                context=""
                                description="asdddddd"
                                tags={["UOP"]}
                                dateRange="Sept 2024 - Present"
                                season="spring"
                                mini={false}
                            />
                            <div className="timeline-marker season-spring"/>
                        </div>
                        <div className="timeline-segment segment-xs season-spring"/>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2024</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-insertion-point">
                            <TimelineCard
                                title="submitted EE"
                                organization="aa"
                                context=""
                                description="A"
                                tags={["UOP"]}
                                dateRange="Fall 2022 - Fall 2023"
                                season="fall"
                                mini={true}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                    </div>
                </div>
            </section>
            {/*projects*/}
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
