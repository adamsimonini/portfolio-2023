import React from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-ink-900 px-6 py-20 sm:px-4"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-3xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-400">
          Open to new projects and roles. Reach out on LinkedIn or take a look at
          my code on GitHub.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/adamsimonini/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/adamsimonini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl items-center justify-between border-t border-white/5 pt-8 text-sm text-slate-500">
        <span className="font-display font-semibold text-slate-300">
          Adam Simonini
        </span>
        <span>© {new Date().getFullYear()} · Toronto, Canada</span>
      </div>
    </footer>
  );
}

export default Footer;
