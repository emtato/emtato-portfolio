import './AboutMe.css'
import {useState} from "react";

export default function AboutMe() {
    const [pageNumber, setPageNumber] = useState(1) /* 1,2,3*/
    return <div className="aboutme-scroll-container">
        <div className="aboutme-scene">
            <img className="aboutme-desk-background" alt="" src="/assets/browser/content/about-me/desk.webp"/>
            <div className={`aboutme-notebook-pan aboutme-notebook-pan-page-${pageNumber}`}>
                <div className="aboutme-notebook">
                    <img className="aboutme-notebook-background" alt=""
                         src="/assets/browser/content/about-me/Notebook.webp"/>
                    <div className="aboutme-page1-container">
                        <div className="aboutme-page1-greeting"> hello! :)</div>
                        <div className="aboutme-page1-name-intro">i'm emilia ☆</div>
                        <img className="aboutme-page1-portrait-photo"
                             alt=""
                             src="/assets/browser/content/about-me/me-2.webp"/>
                        <img className="aboutme-page1-portrait-tape" alt=""
                             src="/assets/browser/content/about-me/drawings/tape.png"/>
                        <img className="aboutme-page1-portrait-sprout" alt=""
                             src="/assets/browser/content/about-me/drawings/plant.png"/>
                        <div className="aboutme-page1-body-line">welcome to my portfolio!</div>
                        <div className="aboutme-page1-body-line">i'm a 3rd year computer science</div>
                        <div className="aboutme-page1-body-line">major at the university of toronto</div>
                        <img className="aboutme-page1-university-highlight" alt=""
                             src="/assets/browser/content/about-me/drawings/long-highlight.png"/>
                        <div className="aboutme-page1-body-line">☆</div>
                        <div className="aboutme-page1-body-line">
                            <span>currently working on </span>
                            <a className="aboutme-page1-tempo-link" href="https://github.com/emtato/tempo."
                               target="_blank">tempo.</a>
                            <span>,</span>
                        </div>
                        <div className="aboutme-page1-body-line"> and my software dev internship</div>
                        <img className="aboutme-page1-internship-highlight" alt=""
                             src="/assets/browser/content/about-me/drawings/long-highlight.png"/>
                        <div className="aboutme-page1-body-line">at the ontario government</div>
                        <div className="aboutme-page1-body-line">☆</div>
                        <div className="aboutme-page1-values-line">i love making things that feel <span
                            className="aboutme-page1-handwritten-emphasis">fun & meaningful</span> to me,
                        </div>
                        <div className="aboutme-page1-body-line"></div>
                        <div className="aboutme-page1-body-line">
                            <span> and nothing beats seeing it all come together</span>
                            <span className="aboutme-page1-closing-star">‎ ☆</span>
                        </div>
                        <button className="aboutme-page1-next-button" onClick={() => {
                            setPageNumber(2)
                        }}><span className="aboutme-page1-next-desktop-label">next page -&gt;</span>
                            <span className="aboutme-page1-next-mobile-label">more about me! (press) -&gt;</span>
                        </button>
                        <div className="aboutme-page1-footer">... or explore the rest of my website freely :)</div>
                    </div>
                    {/* page 2 */}

                    <div className="aboutme-page2-container">
                        <div className="back-next-button-container">
                            <button className="back-next-button" onClick={
                                () => {
                                    setPageNumber(1)
                                }}>&lt;</button>
                            <button className="back-next-button" onClick={
                                () => {
                                    setPageNumber(3)
                                }}>&gt;</button>
                        </div>
                        <div className="aboutme-page2-heading">bits of my life</div>
                        <div className="aboutme-page2-intro">outside of coding, i’m usually...</div>

                        <div className="aboutme-page2-lifting-story">
                            <span className="aboutme-page2-lifting-star">☆</span>
                            <span className="aboutme-page2-lifting-emphasis">surviving leg day,</span>
                        </div>
                        <div className="aboutme-page2-gym-photo-group">
                            <img className="aboutme-page2-gym-gif"
                                 alt=""
                                 src="/assets/browser/content/about-me/cat-gym.gif"/>
                            <img className="aboutme-page2-gym-tape" alt=""
                                 src="/assets/browser/content/about-me/drawings/big-tape.png"/>
                            <img className="aboutme-page2-gym-arrow" alt=""
                                 src="/assets/browser/content/about-me/drawings/white-arrow.png"/>
                            <span className="aboutme-page2-gym-caption">me btw</span>
                        </div>

                        <div className="aboutme-page2-food-photo-group">
                            <img className="aboutme-page2-food-photo"
                                 alt=""
                                 src="/assets/browser/content/about-me/food.jpg"/>
                            <img className="aboutme-page2-food-tape-left" alt=""
                                 src="/assets/browser/content/about-me/drawings/small-tape.png"/>
                            <img className="aboutme-page2-food-tape-right" alt=""
                                 src="/assets/browser/content/about-me/drawings/small-tape.png"/>
                        </div>
                        <div className="aboutme-page2-food-story">
                            <span className="aboutme-page2-food-star">☆</span>
                            <span className="aboutme-page2-food-label">looking for</span>
                            <span className="aboutme-page2-food-emphasis">good food,</span>
                        </div>

                        <div className="aboutme-page2-camera-story">
                            <span className="aboutme-page2-camera-star">☆</span>
                            <span className="aboutme-page2-camera-label">or photographing</span>
                            <span className="aboutme-page2-camera-emphasis">whatever catches my eye.</span>
                        </div>

                        <div className="aboutme-page2-fuji-photo-group">
                            <img className="aboutme-page2-fuji-photo"
                                 alt=""
                                 src="/assets/browser/content/about-me/fuji.jpg"/>
                            <img className="aboutme-page2-fuji-tape" alt=""
                                 src="/assets/browser/content/about-me/drawings/big-tape.png"/>
                        </div>
                        <div className="aboutme-page2-flower-photo-group">
                            <img className="aboutme-page2-flower-photo"
                                 alt=""
                                 src="/assets/browser/content/about-me/folwer.jpg"/>
                            <img className="aboutme-page2-flower-tape" alt=""
                                 src="/assets/browser/content/about-me/drawings/small-tape.png"/>
                        </div>
                        <div className="aboutme-page2-cat-photo-group">
                            <img className="aboutme-page2-cat-photo"
                                 alt=""
                                 src="/assets/browser/content/about-me/car.jpg"/>
                            <img className="aboutme-page2-cat-tape" alt=""
                                 src="/assets/browser/content/about-me/drawings/tape.png"/>
                        </div>

                        <div className="aboutme-page2-closing-copy">
                            my camera roll is mostly cats, outfits, and little day-<br/>
                            to-day musings.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="aboutme-scroll-space"/>
    </div>
}
