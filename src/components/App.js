import React from "react";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

import "./App.sass";

import About from "./tabs/About";
import Contact from "./tabs/Contact";

const FIRST_NAME = "Kaden";
const LAST_NAME = "Thomas";
const NAME = FIRST_NAME + LAST_NAME;

const DESCRIPTION = "Full Stack Developer";

const Name = ({ first, last }) =>
    <div className="name">
        <div className="first">{first}</div>
        <div className="last">{last}</div>
    </div>;

const NavLink = withRouter(({ name, to, location }) => {
    let classes = "nav-link" + (location.pathname === to ? " selected" : " ");
    return <div className={classes}>
        <Link to={to}>{name}</Link>
    </div>;
});

const Logo = () =>
    <div className="logo">
        <div className="dot color" />
        <div className="dot color" />
        <div className="dot" />
        <div className="dot" />
    </div>;

export const App = () =>
    <div className="app-root">
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
        </div>
        <div className="body">
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/projects" render={() => <span>Projects</span>} />
                <Route path="/resume" render={() => <span>Resume</span>} />
                <Route path="/services" render={() => <span>Services</span>} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/about" />
            </Switch>
        </div>
    </div>;

export default App;