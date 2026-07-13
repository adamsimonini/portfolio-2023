import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Plane from "@ifos/Plane/Plane.jsx";
import { generateRandomPlane } from "@ifos/Plane/script.js";
import ShootingStars from "@ifos/ShootingStar/ShootingStar.jsx";
import AudioPlayer from "@components/AudioPlayer/AudioPlayer";

import bg from "@images/howling-space-min.jpg";

import Navbar from "./Navbar";
import { GithubIcon, ArrowUpRightIcon } from "./Icons";

// "coding for N+ years" without hardcoding a number that quietly goes stale.
const YEARS_CODING = new Date().getFullYear() - 2017;

// "the" reads naturally before web/blockchain but not before mobile/everywhere.
const ROTATING_WORDS = [
  { text: "web", article: true },
  { text: "mobile", article: false },
  { text: "blockchain", article: true },
  { text: "everywhere", article: false },
];
const WORD_DWELL_MS = 7500; // how long each word holds before swapping

// Cycles through ROTATING_WORDS: slide-up fade out, swap, slide-up fade in.
// Container width is measured per word so the trailing "." glides over
// instead of snapping.
function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");
  const measureRefs = useRef([]);
  const [widths, setWidths] = useState(null);

  // Measure each word at the headline's rendered size (re-measure on resize,
  // since the font size is responsive).
  useLayoutEffect(() => {
    const measure = () =>
      setWidths(measureRefs.current.map((el) => el?.offsetWidth ?? 0));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    // With reduced motion the global CSS disables animations, so animationend
    // would never fire — just keep the first word.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dwell = setInterval(() => setPhase("out"), WORD_DWELL_MS);
    return () => clearInterval(dwell);
  }, []);

  const handleAnimationEnd = () => {
    if (phase === "out") {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
      setPhase("in");
    }
  };

  return (
    <span
      className="relative inline-block whitespace-nowrap align-bottom transition-[width] duration-300 ease-out"
      style={{ width: widths ? `${widths[index]}px` : "auto" }}
    >
      {/* invisible copies used only for width measurement */}
      {ROTATING_WORDS.map((word, i) => (
        <span
          key={word.text}
          ref={(el) => (measureRefs.current[i] = el)}
          className="invisible absolute left-0 top-0"
          aria-hidden="true"
        >
          {word.article ? "the " : ""}
          {word.text}
        </span>
      ))}
      <span
        key={`${index}-${phase}`}
        onAnimationEnd={handleAnimationEnd}
        className={`inline-block bg-gradient-to-r from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent ${
          phase === "out" ? "animate-word-out" : "animate-word-in"
        }`}
      >
        {ROTATING_WORDS[index].article ? "the " : ""}
        {ROTATING_WORDS[index].text}
      </span>
    </span>
  );
}

function WelcomePage() {
  const [planes, setPlanes] = useState([]);

  // Recursive timeout so every spawn gets a fresh random delay
  // (setInterval would lock in one delay for the whole session).
  const MAX_PLANES = 2;

  useEffect(() => {
    let timeoutId;

    const spawn = () => {
      // Background tabs throttle timers, then flush them all on return —
      // spawning while hidden causes a burst of planes. Skip those ticks.
      if (!document.hidden) {
        setPlanes((prev) =>
          prev.length >= MAX_PLANES
            ? prev // sky is full; try again next tick
            : [
                ...prev,
                { ...generateRandomPlane(), id: Date.now() + Math.random() },
              ],
        );
      }
      timeoutId = setTimeout(spawn, 8000 + Math.random() * 10000);
    };

    timeoutId = setTimeout(spawn, 1200); // first plane shows up quickly
    return () => clearTimeout(timeoutId);
  }, []);

  const handleRemovePlane = (planeId) => {
    setPlanes((prev) => prev.filter((plane) => plane.id !== planeId));
  };

  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background image + darkening gradients for legible text */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.25),_transparent_60%)]" />

      <Navbar />

      {/* Planes drift across the hero; stars streak the upper sky */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ShootingStars />
        {planes.map((plane) => (
          <Plane key={plane.id} plane={plane} onRemove={handleRemovePlane} />
        ))}
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-32 pt-28 sm:px-4">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-soft backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Toronto, Canada
        </p>

        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
          Full stack developer
          <br />
          building for <RotatingWord />.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          I'm Adam — a developer working out of my hometown of Toronto. I've
          been coding for {YEARS_CODING}+ years, most at home in JavaScript,
          React, and Python. Put on some chillhop and scroll through my work.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowUpRightIcon />
          </a>
          <a
            href="https://github.com/adamsimonini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </main>

      <AudioPlayer />
    </section>
  );
}

export default WelcomePage;
