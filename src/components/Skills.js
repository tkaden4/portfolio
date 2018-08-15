import React from "react";
import _ from "underscore";

import "./Skills.sass";

export const SkillCategory = ({ name, level }) =>
    <div className="skill-category">
        <div className="title">{name}</div>
        <div className="level">{level}</div>
    </div>;

export const Skills = () =>
    <div className="skills">
        <SkillCategory name="webdev" level={8} />
    </div>;
