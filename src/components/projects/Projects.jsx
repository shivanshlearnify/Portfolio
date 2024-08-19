import React from "react";
import { projects } from "../../data/constant";

const Projects = () => {
  return (
    <div id="Projects" className="project">
      <div className="projectContainer">
        <div className="text-center text-6xl font-bold">Projects</div>
        <div className="ProjectDes text-center mt-4">
          I have experience working on a diverse array of projects. Below are
          <br /> a few examples of my past endeavors.
        </div>
        <div className=" flex flex-col gap-5">
          {projects.map((project, index) => (
            <div key={index} className="flex gap-10 md:flex-col md:items-center sm:flex-col sm:items-center">
              <img src={project.image} alt=""  className="max-w-2xl cursor-pointer sm:max-w-xl"/>
              <div className="border rounded-3xl p-5 flex flex-col bg-white">
                <div className="text-3xl font-extrabold text-purple-400">{project.title}</div>
                <div className="text-gray-500 font-medium my-2">
                  {project.description.slice(0, 200)}.....
                </div>
                <div className="flex gap-4 flex-wrap">
                  {project.tags.map((tags, index) => (
                    <div className="border py-1 px-2 rounded-3xl hover:bg-gray-700 hover:text-white cursor-pointer mb-2" key={index}>
                      {tags}
                    </div>
                  ))}
                </div>
                <div className=" flex gap-4 mt-6 sm:flex-col">
                  <a href={project.webapp} target="_blank" className="bg-black text-white py-2 px-4 rounded-3xl sm:text-center">
                    View Live App
                  </a>
                  <a href={project.github} target="_blank" className="bg-purple-300 text-white py-2 px-4 rounded-3xl sm:text-center">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
