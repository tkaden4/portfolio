import React from "react";
import { Link } from "react-router-dom";

import "./About.sass";

import profile_pic from "../../../assets/profile.jpg";

const Badge = ({ name }) => <i className={"badge " + "fa fa-" + name}></i>;

const BadgeLink = ({ name, to }) =>
    <a href={to} target="_blank">
        <Badge name={name} />
    </a>;

const SocialBadges = () =>
    <div className="social-badges">
        <BadgeLink name="github" to="https://github.com/tkaden4" />
        <BadgeLink name="linkedin" to="https://www.linkedin.com/in/kaden-thomas-6027a1103" />
    </div>

export const About = () =>
    <div className="about">
        <div className="profile">
            <div className="me">
                <img src={profile_pic} />
            </div>
            <div className="info">
                <SocialBadges />
                <div className="desc">
                    Hi, I'm <span className="name">Kaden Thomas</span>, a full-stack software developer and OSS enthusiast.
                    I've spent 9 years building software for myself, my friends, and the rest of the world on github.
                </div>
            </div>
        </div>
    </div>;

export default About;