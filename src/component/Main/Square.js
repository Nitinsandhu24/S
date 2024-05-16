import React, { useState, useEffect } from "react";
import SafetyOff from "../Audio/Safetyoff.mp3";
import Kingshit from "../Audio/kingshit.mp3";
import Youandme from "../Audio/Youandme.mp3";
import Hood from "../Audio/Hood.mp3";
import Nolove from "../Audio/NOLOve.mp3";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const songs = [
    { name: "Safety Off", file: SafetyOff },
    { name: "KingShit", file: Kingshit },
    { name: "You & Me", file: Youandme },
    { name: "No Love", file: Nolove },
    { name: "Hood Anthem", file: Hood },
  ];

  useEffect(() => {
    if (audio) {
      console.log(
        "Adding ended, timeupdate, and loadedmetadata event listeners to audio"
      );
      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
        console.log(
          "Removing ended, timeupdate, and loadedmetadata event listeners from audio"
        );
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    } else {
      console.log("Audio object is null");
    }
  }, [audio]);

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audio.duration);
  };

  const handlePlayPause = (song) => {
    console.log("handlePlayPause called for song:", song.name);

    if (currentSong === song) {
      console.log("Current song is the clicked song");
      if (isPlaying) {
        console.log("Audio object:", audio);
        if (audio) {
          console.log("Current time:", audio.currentTime);
          if (audio.currentTime > 0) {
            console.log("Pausing audio");
            audio.pause();
          } else {
            console.log("Audio is not playing");
          }
        } else {
          console.log("Audio object is null or undefined");
        }
        setIsPlaying(false);
      } else {
        console.log("Playing audio");
        audio.play();
        setIsPlaying(true);
      }
    } else {
      console.log("Clicked song is different from current song");
      if (audio) {
        console.log("Pausing current audio");
        audio.pause();
      }
      const newAudio = new Audio(song.file);
      console.log("Created new Audio object");
      newAudio.play();
      console.log("Playing new audio");
      setCurrentSong(song);
      setAudio(newAudio);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-10">Mc Square</h1>
      <h2 className="text-2xl font-semibold mt-5">Song List</h2>
      <ul className="mt-5 w-full max-w-md">
        {songs.map((song, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <span className="flex-grow">{song.name}</span>
            {currentSong === song && isPlaying ? (
              <button
                onClick={() => handlePlayPause(song)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
              >
                Pause
              </button>
            ) : (
              <button
                onClick={() => handlePlayPause(song)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
              >
                Play
              </button>
            )}
          </li>
        ))}
      </ul>
      {currentSong && (
        <div className="mt-10 w-full max-w-md">
          <h2 className="text-xl">Now Playing: {currentSong.name}</h2>
          <div className="relative w-full h-2 bg-gray-700 rounded mt-4">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
