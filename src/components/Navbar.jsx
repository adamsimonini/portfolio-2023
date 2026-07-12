import React, { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-4">
        <a
          href="#welcome"
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          Adam Simonini
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#projects" className="hidden transition-colors hover:text-white sm:inline">
            Projects
          </a>
          <a href="#contact" className="hidden transition-colors hover:text-white sm:inline">
            Contact
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/adamsimonini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 transition-colors hover:text-accent"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/adamsimonini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 transition-colors hover:text-accent"
            >
              <GithubIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
