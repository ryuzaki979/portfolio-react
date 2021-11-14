import React from "react";

import content from "../../json/skill.json"
import Skill from "./Skill";
import './style.css'
const Skills = ()=>{
    const skillset = content[0]
    return <>
        <div className="flex aboutSkill">
            <div className="indicators">
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
            </div>
            <div className="skills">
                <Skill skillItem = {skillset.languages}></Skill>
                <Skill skillItem = {skillset.tools}></Skill>
                <Skill skillItem = {skillset.libraries}></Skill>
        </div>
        </div>
    </>
}


export default Skills