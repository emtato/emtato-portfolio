import './AboutMe.css'
import {useState} from "react";

export default function AboutMe() {
    const [pageNumber, setPageNumber] = useState(1) /* 1,2,3*/
    return <div className="aboutme-scroll-container">
        <div className="outer-aboutme-container">
            <img className="aboutme-behindnotebook" alt="a" src="/assets/browser/content/about-me/desk.webp"/>
            <div className={`notebook-pan notebook-pan-page-${pageNumber}`}>
                <div className="notebook-anchor">
                    <img className="aboutme-background-img" alt="a"
                         src="/assets/browser/content/about-me/Notebook.webp"/>
                    <div className="aboutme-page1-container">
                        <div className="aboutme-title-1"> hello! :)</div>
                        <div className="aboutme-text-withstar">i'm emilia ☆</div>
                        <img className="aboutme-placed-item aboutme-portrait aboutme-page1-portrait-placement" alt="a"
                             src="/assets/browser/content/about-me/me-2.webp"/>
                        <img className="aboutme-placed-item aboutme-tape aboutme-page1-tape-placement" alt="a"
                             src="/assets/browser/content/about-me/drawings/tape.png"/>
                        <img className="aboutme-placed-item aboutme-plant aboutme-page1-plant-placement" alt="a"
                             src="/assets/browser/content/about-me/drawings/plant.png"/>
                        <div className="aboutme-text">welcome to my portfolio!</div>
                        <div className="aboutme-text">i'm a 3rd year computer science</div>
                        <div className="aboutme-text">major at the university of toronto</div>
                        <img className="aboutme-placed-item page1-longhighlight-1 aboutme-highlight" alt="a"
                             src="/assets/browser/content/about-me/drawings/long-highlight.png"/>
                        <div className="aboutme-text">☆</div>
                        <div className="aboutme-text">
                            <span>currently working on </span>
                            <a className="aboutme-link" href="https://github.com/emtato/tempo."
                               target="_blank">tempo.</a>
                            <span>,</span>
                        </div>
                        <div className="aboutme-text"> and my software dev internship</div>
                        <img className="aboutme-placed-item page1-longhighlight-2 aboutme-highlight" alt="a"
                             src="/assets/browser/content/about-me/drawings/long-highlight.png"/>
                        <div className="aboutme-text">at the ontario government</div>
                        <div className="aboutme-text">☆</div>
                        <div className="aboutme-text">i ♥ making things that feel fun & meaningful to me</div>
                        <div className="aboutme-text"></div>
                        <img className="aboutme-placed-item page1-underline-1" alt="a"
                             src="/assets/browser/content/about-me/drawings/underline.png"/>
                        <div className="aboutme-text">
                            <span> and nothing beats seeing it all come together</span>
                            <span className="aboutme-text-withstar">‎ ☆</span>
                        </div>
                        <button className="next-page-button" onClick={() => {
                            setPageNumber(2)
                        }}><span className="next-page-desktop-text">next page -&gt;</span>
                            <span className="next-page-mobile-text">more about me! (press) -&gt;</span>
                        </button>
                    </div>

                    <div className="aboutme-page2-container">
                        <div className="aboutme-title-2"> bits of my life</div>
                        <div className="aboutme-text">Outside of coding, I’m usually lifting,</div>
                        <div className="aboutme-page2-gif-group">
                            <img className="aboutme-placed-item aboutme-page2-image-relative-placement" alt="a"
                                 src="/assets/browser/content/about-me/cat-gym.gif"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement" alt="a"
                                 src="/assets/browser/content/about-me/drawings/big-tape.png"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement-2" alt="a"
                                 src="/assets/browser/content/about-me/drawings/tape.png"/>
                            <div className="aboutme-page2-caption-placement aboutme-placed-item">me btw</div>
                            <img className="aboutme-placed-item aboutme-arrow-placement-1" alt="a"
                                 src="/assets/browser/content/about-me/drawings/white-arrow.png"/>
                        </div>
                        <div className="aboutme-page2-image2group-placement">
                            <img className="aboutme-placed-item aboutme-page2-image-relative-placement" alt="a"
                                 src="/assets/browser/content/about-me/food.jpg"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement-3" alt="a"
                                 src="/assets/browser/content/about-me/drawings/small-tape.png"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement-4" alt="a"
                                 src="/assets/browser/content/about-me/drawings/small-tape.png"/>
                        </div>
                        <div className="aboutme-text aboutme-page2-food-line1">looking for</div>
                        <div className="aboutme-text aboutme-page2-food-line2">good food,</div>
                        <div className="aboutme-page2-photography-group">
                            <img className="aboutme-placed-item aboutme-page2-image-relative-placement" alt="a"
                                 src="/assets/browser/content/about-me/fuji.jpg"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement-2 rot180"
                                 alt="a"
                                 src="/assets/browser/content/about-me/drawings/tape.png"/>
                        </div>
                        <div className="aboutme-placed-item aboutme-page2-photo2-group">
                            <img className="aboutme-placed-item aboutme-page2-image-relative-placement" alt="a"
                                 src="/assets/browser/content/about-me/folwer.jpg"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement-2 expandTape"
                                 alt="a"
                                 src="/assets/browser/content/about-me/drawings/big-tape.png"/>
                        </div>
                        <div className="aboutme-page2-photography-group aboutme-page2-fuji-tape-overlay">
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement rot180"
                                 alt="a"
                                 src="/assets/browser/content/about-me/drawings/big-tape.png"/>
                        </div>
                        <div className="aboutme-placed-item photgraphy-text1">or stopping 📸</div>
                        <div className="aboutme-placed-item photgraphy-text2">for whatever</div>
                        <div className="aboutme-placed-item photgraphy-text3"> catches my eye.</div>
                        <div className="aboutme-placed-item photgraphy-text4"></div>
                        <div className="bottom-line aboutme-text">My camera roll is mostly cats, ‎ outfits,
                        </div>
                        <div className="bottom-line2 aboutme-text"> and other spontaneous musings day to day</div>
                        <div className="cat-photo-group">
                            <img className="aboutme-placed-item aboutme-page2-image-relative-placement" alt="a"
                                 src="/assets/browser/content/about-me/car.jpg"/>
                            <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement-2 rot180"
                                 src="/assets/browser/content/about-me/drawings/tape.png" alt="a"/>
                              <img className="aboutme-placed-item aboutme-tape aboutme-page2-tape-placement shrinkTape"
                                 src="/assets/browser/content/about-me/drawings/small-tape.png" alt="a"/>
                        </div>
                        {/*<div className="aboutme-text">i love 2d men</div>*/}
                    </div>
                </div>
            </div>
        </div>
        <div className="aboutme-scroll-space"/>
    </div>
}
