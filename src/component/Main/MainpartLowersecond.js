import React, { useState, useRef } from "react";
import Nitish from "../images/podcast.jpg";
import Beer from "../images/beerbicep.jpg";
import Geeta from "../images/geeta.jpg";
import Beerclip from "../Audio/beerclip.mp3";
import Geetaaudio from "../Audio/Geetaaudio.mp3";
import Nitishaudio from "../Audio/nitishaudio.mp3";
export default function MainpartLowersecond() {
  const [showPlayNitish, setShowPlayNitish] = useState(false);
  const [showPlayBeer, setShowPlayBeer] = useState(false);
  const [showPlayGeeta, setShowPlayGeeta] = useState(false);
  const [musicGeeta, setMusicGeeta] = useState(false);
  const [musicBeer, setMusicBeer] = useState(false);
  const [musicNitish, setMusicNitish] = useState(false);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const toggleAudio1 = () => {
    if (audioRef1.current) {
      if (musicGeeta) {
        audioRef1.current.pause();
      } else {
        audioRef1.current.play();
      }
      setMusicGeeta(!musicGeeta);
    }
  };
  const toggleAudio2 = () => {
    if (audioRef2.current) {
      if (musicBeer) {
        audioRef2.current.pause();
      } else {
        audioRef2.current.play();
      }
      setMusicBeer(!musicBeer);
    }
  };
  const toggleAudio3 = () => {
    if (audioRef3.current) {
      if (musicNitish) {
        audioRef3.current.pause();
      } else {
        audioRef3.current.play();
      }
      setMusicNitish(!musicNitish);
    }
  };

  return (
    <div className="text-white p-5">
      <h3 className="font-bold mb-5">Episode For you</h3>
      <div className="flex space-x-10 ml-5">
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayNitish(true)}
          onMouseLeave={() => setShowPlayNitish(false)}
          onClick={() => toggleAudio3()}
        >
          <img
            src={Nitish}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover  rounded-md"
          />
          {showPlayNitish && (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-green-800 opacity-100 hover:opacity-100 rounded-full bg-white p-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 5v10l7-5z" fill="currentColor" />
              </svg>
            </div>
          )}
          <audio ref={audioRef3} src={Nitishaudio}></audio>
          <h3 className="pt-3">Nitish Rajput</h3>
        </div>
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayBeer(true)}
          onMouseLeave={() => setShowPlayBeer(false)}
          onClick={() => toggleAudio2()}
        >
          <img
            src={Beer}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover  rounded-md"
          />
          {showPlayBeer && (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-green-800 opacity-100 hover:opacity-100 rounded-full bg-white p-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 5v10l7-5z" fill="currentColor" />
              </svg>
            </div>
          )}
          <audio ref={audioRef2} src={Beerclip}></audio>
          <h3 className="pt-3">Ranveer Allahbadia</h3>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowPlayGeeta(true)}
          onMouseLeave={() => setShowPlayGeeta(false)}
          onClick={() => toggleAudio1()}
        >
          <img
            src={Geeta}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover ml-5  rounded-md"
          />
          {showPlayGeeta && (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-green-800 opacity-100 hover:opacity-100 rounded-full bg-white p-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 5v10l7-5z" fill="currentColor" />
              </svg>
            </div>
          )}
          <audio ref={audioRef1} src={Geetaaudio}></audio>
          <h3 className="pt-3 pl-5"> Srimad Bhagwat Geeta</h3>
        </div>
      </div>
    </div>
  );
}
