import './Contact.css'
import {useEffect, useState} from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false)

    async function copyEmail() {
        await navigator.clipboard.writeText("emilia.ma@mail.utoronto.ca");
        setCopied(true)
    }

    useEffect(() => {
        if (!copied) return

        const copiedTimer = window.setTimeout(() => setCopied(false), 1500)
        return () => window.clearTimeout(copiedTimer)
    }, [copied])

    return (
        <div className="contact-container">
            <div className="contact-ratio-box">
                <img className="contact-container-background" alt="a"
                     src="/assets/browser/content/contact/contact-background.png"/>
                <div className="contact-email-section">
                    <button className="contact-emailto-text" onClick={copyEmail}>
                        To: emilia.ma@mail.utoronto.ca
                    </button>
                    {copied && <span className="contact-email-copied" aria-live="polite">copied!</span>}

                    <div className="contact-emailsubject-text">
                        Subject: meowbert
                    </div>
                    <div className="contact-email-body"> body...
                    </div>
                    <a className="contact-email-button" href="mailto:emilia.ma@mail.utoronto.ca">
                        <img className="contact-email-button-img" alt="a"
                             src="/assets/browser/content/contact/contact-button.png">
                        </img>
                        <div className="contact-email-button-text">
                            Send
                        </div>
                    </a>
                </div>
                {/*silly mail section*/}
                <div className="contact-email-inbox-wrapper">
                    <div className="contact-email-inbox-text">Dear vålued custømer ! Con9ratulat¡ons! Our 1,000,000th
                        ßuy, u vvin
                    </div>
                    <div className="contact-email-inbox-text">glorp glorp glorp glorp</div>
                    <div className="contact-email-inbox-text">your parcel was delivered. location: front-ish</div>
                    <div className="contact-email-inbox-text">R</div>
                    <div className="contact-email-inbox-text">your dog ate my hamster. AGAIN. im calling police if</div>
                    <div className="contact-email-inbox-text">Reminder: dentist appointment tomorrow at 8:10 AM</div>
                    <div className="contact-email-inbox-text">hey choomba heard about that preem shard you klep</div>
                    <div className="contact-email-inbox-text">Steam store: 1 item on your wishlist is now 3% off</div>
                    <div className="contact-email-inbox-text">no subject i left my charger there in april</div>
                    <div className="contact-email-inbox-text">are you awake i accidentally joined a bowling leagu</div>
                    <div className="contact-email-inbox-text">Subject: help. hey friiendd haha you remember me ri</div>
                    <div className="contact-email-inbox-text">hii im espurr ૮ ◉ -◉ა</div>
                    <div className="contact-email-inbox-text">Piazza: New followup on @842: MAT999 lecture notes</div>
                    <div className="contact-email-inbox-text">hey is this ur pigeon or does it just know ur name</div>
                    <div className="contact-email-inbox-text">Contract update: target located. Completion expect</div>
                </div>
                <img className="contact-email-inbox-star" alt="a" src="/assets/browser/content/contact/star.png"/>
            </div>
        </div>
    )
}
