import React from "react";
import { projects } from "../../data/constant";

const Projects = () => {
  return (
    <div id="Projects" className="project">
      <div className="projectContainer">
        <div className="ProjectTitle">Projects</div>
        <div className="ProjectDes">
          I have experience working on a diverse array of projects. Below are
          <br /> a few examples of my past endeavors.
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <>
              <div className="projectBox" key={index}>
                <img src={project.image} alt="" />
                <div className="projecttagsgrid">
                  {project.tags.map((tags,index) => (
                    <div className="projecttag" key={index}>{tags}</div>
                  ))}
                </div>
                <div className="projectTitle">{project.title}</div>
                <div className="projectDate">{project.date}</div>
                <div className="projectDes">{project.description.slice(0,150)}.....</div>
                <div className="projectBtn">
                  <a href={project.webapp} target="_blank">View Live App</a>
                  <a href={project.github} target="_blank">View Code</a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
