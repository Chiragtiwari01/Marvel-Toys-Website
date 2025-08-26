import React from "react";

const Contact = () => {
    return (
    <>
        <nav className="navbar">
        <div className="navbar_text">
            <div className="logo">
            <img src="/images/chirag2.ico" alt="logo" />
            </div>
            <ul className="navbar_ul">
            <li>
                <a href="/">home</a>
            </li>
            <li>
                <a href="/Menu">menu</a>
            </li>
            <li>
                <a href="/Contact">contact us</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            </ul>
        </div>
        </nav>
        <div class="contact-section">
        <h1>Contact Us</h1>
        <div class="border"></div>
        <form class="contact-form" action="index.html" method="post">
            <input
            type="text"
            class="contact-form-text"
            placeholder="Your name"
            ></input>
            <input
            type="email"
            class="contact-form-text"
            placeholder="Your email"
            ></input>
            <input
            type="text"
            class="contact-form-text"
            placeholder="Your phone"
            ></input>
            <textarea
            class="contact-form-text"
            placeholder="Your message"
            ></textarea>
            <input type="submit" class="contact-form-btn" value="Send"></input>
        </form>
        </div>
    </>
    );
};

export default Contact;