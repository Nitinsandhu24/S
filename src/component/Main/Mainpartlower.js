import React, { useState } from "react";
import Dhanda from "../images/dhanda2.jpg";
import Shubh from "../images/shubh2.jpg";
import Sidhu from "../images/sidhu2.jpg";
import Para from "../images/para.jpg";
import Hint from "../images/Hint.jpg";
import McSuare from "../images/Mcsquare.jpg";

export default function Mainpartlower() {
  const [showPlayDhanda, setShowPlayDhanda] = useState(false);
  const [showPlayShubh, setShowPlayShubh] = useState(false);
  const [showPlaySidhu, setShowPlaySidhu] = useState(false);
  const [showPlayPara, setShowPlayPara] = useState(false);
  const [showPlayHint, setShowPlayHint] = useState(false);
  const [showPlayMcSquare, setShowPlayMcSquare] = useState(false);
  const [showAll, setShowAll] = useState(false);
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

          <h3 className="pt-3">Daily Mix1</h3>
          <p>Dhanda Nyoliwala</p>
        </div>
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayShubh(true)}
          onMouseLeave={() => setShowPlayShubh(false)}
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

          <h3 className="pt-3">Daily Mix2</h3>
          <p>Shubh</p>
        </div>
        <div
          className="relative ml-5"
          onMouseEnter={() => setShowPlaySidhu(true)}
          onMouseLeave={() => setShowPlaySidhu(false)}
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

              <h3 className="pt-3">Daily Mix4</h3>
              <p>Paradox</p>
            </div>
            <div
              className="relative mr-5"
              onMouseEnter={() => setShowPlayHint(true)}
              onMouseLeave={() => setShowPlayHint(false)}
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

              <h3 className="pt-3">Daily Mix5</h3>
              <p>Karan Aujla</p>
            </div>
            <div
              className="relative ml-5"
              onMouseEnter={() => setShowPlayMcSquare(true)}
              onMouseLeave={() => setShowPlayMcSquare(false)}
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
