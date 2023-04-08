import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";

// PLAYLIST
import DamnFineCoffee from "@audio/mtbrd - Damn Fine Coffee.mp3";
import Still from "@audio/Idealism - Still.mp3";
import AutumnHere from "@audio/Luffmoor - Autumn, Here.mp3";
import HeySeptemnber from "@audio/Harris Cole - Hey, September.mp3";

const playlist = [DamnFineCoffee, Still, AutumnHere, HeySeptemnber];

function Player() {
  // on page load set the track to a random one
  const [currentTrack, setTrackIndex] = React.useState(
    Math.floor(Math.random() * playlist.length)
  );

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickBack = () => {
    setTrackIndex((currentTrack) =>
      currentTrack == 0
        ? (currentTrack = playlist.length - 1)
        : currentTrack - 1
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <AudioPlayer
      className="sticky"
      autoPlay={true}
      volume="0.20"
      src={playlist[currentTrack]}
      //   onPlay={(e) => console.log("onPlay")}
      showSkipControls
      onClickNext={handleClickNext}
      onClickPrevious={handleClickBack}
      onEnded={handleEnd}
    />
  );
}

export default Player;
