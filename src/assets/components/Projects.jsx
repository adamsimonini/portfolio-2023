import React, { useState } from "react";
import projectData from "@/projects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="project">
      <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
      <p className="max-w-[1000px] lg:px-6 mx-auto pr-10 pl-10">
        Here is a sample of some of the projects I have worked on, either
        professionally or as a hobby. Please note that all projects are hosted
        for free on Netlify, and as such they might take a few seconds to load.
      </p>

      <h1>OMG</h1>
      <Container id="test">
        <Row>
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
