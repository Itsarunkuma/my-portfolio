import React from "react";
import ProjectsCard from "./ProjectsCard";
import { PROJECTS_LIST } from "./common/Helper";
const Projects = () => {
  return (
    <div className="pt-16" id="projects">
      <div className="container mx-auto 2xl:max-w-[1320px] px-4">
        <h2 className="text-[76px] uppercase ff_bebas ">Featured Projects</h2>
        <p className="pb-8">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
        <div className="flex flex-wrap gap-8">
          {PROJECTS_LIST.map((obj, i) => (
            <ProjectsCard key={i} obj={obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
