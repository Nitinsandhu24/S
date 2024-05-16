import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import Death from "../images/death-row.jpg";
import Podcast from "../images/podcast.jpg";
import Still from "../images/still-rollin.jpg";
import Nomercy from "../Audio/nomercy.mp3";
import Shubhsong from "../Audio/Safetyoff.mp3";
import Nitish from "../Audio/nitishaudio.mp3";

export default function LowerNav() {
  const [musicdhanda, setMusicdhanda] = useState(false);
  const [musicSubh, setMusicSubh] = useState(false);
  const [musicNitish, setMusicNitish] = useState(false);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
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
      if (musicNitish) {
        audioRef3.current.pause();
      } else {
        audioRef3.current.play();
      }
      setMusicNitish(!musicNitish);
    }
  };
  return (
    <div className="bg-gray-1000 flex flex-col h-screen">
      <div className="flex pl-8 pt-3 pb-3 cursor-pointer">
        <FaBook className="h-7 w-7" />
        <p className="pl-2">Your Library</p>
        <br />
      </div>
      <div className="pl-2 ">
        <div className="border-4 border-black rounded bg-gray-950 p-2">
          <h1 className="text-white">Create Your Own first playlist</h1>
          <h6>it's easy we will help you</h6>
        </div>
      </div>
      <div>
        <div>
          <Link to="/artist">
            <button className="border border-gray-700 rounded border-solid p-2 m-1 hover:bg-blue-700 hover:scale-130">
              Artists
            </button>
          </Link>
          <button className="border border-gray-700 rounded border-solid p-2 m-1 hover:bg-blue-700 hover:scale-130">
            Albums
          </button>
          <button className="border border-gray-700 rounded border-solid p-2 m-1 hover:bg-blue-700 hover:scale-130">
            Podcast
          </button>
        </div>
      </div>
      <br />
      <div className="flex pl-5 mb-5 cursor-pointer">
        <FaSearch className=" h-5 w-5" />
        <p className="pl-3">Search Your Favourite</p>
      </div>

      <div className="flex-grow">
        <div className="flex p-3 cursor-pointer" onClick={() => toggleAudio1()}>
          <img src={Death} alt="" className="h-8 w-8 rounded-full" />
          <h6 className="pl-3">Death-Row</h6>
          <audio ref={audioRef1} src={Nomercy}></audio>
        </div>
        <div className="flex p-3 cursor-pointer" onClick={() => toggleAudio2()}>
          <img src={Still} alt="" className="h-8 w-8 rounded-full" />
          <h6 className="pl-3">Still Rollin</h6>
          <audio ref={audioRef2} src={Shubhsong}></audio>
        </div>
        <div className="flex p-3 cursor-pointer" onClick={() => toggleAudio3()}>
          <img src={Podcast} alt="" className="h-8 w-8 rounded-full" />
          <h6 className="pl-3">Podcast</h6>
          <audio ref={audioRef3} src={Nitish}></audio>
        </div>
        <div className="bg-black h-full w-full"></div>
        <div className="bg-black h-full w-full"></div>
        <div className="bg-black h-full w-full"></div>

        <div className="bg-black h-2 w-full"></div>
      </div>
    </div>
  );
}
