import "./Experience.css"
import TimelineCard from "./TimelineCard.tsx";
import ProjectCard from "./ProjectCard.tsx";

export default function Experience() {
    const mediaFilePath = "/assets/browser/content/experience/project/"
    return (

        <div className="experience-container">
            <section className="work-experience-container">
                <header className="section-header">
                    <img className="section-image" alt="a"
                         src="/assets/browser/content/experience/prof-experience/work.png"/>
                    <div className="section-uppertext">My Career so far</div>
                    <h2 className="section-title">Experience</h2>
                    <div className="section-accent"/>
                </header>

                <div className="work-experience-timeline">
                    <div className="work-experience-timeline-line-container">
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-fall2026" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/fall-1.png"/>
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
                                 src="/assets/browser/content/experience/prof-experience/spring.png"/>
                        </div>
                        <div className="timeline-segment segment-medium season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-winter2026" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/winter.png"/>
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
                            <img className="TLA-fall2025 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/fall-2.png"/>
                        </div>
                        <div className="timeline-segment segment-medium season-summer"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-summer2025" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/summer.png"/>
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
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2025</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-fall2024 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/fall-2.png"/>
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
                            <img className="TLA-spring2024 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/spring.png"/>
                            <TimelineCard
                                title="Graduating Toronto French School"
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
                        <div className="timeline-segment segment-medium season-spring"/>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2024</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-segment segment-small season-summer"/>
                        <div className="timeline-segment segment-small season-spring"/>
                        <div className="timeline-segment segment-xs season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-winter2023 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/winter-2.png"/>
                        </div>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2023</div>
                        <div className="timeline-segment segment-xs season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>

                        <div className="timeline-insertion-point">
                            <div className="timeline-card-wrapper timeline-card-wrapper-mini">
                                <img className="timeline-art TLA-fall2022" alt="a"
                                     src="/assets/browser/content/experience/prof-experience/fall-1.png"/>
                                <img className="TLA-fall2022-2 timeline-art" alt="a"
                                     src="/assets/browser/content/experience/prof-experience/fall-2.png"/>
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
                            </div>
                            <div className="timeline-marker season-fall"/>

                        </div>
                        <div className="timeline-segment segment-small season-fall"/>
                        <div className="timeline-segment segment-medium season-summer"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-summer2022 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/summer.png"/>
                        </div>
                        <div className="timeline-segment segment-medium season-spring"/>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2022</div>
                        <div className="timeline-segment segment-small season-winter"/>
                        <div className="timeline-segment segment-small season-fall"/>

                        <div className="timeline-insertion-point">
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
                    <img className="section-image" alt="a" src={`${mediaFilePath}code.png`}/>
                    <div className="section-uppertext">My Code Babies</div>
                    <h2 className="section-title">Projects</h2>
                    <div className="section-accent"/>
                </header>
                <div className="projects-grid">
                    <div className="project-column">
                        <ProjectCard
                            title="Tempo"
                            shortDesc="Full-stack calendar focused on making scheduling faster and more intuitive through streamlined interactions."
                            stack={["React", "TypeScript", "FullCalendar", "Node.js", "Express", "MongoDB", "Better Auth", "Railway"]}
                            shortHighlight="solo fullstack"
                            highlight="Independently designed, developed, and deployed"
                            description="Tired of slow, clunky scheduling in my regular calendar app, I decided to build my own, with convenience embedded into every feature. Smarter parsing, less clicks, and more to come."
                            myContribution="Independently designed, developed, and deployed Tempo end to end, implementing account authentica-
tion and user-scoped event storage so users can access their own calendars across sessions and devices.
• Engineered a regex parser that outperforms Google and Apple Calendar across 3+ tested scheduling
scenarios, recognizing multi-day and combined date-time ranges (with “now” endpoints) in one field.
• Devised a one-click time entry workflow with instant AM/PM toggling for faster event creation."
                            cardImg={`${mediaFilePath}tempo/img1.png`}
                            expandedImgs={[
                                `${mediaFilePath}tempo/img2.png`,
                                `${mediaFilePath}tempo/img3.png`,
                                `${mediaFilePath}tempo/img4.png`
                            ]}
                            timeInfo="2026 - Present"
                            detailedTimeInfo="July 2026 - Present"
                            github="https://github.com/emtato/tempo."
                            projectLink="https://calendar.ems.lol"
                        />
                        <ProjectCard
                            title="Emportfolio"
                            shortDesc="Interactive personal portfolio presented through a custom Mac-inspired, pixel-art browser interface."
                            stack={["React", "TypeScript", "HTML/CSS", "Vite", "GitHub Pages"]}
                            shortHighlight="test"
                            highlight="Reduced five large media assets by 94%, cutting initial load time to under one second."
                            description="coming soon"
                            myContribution="coming soon"
                            cardImg={`${mediaFilePath}emportfolio/portfolio.png`}
                            expandedImgs={[]}
                            timeInfo="2026 - Present"
                            detailedTimeInfo="September 2026 - Present"
                            github="https://github.com/emtato/emtato-portfolio"
                            projectLink="https://ems.lol"
                        />
                        <ProjectCard
                            title="Steam Game Recommender"
                            shortDesc="Graph-based recommendation system that ranks Steam games from multiple selections using weighted similarity across player preferences."
                            stack={["Python", "Streamlit", "Steam Web API", "Graph Algorithms", "HTML/CSS", "CSV"]}
                            highlight="Built an API-to-CSV caching pipeline for 2,000+ games despite Steam API rate limits."
                            description="coming soon"
                            myContribution="coming soon"
                            cardImg={`${mediaFilePath}steam-rec/img1.png`}
                            expandedImgs={[]}
                            timeInfo="2025"
                            detailedTimeInfo="March 2025"
                            github="https://github.com/emtato/steam-recommendation-project"
                        />
                        <ProjectCard
                            title="Columns"
                            shortDesc="Classic Columns puzzle game rendered pixel by pixel in MIPS assembly with real-time input and cascading match logic."
                            stack={["MIPS Assembly", "MARS", "Bitmap Display", "Memory-Mapped I/O", "Recursion"]}
                            highlight="Implemented recursive eight-direction match detection and cascade resolution."
                            description="coming soon"
                            myContribution="coming soon"
                            cardImg={`${mediaFilePath}columns/img1.png`}
                            expandedImgs={[]}
                            timeInfo="2025"
                            detailedTimeInfo="November 2025"
                            github="https://github.com/amansdali/Columns"
                        />
                    </div>
                    <div className="project-column">
                        <ProjectCard
                            title="GirlMath"
                            shortDesc="AI-powered journaling app supporting girls in STEM by tracking confidence, motivation, and learning trends."
                            stack={["Python", "FastAPI", "React Native", "Expo", "TypeScript", "MongoDB", "DigitalOcean", "Gemini API"]}
                            shortHighlight="36h hackathon"
                            highlight="Led backend development in a 36-hour hackathon."
                            description="coming soon"
                            myContribution="coming soon"
                            cardImg={`${mediaFilePath}girlmath/girlmath.png`}
                            expandedImgs={[]}
                            timeInfo="2026"
                            github="https://github.com/emtato/girlmath"
                            projectLink="https://devpost.com/software/girlmath-b5y7ao"
                            detailedTimeInfo="January - February 2026"
                        />
                        <ProjectCard
                            title="Munchables"
                            shortDesc="Four-person Java Swing social platform created with Clean Architecture and JUnit-tested domain logic."
                            stack={["Java", "Swing", "OkHttp", "JSON", "Spoonacular API", "HTML/CSS", "JUnit"]}
                            highlight="Designed a reusable post component used across every post view."
                            description="coming soon"
                            myContribution="coming soon"
                            cardImg={`${mediaFilePath}munchables/img1.png`}
                            expandedImgs={[
                                "https://github.com/user-attachments/assets/aeac076b-7e8a-461c-b101-459d615db1f1",
                                "https://github.com/user-attachments/assets/bab91924-794d-41ac-ab5f-863a4b645341"
                            ]}
                            timeInfo="2025"
                            detailedTimeInfo="July - August 2025"
                            github="https://github.com/emtato/munchables"
                        />
                        <ProjectCard
                            title="Networked Connect 4"
                            shortDesc="Terminal-based multiplayer Connect 4 game that synchronizes two players and an optional spectator over TCP sockets."
                            stack={["C", "TCP Sockets", "Client-Server", "select()", "Makefile", "Recursion"]}
                            highlight="Built a select()-driven server supporting players, spectators, disconnects, and rematches."
                            description="coming soon"
                            myContribution="coming soon"
                            cardImg={`${mediaFilePath}connect4/img1.png`}
                            expandedImgs={[]}
                            timeInfo="2026"
                            detailedTimeInfo="April 2026"
                            github="https://github.com/nyu24/Connect4"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
