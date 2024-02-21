import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import Death from "../images/death-row.jpg";
import Podcast from "../images/podcast.jpg";
import Still from "../images/still-rollin.jpg";

export default function LowerNav() {
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
          <button className="border border-gray-700 rounded border-solid p-2 m-1 hover:bg-blue-700 hover:scale-130">
            Artists
          </button>
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
        <div className="flex p-3 cursor-pointer">
          <img src={Death} alt="" className="h-8 w-8 rounded-full" />
          <h6 className="pl-3">Death-Row</h6>
        </div>
        <div className="flex p-3 cursor-pointer">
          <img src={Still} alt="" className="h-8 w-8 rounded-full" />
          <h6 className="pl-3">Still Rollin</h6>
        </div>
        <div className="flex p-3 cursor-pointer">
          <img src={Podcast} alt="" className="h-8 w-8 rounded-full" />
          <h6 className="pl-3">Podcast</h6>
        </div>
        <div className="bg-black h-full w-full"></div>
        <div className="bg-black h-full w-full"></div>
        <div className="bg-black h-full w-full"></div>
        <div className="bg-black h-2 w-full"></div>
      </div>
    </div>
  );
}
