import React, { useState, useEffect } from "react";
import placeholder from "@images/portfolio-pieces/placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GithubIcon, ArrowUpRightIcon } from "./Icons";

function ProjectCard({ project }) {
  const [image, setImage] = useState(placeholder);

  useEffect(() => {
    let active = true;
    import(`@images/portfolio-pieces/${project.photoName.toLowerCase()}.png`)
      .then((mod) => {
        if (active) setImage(mod.default);
      })
      .catch((err) => console.error(err));
    return () => {
      active = false;
    };
  }, [project.photoName]);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-colors duration-300 hover:border-accent/40">
      <div className="aspect-video overflow-hidden">
        <LazyLoadImage
          src={image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-white">
          {project.name}
        </h3>

        {project.tags?.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-accent-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              Live demo
              <ArrowUpRightIcon />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
