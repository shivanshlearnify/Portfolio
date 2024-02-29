import React from "react";
import "./style.css";
import { projects } from "../../data/constant";

const Projects = () => {
  return (
    <div id="Projects" className="project">
      <div className="projectContainer">
        <div className="ProjectTitle">Projects</div>
        <div className="ProjectDes">
          I have experience working on a diverse array of projects. Below are{" "}
          <br /> a few examples of my past endeavors.
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <>
              <div className="projectBox">
                <img src={project.image} alt="" />
                <div className="projecttagsgrid">
                  {project.tags.map((tags) => (
                    <div className="projecttag">{tags}</div>
                  ))}
                </div>
                <div className="projectTitle">{project.title}</div>
                <div className="projectDate">{project.date}</div>
                <div className="projectDes">{project.description}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
