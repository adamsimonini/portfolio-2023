import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

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
      <div id="projects" className="project">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {projects.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
