import React from "react";
import "./style.css";
import { skills } from "../../data/constant";

const SkillsSection = () => {
  return (
    <div id="Skills" className="SkillsSection">
      <div className="SkillsSectionContainer">
        <div className="SkillsSectionTitle">Skills</div>
        <div className="SkillsSectionDesc">
          Here are some of my skills on which I have been working on
        </div>
        <div className="skillscontainer">
          {skills.map((skill) => (
            <div className="skillHead">
              <div className="skillTitle">{skill.title}</div>
              <div className="skillList">
                {skill.skills.map((item) => (
                  <div className="skill">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
