import './AboutMe.css'

export default function AboutMe() {

    return <div className="aboutme-scroll-container">
        <div className="outer-aboutme-container">
            <img className="aboutme-behindnotebook" alt="a" src="/assets/browser/content/about-me/desk.webp"/>
            <div className="notebook-anchor">
                <img className="aboutme-background-img" alt="a" src="/assets/browser/content/about-me/Notebook.webp"/>
                <div className="aboutme-page1-container">
                    <div className="aboutme-title-1"> hello! :)</div>
                    <div className="aboutme-text-withstar">i'm emilia ☆</div>
                    <img className="aboutme-placed-item aboutme-portrait aboutme-page1-portrait-placement" alt="a"
                         src="/assets/browser/content/about-me/me-2.webp"/>
                    <img className="aboutme-placed-item aboutme-tape aboutme-page1-tape-placement" alt="a"
                         src="/assets/browser/content/about-me/tape.png"/>
                    <img className="aboutme-placed-item aboutme-plant aboutme-page1-plant-placement" alt="a"
                         src="/assets/browser/content/about-me/plant.png"/>
                    <div className="aboutme-text">welcome to my portfolio!</div>
                    <div className="aboutme-text">i'm a 3rd year computer science</div>
                    <div className="aboutme-text">major at the university of toronto</div>
                    <img className="aboutme-placed-item page1-longhighlight-1 aboutme-highlight" alt="a"
                         src="/assets/browser/content/about-me/long-highlight.png"/>
                    <div className="aboutme-text">☆</div>
                    <div className="aboutme-text">
                        <span>currently working on </span>
                        <a className="aboutme-link" href="https://github.com/emtato/tempo." target="_blank">tempo.</a>
                        <span>,</span>
                    </div>
                    <div className="aboutme-text"> and my software dev internship</div>
                    <img className="aboutme-placed-item page1-longhighlight-2 aboutme-highlight" alt="a"
                         src="/assets/browser/content/about-me/long-highlight.png"/>
                    <div className="aboutme-text">at the ontario government</div>
                    <div className="aboutme-text">☆</div>
                    <div className="aboutme-text">i ♥ making things that feel fun & meaningful to me</div>
                    <div className="aboutme-text"> </div>
                    <img className="aboutme-placed-item page1-underline-1" alt="a"
                         src="/assets/browser/content/about-me/underline.png"/>
                    <div className="aboutme-text">
                        <span> and nothing beats seeing it all come together</span>
                        <span className="aboutme-text-withstar">‎ ☆</span>
                    </div>
                </div>
                <div className="aboutme-text">i love cats</div>
                <div className="aboutme-text">i love 2d men</div>


            </div>

        </div>
         <div className="aboutme-scroll-space" />

    </div>
}


