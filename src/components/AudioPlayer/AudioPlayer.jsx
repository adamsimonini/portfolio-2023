import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import {
  PlayIcon,
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  VolumeIcon,
} from "../Icons";

// PLAYLIST
import DamnFineCoffee from "@audio/mtbrd - Damn Fine Coffee.mp3";
import Still from "@audio/Idealism - Still.mp3";
import AutumnHere from "@audio/Luffmoor - Autumn, Here.mp3";
import HeySeptember from "@audio/Harris Cole - Hey, September.mp3";

const playlist = [
  { src: DamnFineCoffee, title: "Damn Fine Coffee", artist: "mtbrd" },
  { src: Still, title: "Still", artist: "Idealism" },
  { src: AutumnHere, title: "Autumn, Here", artist: "Luffmoor" },
  { src: HeySeptember, title: "Hey, September", artist: "Harris Cole" },
];

function AudioPlayer() {
  const audioRef = useRef(null);
  // start the radio on a random track
  const [trackIndex, setTrackIndex] = useState(() =>
    Math.floor(Math.random() * playlist.length)
  );
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const track = playlist[trackIndex];

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // Try to start on load; browsers usually block un-gestured audio, in which
  // case we just stay paused and wait for the user.
  useEffect(() => {
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  // Changing the src pauses the element; resume if we were playing.
  useEffect(() => {
    if (playing) audioRef.current.play().catch(() => setPlaying(false));
  }, [trackIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  const next = () => setTrackIndex((i) => (i + 1) % playlist.length);
  const prev = () =>
    setTrackIndex((i) => (i - 1 + playlist.length) % playlist.length);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-950/75 px-4 py-3 shadow-lg backdrop-blur-md">
      <audio ref={audioRef} src={track.src} onEnded={next} />

      {/* equalizer — animates while playing */}
      <div
        className={`flex h-4 items-end gap-[3px] ${playing ? "eq-playing" : ""}`}
        aria-hidden="true"
      >
        <span className="eq-bar" />
        <span className="eq-bar" />
        <span className="eq-bar" />
      </div>

      <div className="min-w-0 max-w-[10rem]">
        <p className="truncate text-sm font-semibold leading-tight text-white">
          {track.title}
        </p>
        <p className="truncate text-xs leading-tight text-slate-400">
          {track.artist} · chillhop radio
        </p>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous track"
          className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <SkipBackIcon />
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="rounded-full bg-accent p-2.5 text-ink-950 transition-transform hover:scale-105"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next track"
          className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <SkipForwardIcon />
        </button>
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <VolumeIcon className="h-4 w-4 text-slate-400" />
        <input
          type="range"
          className="volume-slider w-16"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
