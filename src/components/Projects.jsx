import React from "react";
import projectData from "@/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-ink-950 px-6 py-24 sm:px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-3xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            A sample of things I've built, professionally and for fun — from data
            tools to terminal games. Live demos are hosted on Netlify, so a few
            may take a moment to spin up.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
