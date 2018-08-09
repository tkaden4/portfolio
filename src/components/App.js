import React from "react";
import { Switch, Redirect, Route, Link } from "react-router-dom";

import "./App.sass";

const FIRST_NAME = "Kaden";
const LAST_NAME = "Thomas";
const NAME = FIRST_NAME + LAST_NAME;

const DESCRIPTION = "Full Stack Developer";

const Name = ({ first, last }) =>
    <div className="name">
        <div className="first">{first}</div>
        <div className="last">{last}</div>
    </div>;

const NavLink = ({ name, to }) =>
    <div className="nav-link">
        <Link to={to}>{name}</Link>
    </div>;

const Logo = () =>
    <div className="logo">
        <div className="dot color" />
        <div className="dot color" />
        <div className="dot" />
        <div className="dot" />
    </div>;

export const App = () =>
    <div className="app">
        <div className="container">
            <div className="header">
                {/* <Logo /> */}
                <Link to="/">
                    <Name first={FIRST_NAME} last={LAST_NAME} />
                </Link>
                <nav>
                    <NavLink name="About" to="/about" />
                    <NavLink name="Services" to="/services" />
                    <NavLink name="Projects" to="/projects" />
                    <NavLink name="Resume" to="/resume" />
                    <NavLink name="Contact" to="/contact" />
                </nav>
            </div>
            <Switch>
                <Route exact path="/about" />
                <Route path="/services" render={() => <span>Services</span>} />
                <Route path="/projects" render={() => <span>Projects</span>} />
                <Route path="/resume" render={() => <span>Resume</span>} />
                <Route path="/contact" render={() => <span>Contact</span>} />
                {/* default to /about */}
                <Redirect to="/about" />
            </Switch>
        </div>
    </div>;

export default App;