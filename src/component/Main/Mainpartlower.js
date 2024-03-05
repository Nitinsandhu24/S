import React, { useState, useRef } from "react";
import Dhanda from "../images/dhanda2.jpg";
import Shubh from "../images/shubh2.jpg";
import Sidhu from "../images/sidhu2.jpg";
import Para from "../images/para.jpg";
import Hint from "../images/Hint.jpg";
import McSuare from "../images/Mcsquare.jpg";
import Shubhsong from "../Audio/kingshit.mp3";
import Nomercy from "../Audio/nomercy.mp3";
import SelftMade from "../Audio/selfmade.mp3";
import paramc from "../Audio//para-mc.mp3";
import Hints from "../Audio/hint.mp3";
export default function Mainpartlower() {
  const [showPlayDhanda, setShowPlayDhanda] = useState(false);
  const [showPlayShubh, setShowPlayShubh] = useState(false);
  const [showPlaySidhu, setShowPlaySidhu] = useState(false);
  const [showPlayPara, setShowPlayPara] = useState(false);
  const [showPlayHint, setShowPlayHint] = useState(false);
  const [showPlayMcSquare, setShowPlayMcSquare] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [musicSubh, setMusicSubh] = useState(false);
  const [musicdhanda, setMusicdhanda] = useState(false);
  const [musicSidhu, setMusicSidhu] = useState(false);
  const [musicpara, setMusicpara] = useState(false);
  const [musichint, setMusichint] = useState(false);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const audioRef4 = useRef(null);
  const audioRef5 = useRef(null);
  const toggleAudio1 = () => {
    if (audioRef1.current) {
      if (musicdhanda) {
        audioRef1.current.pause();
      } else {
        audioRef1.current.play();
      }
      setMusicdhanda(!musicdhanda);
    }
  };

  const toggleAudio2 = () => {
    if (audioRef2.current) {
      if (musicSubh) {
        audioRef2.current.pause();
      } else {
        audioRef2.current.play();
      }
      setMusicSubh(!musicSubh);
    }
  };
  const toggleAudio3 = () => {
    if (audioRef3.current) {
      if (musicSidhu) {
        audioRef3.current.pause();
      } else {
        audioRef3.current.play();
      }
      setMusicSidhu(!musicSidhu);
    }
  };
  const toggleAudio4 = () => {
    if (audioRef4.current) {
      if (musicpara) {
        audioRef4.current.pause();
      } else {
        audioRef4.current.play();
      }
      setMusicpara(!musicpara);
    }
  };
  const toggleAudio5 = () => {
    if (audioRef5.current) {
      if (musichint) {
        audioRef5.current.pause();
      } else {
        audioRef5.current.play();
      }
      setMusichint(!musichint);
    }
  };
  return (
    <div className="text-white">
      <div className="text-white flex justify-between px-4">
        <h5 className="font-bold">Your Spotify Playlist</h5>
        <button
          className="cursor-pointer font-bold"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
      <br />
      <div className="flex space-x-10 ml-10">
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayDhanda(true)}
          onMouseLeave={() => setShowPlayDhanda(false)}
          onClick={() => toggleAudio1()}
        >
          <img
            src={Dhanda}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover rounded-md"
          />
          {showPlayDhanda && (
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer ">
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
          <audio ref={audioRef1} src={Nomercy}></audio>
          <h3 className="pt-3">Daily Mix1</h3>
          <p>Dhanda Nyoliwala</p>
        </div>
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayShubh(true)}
          onMouseLeave={() => setShowPlayShubh(false)}
          onClick={() => toggleAudio2()}
        >
          <img
            src={Shubh}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover rounded-md"
          />
          {showPlayShubh && (
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
          <audio ref={audioRef2} src={Shubhsong}></audio>

          <h3 className="pt-3">Daily Mix2</h3>
          <p>Shubh</p>
        </div>
        <div
          className="relative ml-5"
          onMouseEnter={() => setShowPlaySidhu(true)}
          onMouseLeave={() => setShowPlaySidhu(false)}
          onClick={() => toggleAudio3()}
        >
          <img
            src={Sidhu}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover rounded-md"
          />
          {showPlaySidhu && (
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
          <audio ref={audioRef3} src={SelftMade}></audio>
          <div className="ml-5">
            <h3 className="pt-3 ">Daily Mix3</h3>
            <p> Sidhu Moosewala</p>
          </div>
        </div>
      </div>
      <br />
      {showAll && (
        <div className="text-white">
          <div className="flex space-x-10 ml-10">
            <div
              className="relative mr-5"
              onMouseEnter={() => setShowPlayPara(true)}
              onMouseLeave={() => setShowPlayPara(false)}
              onClick={() => toggleAudio4()}
            >
              <img
                src={Para}
                alt=""
                style={{ height: "225px", width: "210px" }}
                className="object-cover rounded-md"
              />
              {showPlayPara && (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer ">
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
              <audio ref={audioRef4} src={paramc}></audio>
              <h3 className="pt-3">Daily Mix4</h3>
              <p>Paradox</p>
            </div>
            <div
              className="relative mr-5"
              onMouseEnter={() => setShowPlayHint(true)}
              onMouseLeave={() => setShowPlayHint(false)}
              onClick={() => toggleAudio5()}
            >
              <img
                src={Hint}
                alt=""
                style={{ height: "225px", width: "210px" }}
                className="object-cover rounded-md"
              />
              {showPlayHint && (
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
              <audio ref={audioRef5} src={Hints}></audio>
              <h3 className="pt-3">Daily Mix5</h3>
              <p>Karan Aujla</p>
            </div>
            <div
              className="relative ml-5"
              onMouseEnter={() => setShowPlayMcSquare(true)}
              onMouseLeave={() => setShowPlayMcSquare(false)}
              onClick={() => toggleAudio4()}
            >
              <img
                src={McSuare}
                alt=""
                style={{ height: "225px", width: "210px" }}
                className="object-cover rounded-md"
              />
              {showPlayMcSquare && (
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
              <audio ref={audioRef4} src={paramc}></audio>
              <div className="ml-5">
                <h3 className="pt-3 ">Daily Mix6</h3>
                <p> Mc SQuare</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
