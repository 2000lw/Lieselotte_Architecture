import React from 'react';
import '../CSS/Contact.css';
import contactImg from "../img/About.png"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">I am available for student jobs. Contact me via phone:</p>
                           <p className="hire__text white"><strong>+324 79 08 79 59</strong> or email <a href="mailto:lieselotte.wiels@gmail.com"><strong>lieselotte.wiels@gmail.com</strong></a></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact