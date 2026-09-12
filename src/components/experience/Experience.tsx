import "./Experience.css"
import TimelineCard from "./TimelineCard.tsx";

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
                        <div className="timeline-segment segment-medium season-fall"/>
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
                                bullets={["i barely got onboarded yet ill do something soon!"]}
                                mini={false}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-medium season-fall"/>
                        <div className="timeline-segment segment-medium season-summer"/>
                        <div className="timeline-segment segment-medium season-spring"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-spring2026 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/spring.png"/>
                        </div>
                        <div className="timeline-segment segment-medium season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-winter2026" alt="a"
                                 src="/assets/browser/content/experience/winter.png"/>
                            <TimelineCard
                                title="GirlMath"
                                organization="ElleHacks · York University"
                                context="36-hour hackathon · 4-person team"
                                achievement="Led backend development"
                                description="Built an AI-powered journaling app that helps girls in STEM track confidence, motivation, and learning patterns."
                                tags={["Python", "FastAPI", "Gemini API", "MongoDB"]}
                                dateRange="Jan 30 - Feb 1, 2026"
                                season="winter"
                                bullets={[
                                    "Built the app’s REST endpoints with FastAPI.",
                                    "Integrated Gemini for journal analysis and deployed the API to DigitalOcean."
                                ]}
                                mini={true}
                            />
                            <div className="timeline-marker season-winter"/>
                        </div>
                        <div className="timeline-segment segment-medium season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2026</div>
                        <div className="timeline-segment segment-medium season-winter"/>
                        <div className="timeline-segment segment-medium season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-fall2025 timeline-art" alt="a" src="/assets/browser/content/experience/fall-2.png"/>
                        </div>
                        <div className="timeline-segment segment-medium season-summer"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-summer2025" alt="a"
                                 src="/assets/browser/content/experience/summer.png"/>
                            <TimelineCard
                                title="Dean’s List Scholar"
                                organization="University of Toronto"
                                context="Academic distinction"
                                achievement="3.75+ cumulative GPA · 3.5 required"
                                description="Earned after completing my fifth U of T credit."
                                dateRange="Summer 2025"
                                season="summer"
                                mini={true}
                            />
                            <div className="timeline-marker season-summer"/>
                        </div>
                        <div className="timeline-segment segment-small season-summer"/>
                        <div className="timeline-segment segment-small season-spring"/>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-winter2025 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/winter-2.png"/>
                        </div>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2025</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-fall2024 timeline-art" alt="a" src="/assets/browser/content/experience/fall-2.png"/>
                            <TimelineCard
                                title="B.Sc. in Computer Science"
                                organization="University of Toronto"
                                context="Computer Science Specialist"
                                achievement="3.76/4.0 cumulative GPA"
                                description="Coursework spans data structures and algorithms, software design, systems programming, computer organization, theory of computation, and human-computer interaction."
                                bullets={[
                                    "Finished above average in 11 of 12 technical courses.", "Earned an A+ in Systems Programming vs a B- average."
                                ]}
                                tags={["Data Structures", "Software Design", "Systems", "HCI"]}
                                dateRange="Sept 2024 - Expected May 2029"
                                season="fall"
                                mini={false}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-medium season-fall"/>
                        <div className="timeline-segment season-summer"/>
                        <div className="timeline-segment season-spring"/>
                        <div className="timeline-insertion-point">
                            <TimelineCard
                                title="Toronto French School Graduate"
                                organization="TFS - Canada’s International School"
                                context="Advanced Bilingual IB Diploma · French International Brevet"
                                achievement="97% university admissions average"
                                description="Completed a rigorous English-French bilingual education."
                                bullets={[
                                    "Completed Higher Level courses in Physics, Chemistry, and Geography.",
                                    "Co-founded the school chess club and participated in the Canadian Computing Competition."
                                ]}
                                tags={["Bilingual IB", "HL Physics", "HL Chemistry", "HL Geography"]}
                                dateRange="Sept 2016 - May 2024"
                                season="spring"
                                mini={false}
                            />
                            <div className="timeline-marker season-spring"/>
                        </div>
                        <div className="timeline-segment season-spring"/>
                        <div className="timeline-segment segment-medium season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2024</div>
                        <div className="timeline-segment segment-medium season-winter"/>
                        <div className="timeline-segment segment-medium season-fall"/>
                        <div className="timeline-insertion-point">
                            <TimelineCard
                                title="Physics Extended Essay"
                                organization="International Baccalaureate"
                                context="Independent experimental research"
                                achievement="Grade A"
                                description="Investigated how increasing the density of sucrose solutions affected the terminal velocity of a falling glass marble."
                                bullets={[
                                    "Recorded trials at 240 fps and extracted position-time data with Tracker.",
                                    "Found an overall decrease in terminal velocity, with the sharpest drop at the highest tested densities."
                                ]}
                                tags={["Fluid Mechanics", "Experimental Design", "Data Analysis"]}
                                dateRange="Fall 2022 - Fall 2023"
                                season="fall"
                                mini={true}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-condensed-years"/>
                        <div className="custom-year-placement2023 timeline-year-text">2023</div>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2022</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-medium season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-winter2026" alt="a"
                                 src="/assets/browser/content/experience/fall-1.png"/>
                            <TimelineCard
                                title="French Tutor & English Volunteer"
                                organization="Independent & volunteer tutoring"
                                context="One-on-one and remote instruction"
                                description="Tutored a local younger student in French and taught conversational English to children in China over video calls."
                                tags={["French", "English", "Mentorship", "Remote Teaching"]}
                                dateRange="2021 - 2024"
                                season="fall"
                                bullets={[
                                    "Adapted and reframed explanations around each learner until difficult ideas clicked."
                                ]}
                                mini={true}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment segment-xl season-fall"/>

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
