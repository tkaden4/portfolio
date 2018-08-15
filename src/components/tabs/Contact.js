import React from "react";

import "./Contact.sass";

export const Contact = () =>
    <div className="container padded contact">
        <div className="blurb">
            <div className="content">
                Send a message to:
            </div>
            &nbsp;
            <div className="email">
                <a href="mailto:contact@tkaden.net">contact@tkaden.net</a>
            </div>
            <div className="sub">
                Response within 2 days
            </div>
        </div>
        <form>
            <textarea />
            <input type="submit" value="send"></input>
        </form>
    </div>;

export default Contact;