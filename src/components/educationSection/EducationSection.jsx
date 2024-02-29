import React from "react";
import "./style.css";

import { education } from "../../data/constant";

const EducationSection = () => {
  return (
    <div id="Education" className="EducationSection">
      <div className="EducationSectionContainer">
        <div className="EducationSectionTitle">Education</div>
        <div className="EducationSectionDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est,
          earum sunt ex ipsam delectus.
        </div>
        <div className="educationBoxGrid">
          <div className="educationBox">
            {education.map((data) => (
              <>
                <div className="dataHead">
                  <img src={data.img} alt="" />
                  <div className="dataHead2">
                    <span>{data.school}</span>
                    <div className="datadate">{data.date}</div>
                  </div>
                </div>
                <div className="dataDes">{data.desc}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
