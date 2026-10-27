import "./Experience.css"
import TimelineCard from "./TimelineCard.tsx";
import ProjectCard from "./ProjectCard.tsx";

interface ExperienceProps {
    BrowserSaysOpen: boolean
}

export default function Experience({BrowserSaysOpen}: ExperienceProps) {
    const mediaFilePath = "/assets/browser/content/experience/project/"
    return (

        <div className="experience-container">
            <section className="work-experience-container">
                <header className="section-header">
                    <img className="section-image section-image-work" alt="a"
                         src="/assets/browser/content/experience/prof-experience/work.png"/>
                    <div className="section-uppertext">My Career so far</div>
                    <h2 className="section-title">Experience</h2>
                    <div className="section-accent"/>
                </header>

                <div className="work-experience-timeline">
                    <div className="work-experience-timeline-line-container">
                        <div className="timeline-segment seg-length-2 season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-fall2026" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/fall-1.png"/>
                            <TimelineCard
                                title="AI Trainer — Software Engineering"
                                organization="DataAnnotation"
                                context="Part-time independent contractor · Project details confidential"
                                achievement="Design and evaluate challenging coding-agent tasks"
                                description="Evaluating whether coding agents can handle realistic software engineering work and deliver dependable solutions."
                                bullets={[
                                    "Design bug-fix, API extension, and feature development tasks with clear requirements and edge cases that expose where coding agents struggle.",
                                    "Build reference implementations and automated test suites to define expected behavior and verify generated solutions.",
                                    "Review agent code and reasoning for subtle logic errors, flawed implementation choices, missed edge cases, and unsafe changes.",
                                    "Document failure patterns and provide actionable feedback."
                                ]}
                                tags={["Software engineering", "Testing", "Code review"]}
                                dateRange="october 2026 - Present"
                                season="fall"
                                mini={false}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment seg-length-25-5 segment-custom-mobile-large season-fall"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-fall2026-2 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/fall-2.png"/>
                            <TimelineCard
                                title="Backend Developer / Junior Technical Analyst"
                                organization="Ontario Public Service"
                                context="Digital Solutions Branch · 8-month internship"
                                description="Developing and testing Java/Spring backend workflows for Ontario’s driver and vehicle services."
                                tags={["Java", "Spring Boot", "Python", "Bruno", "Backend development"]}
                                dateRange="Sept 2026 - Present"
                                season="fall"
                                bullets={[
                                    "Restored the order orchestrator’s Bruno backend test suite from 19 failing scripts to 0 across 4+ workflows by updating the test runner to detect active configuration and avoid false failures from mocked transaction IDs.",
                                    "Implemented Java backend fixes for driver licence application generation, updating data sent to the document template to correct name and address formatting and corrected date logic to use the order’s business date. Added JUnit tests and coordinated the paired template change.",
                                    "Developed fault-injection profiles and JUnit tests across successive stages from refund to financial notification, verifying business error handling, system retries, status-update failures, and recovery."
                                ]}
                                mini={false}
                            />
                            <div className="timeline-marker season-fall"/>
                        </div>
                        <div className="timeline-segment seg-length-25 season-fall"/>
                        <div className="timeline-segment seg-length-2-5 season-summer segment-custom-mobile"/>
                        <div className="timeline-insertion-point">
                            <div className="timeline-marker season-summer"/>
                            <TimelineCard
                                title="Dean’s List Scholar"
                                organization="University of Toronto"
                                context="Academic distinction"
                                achievement="3.75+ cumulative GPA · 3.5 required"
                                description="Earned after completing my tenth U of T credit."
                                dateRange="Summer 2026"
                                season="summer"
                                mini={true}
                            />
                        </div>
                        <div className="timeline-segment seg-length-2 season-summer"/>
                        <div className="timeline-segment seg-length-5 season-spring"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-spring2026 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/spring.png"/>
                        </div>
                        <div className="timeline-segment seg-length-2 segment-custom-mobile season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="timeline-art TLA-winter2026" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/winter.png"/>
                            <TimelineCard
                                title="GirlMath"
                                organization="ElleHacks · York University"
                                context="My first hackathon · 36 hours · 4-person team"
                                achievement="Led backend development"
                                description="Built an AI-powered journaling app that helps girls in STEM track confidence, motivation, and learning patterns. Check its project card for more details →"
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
                        <div className="timeline-segment seg-length-2 season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2026</div>
                        <div className="timeline-segment seg-length-4 season-winter"/>
                        <div className="timeline-segment seg-length-4-5 segment-custom-mobile-medium season-fall"/>
                        <div className="timeline-insertion-point">
                        </div>
                        <div className="timeline-segment seg-length-4 season-summer"/>
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
                        <div className="timeline-segment seg-length-1 segment-custom-mobile-small season-summer"/>
                        <div className="timeline-segment seg-length-2 season-spring"/>
                        <div className="timeline-segment seg-length-1 season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2025</div>
                        <div className="timeline-segment seg-length-2 season-winter"/>
                        <div className="timeline-segment seg-length-2 season-fall"/>
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
                        <div className="timeline-segment seg-length-4 segment-custom-mobile-medium season-fall"/>
                        <div className="timeline-segment seg-length-8 season-summer"/>
                        <div className="timeline-segment seg-length-7 season-spring"/>
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
                        <div className="timeline-segment seg-length-4 season-spring"/>
                        <div className="timeline-segment seg-length-1-5 season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2024</div>
                        <div className="timeline-segment seg-length-1-5 season-winter"/>
                        <div className="timeline-segment seg-length-1-5 season-fall"/>
                        <div className="timeline-segment seg-length-1-5 season-summer"/>
                        <div className="timeline-segment seg-length-1-5 season-spring"/>
                        <div className="timeline-segment seg-length-1-5 season-winter"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-winter2023 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/winter-2.png"/>
                        </div>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2023</div>
                        <div className="timeline-segment seg-length-1 season-winter"/>
                        <div className="timeline-segment seg-length-1 season-fall"/>

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
                        <div className="timeline-segment seg-length-2 season-fall"/>
                        <div className="timeline-segment seg-length-4 season-summer"/>
                        <div className="timeline-insertion-point">
                            <img className="TLA-summer2022 timeline-art" alt="a"
                                 src="/assets/browser/content/experience/prof-experience/summer.png"/>
                        </div>
                        <div className="timeline-segment seg-length-4 season-spring"/>
                        <div className="timeline-segment seg-length-2 season-winter"/>
                        <div className="timeline-dot season-winter"/>
                        <div className="timeline-year-text TYT-right">2022</div>
                        <div className="timeline-segment seg-length-2 season-winter"/>
                        <div className="timeline-segment seg-length-2 segment-custom-mobile-small season-fall"/>

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
                        <div className="timeline-segment seg-length-16 season-fall"/>

                    </div>
                </div>
            </section>

            {/*—————————————————projects————————————————————*/}

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
                            title="Urbanova"
                            shortDesc="Built at Hack the Valley 11, Urbanova shows how proposed Toronto housing could affect skylines, sunlight, and streetcar commutes."
                            stack={["Python", "Mapbox", "Gemini API", "PostgreSQL", "Express", "TypeScript", "React", "Railway"]}
                            shortHighlight="streetcars in 3D"
                            highlight="Made transit sim & 3D visualization into streetcars& riders on an interactive map"
                            description="A construction notice says 30 storeys. What does that mean for your street? Envisioned at Hack the Valley 11, Urbanova shows Toronto residents how a proposed building could reshape their street view, park sunlight, and streetcar commute in one place. Its core simulation tracks how new housing affects crowding along the 505 Dundas corridor."
                            myContribution={[
                                "Led the design and integration of the simulation's end-to-end data flow, defining input/output schemas and coordinating backend/frontend data contracts, including implementing changes across both systems to keep them compatible.",
                                "Developed the core transit simulation, modelling passenger demand, streetcar frequency, headways, variable delays, and crowding, with passenger origins and destinations informed by residential locations and Toronto's workplace distribution.",
                                "Built the full 3D simulation replay: streetcars moving with realistic operational behaviour, passengers walking from homes to stops, streetcar and station passenger counts, and visible crowding indicators, all driven by recorded simulation events."
                            ]}
                            cardImg={`${mediaFilePath}urbanova/img1.webp`}
                            expandedImgs={[`${mediaFilePath}urbanova/img2.webp`, "3 urbanova vid", "4 urbanova vid2", `${mediaFilePath}urbanova/img3.webp`, `${mediaFilePath}urbanova/img4.webp`]}
                            timeInfo="2026"
                            detailedTimeInfo="October 2026"
                            github="https://github.com/emtato/Urbanova"
                            projectLink="https://urbanova.ems.lol"
                        />
                        <ProjectCard
                            title="Cookkeeping"
                            shortDesc="A recipe, meal-planning, and grocery app designed to bridge the gap between planning and shopping. Very early stages, in progress!"
                            stack={["Java", "Spring Boot", "PostgreSQL", "React Native", "TypeScript", "Expo", "React Native Web", "AWS"]}
                            stackHeading="Current + planned stack"
                            shortHighlight=""
                            cardImg={`${mediaFilePath}cookkeeping/img1.webp`}
                            highlight="Very early stages · In progress!"
                            description="Cookkeeping is a recipe, meal-planning, and grocery app in its early stages. The planned core flow connects saved recipes and a meal schedule to one shopping list, combining shared ingredients and adjusting quantities for servings."
                            myContribution={[]}
                            expandedImgs={[`${mediaFilePath}cookkeeping/img2.webp`]}
                            timeInfo="2026 - Present"
                            detailedTimeInfo="October 2026 - Present"
                            github="https://github.com/emtato/cookkeeping"
                        />
                        <ProjectCard
                            title="Munchables"
                            shortDesc="Java Swing social platform for sharing recipes, joining food communities, and discovering restaurants, structured with Clean Architecture and JUnit tests."
                            stack={["Java", "Swing", "Clean Architecture", "JSON", "Spoonacular API", "HTML/CSS", "JUnit"]}
                            highlight="Made a reusable post component shared across home, profile, and club feeds."
                            description="Built from our shared love of food, Munchables is a social platform for sharing recipes and other posts, discovering restaurants and joining communities. Created for a course requiring Java Swing, it challenged us to build an accessible, fully functional experience using reusable interfaces, Clean Architecture, and thoroughly tested application logic."
                            myContribution={["Designed a reusable Swing post component shared across home, profile, and club feeds, consistently handling media, recipe details, custom styling, likes, and navigation to full posts without duplicating view or interaction logic.", "Implemented post creation, likes, and comments through controllers, use cases, presenters, and persistence, using dependency inversion to separate business logic from the UI and database, allowing use cases to be tested independently.", "Integrated Spoonacular recipe analysis by transforming post data into API requests and presenting returned nutritional insights with custom HTML/CSS, while isolating the external service behind an interface."]}
                            cardImg={`${mediaFilePath}munchables/img1.webp`}
                            expandedImgs={[
                                `${mediaFilePath}munchables/img2.webp`,
                                `${mediaFilePath}munchables/img3.webp`,
                                `${mediaFilePath}munchables/img4.webp`,
                                `${mediaFilePath}munchables/img5.webp`,
                                `${mediaFilePath}munchables/img6.webp`,
                                `${mediaFilePath}munchables/img7.webp`
                            ]}
                            timeInfo="2025"
                            detailedTimeInfo="July - August 2025"
                            github="https://github.com/emtato/munchables"
                        />
                        <ProjectCard
                            title="Steam Game Recommender"
                            shortDesc="Graph based recommender that ranks Steam games by weighted similarity to multiple selected titles and user controlled preferences."
                            stack={["Python", "Streamlit", "Steam Web API", "Graph Algorithms", "HTML/CSS", "CSV"]}
                            shortHighlight="2000+ games"
                            highlight="Users iteratively refine future recs by adding more games into their list."
                            description="With thousands of games on Steam, our team built a recommendation tool for players who know what they enjoy but not what to try next. Users complete a questionnaire to generate an initial list, then refine future recommendations by adding games they like and prioritizing factors such as genre, price, platform, and language."
                            myContribution={["Helped implement a weighted graph that compares 2,000+ Steam games across price, language, developer, platform, category, and genre, ranking candidates by their average similarity to multiple selected games.", "Built the interactive recommendation workflow and custom CSS presentation, ranking top results, displaying detailed game information, and letting users add suggestions before recalculating recommendations around their updated list.", "- Created an API to CSV storage pipeline that collected and cleaned metadata for 2,000+ Steam games, working around API rate limits and caching the dataset for faster, repeatable recommendations."]}
                            cardImg={`${mediaFilePath}steam-rec/img1.webp`}
                            expandedImgs={[]}
                            timeInfo="2025"
                            detailedTimeInfo="March 2025"
                            github="https://github.com/emtato/steam-recommendation-project"
                        />
                        <ProjectCard
                            title="Networked Connect 4"
                            shortDesc="Terminal-based multiplayer Connect 4 game that synchronizes two players and an optional spectator over TCP sockets."
                            stack={["C", "TCP Sockets", "Client-Server", "select()", "I/O Multiplexing", "Recursion"]}
                            highlight="Implemented game logic for a select() driven multiplayer server."
                            description="This terminal based Connect 4 game uses low-level C socket programming. Two remote players share a synchronized match while an optional third client spectates, with the server coordinating turns, validating moves, handling disconnects, and supporting rematches."
                            myContribution={["Implemented the core game state and rules in C, including move validation, gravity-based piece placement, turn alternation, tie detection, and converting the board between its in-memory grid and network message format.", "Designed recursive win detection that begins at the newest piece, searches outward in eight directions, and combines opposing paths to detect horizontal, vertical, and diagonal connections.", "Helped build the TCP client and server event loops around select(), multiplexing player and spectator sockets."]}
                            cardImg={`${mediaFilePath}connect4/img1.webp`}
                            expandedImgs={["2 connect 4 vid"]}
                            timeInfo="2026"
                            detailedTimeInfo="April 2026"
                            github="https://github.com/nyu24/Connect4"
                        />
                    </div>
                    {/* ————————colun 2 –———————— */}
                    <div className="project-column">
                        {/*TODO:Revisit Highlight after scheduling assistant is implemented. */}
                        {/*TODO:implement button that directs to specific page of image wheel? */}
                        <ProjectCard
                            title="Tempo"
                            shortDesc="Full-stack calendar designed to make event creation faster through flexible date/time parsing and custom date/time controls."
                            stack={["Node.js", "Express", "MongoDB", "TypeScript", "React", "FullCalendar", "Better Auth", "Railway"]}
                            shortHighlight="solo fullstack"
                            highlight="Independently designed, developed, and deployed as a full-stack product."
                            description="Tired of how many steps it took to schedule simple events, I built Tempo around the small conveniences I wished my calendar had. It keeps calendar views uncluttered while making everyday tasks faster and more intuitive. I plan to expand Tempo with an AI assistant to tackle schedule planning and more flexible recurring events."
                            myContribution={["Designed and implemented a regex-based event parser that handles 3+ scheduling input types Google and Apple Calendar miss, such as multi-day ranges and expressions combining dates, times, and relative dates (now, yesterday, etc) in one field.",
                                "Built a scrollable month view for natural cross-month navigation & custom React date/time controls for faster event entry.",
                                "Building Tempo alone taught me to think across a full-stack system, from React state and responsive layouts to authenticated APIs and user-scoped persistence. This was where those separate layers finally became one connected flow."]}
                            cardImg={`${mediaFilePath}tempo/img1.webp`}
                            expandedImgs={[
                                `${mediaFilePath}tempo/img2.webp`,
                                `${mediaFilePath}tempo/img3.webp`,
                                `${mediaFilePath}tempo/img4.webp`
                            ]}
                            timeInfo="2026 - Present"
                            detailedTimeInfo="July 2026 - Present"
                            github="https://github.com/emtato/tempo."
                            projectLink="https://tempo.ems.lol"
                            parentSaysOpen={BrowserSaysOpen}
                        />
                        <ProjectCard
                            title="GirlMath"
                            shortDesc="AI-powered journaling app helping girls in STEM build confidence through learning check-ins, trend visualizations, and personalized guidance."
                            stack={["Python", "FastAPI", "MongoDB", "Gemini API", "React Native", "TypeScript", "Expo", "DigitalOcean"]}
                            shortHighlight="first hackathon"
                            highlight="Led backend development in a 36-hour hackathon."
                            description="Because coding once felt complex and unreachable to me, I proposed GirlMath to help younger girls build STEM confidence before self-doubt becomes ingrained. The app combines quick learning check-ins, journals, progress visualizations, and confidence focused AI guidance; supporting, rather than replacing, teachers, mentors, and parents."
                            myContribution={["Built the FastAPI logic, REST endpoints, connected them to the React Native client, & deployed the service to DigitalOcean.", "Designed Gemini prompts that combined users’ journal and questionnaire histories, giving the model broader context to generate more informed, personalized guidance around confidence, motivation, and learning patterns.", "As the deadline approached, I expanded beyond my backend responsibilities to implement the AI interface and parts of the check-in flow, helping keep development moving so we could deliver a functional end-to-end prototype within 36 hours."]}
                            cardImg={`${mediaFilePath}girlmath/girlmath.webp`}
                            expandedImgs={["0 girlmath vid"]}
                            timeInfo="2026"
                            github="https://github.com/emtato/girlmath"
                            projectLink="https://devpost.com/software/girlmath-b5y7ao"
                            detailedTimeInfo="January 2026"
                        />
                        <ProjectCard
                            title="Emportfolio"
                            shortDesc="Responsive personal portfolio built as a Mac inspired pixel art browser, combining a hand drawn visual language with functional tabs, window controls, and custom animations."
                            stack={["React", "TypeScript", "HTML/CSS", "Vite", "GitHub Pages"]}
                            shortHighlight="woah inception"
                            highlight="Reduced five large media assets by 94%, cutting initial load time to under one second."
                            description="After gaining more React experience through Tempo, I wanted a personal site that demonstrated my skills while still feeling unmistakably like me. Emportfolio became a frontend-focused project where I dreamt up my ideal design language and aesthetic, then brought it to life through a hand drawn pixel art interface and animations: a process that rounded out my full-stack skill set and helped me discover how much I enjoy creating visually expressive experiences."
                            myContribution={["Built a scroll driven notebook that maps vertical scroll progress into two axis CSS transforms across one responsive canvas, keeping text, photos, and decorations aligned as users move between pages on desktop and mobile.", "Created a responsive pixel art browser from hand-drawn frame assets and stateful React components, with functional tabs, window controls, and layouts that preserve the interface’s proportions across desktop and mobile.", "Resizing and WebP conversion reduced five big media assets by 94%, cutting initial load from 5–6 seconds to <1 second."]}
                            cardImg={`${mediaFilePath}emportfolio/portfolio.webp`}
                            expandedImgs={[`${mediaFilePath}emportfolio/img2.webp`, `${mediaFilePath}emportfolio/img3.webp`, "10 emportfolio vid that doesnt exist but is a cool bug thing that makes it so it loads a mini emportfolio"]}
                            timeInfo="2026 - Present"
                            detailedTimeInfo="September 2026 - Present"
                            github="https://github.com/emtato/emtato-portfolio"
                            projectLink="https://ems.lol"
                        />
                        <ProjectCard
                            title="Columns"
                            shortDesc="Classic Columns puzzle game rendered pixel by pixel in MIPS assembly with real-time input and cascading match logic."
                            stack={["MIPS Assembly", "MARS", "Bitmap Display", "Memory-Mapped I/O", "Recursion"]}
                            shortHighlight="all MIPS"
                            highlight="Implemented recursive eight-direction match detection entirely in MIPS assembly."
                            description="Columns was a two person project to build a complete puzzle game entirely in MIPS assembly, without a game engine or graphics library. Players position and reorder falling stacks of three coloured gems as the game accelerates; matches are animated and cleared, remaining gems collapse, and the board is rechecked for cascading combinations."
                            myContribution={["Designed a recursive directional search algorithm that checks all eight neighbouring directions, combines opposite paths, and records groups of three or more matching gems for removal. (later adapted this logic for Connect 4’s win detection)", "Built the bitmap rendering layer in MIPS, converting coordinates into display memory addresses and drawing the background and shaded gems pixel by pixel, along with clearing and game over animations.", "- Implemented collisions, gravity and progressively increasing fall speed, using bitmap memory checks and loop counters to move gem stacks safely while updating an on-screen speed indicator as difficulty increased."]}
                            cardImg={`${mediaFilePath}columns/img1.webp`}
                            expandedImgs={["1 columns vid"]}
                            timeInfo="2025"
                            detailedTimeInfo="November 2025"
                            github="https://github.com/amansdali/Columns"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
