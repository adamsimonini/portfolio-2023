import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import projectData from "@/projects";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  console.log(projectData);
  const projects = [
    {
      id: 1,
      title: "Business Startup",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 2,
      title: "Business Startup",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 3,
      title: "Business Startup",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 4,
      title: "Business Startup",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 5,
      title: "Business Startup",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 6,
      title: "Business Startup",
      description: "Design & Development",
      img: img1,
    },
  ];

  return (
    <>
      <section id="projects" className="project">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="max-w-[1000px] lg:px-6 mx-auto">
          Here is a sample of some of the projects I have worked on, either
          professionally or as a hobby. Please note that all projects are hosted
          for free on Netlify, and as such they might take a few seconds to
          load.
        </p>
        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {projectData.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
