import React from "react";
import { useState } from "react";
import King from "../images/king-shit.jpg";
import Pbx from "../images/pbx1.jpg";
import Ghost from "../images/ghost.jpg";

export default function MainpartLowerthird() {
  const [showPlayKing, setShowPlayking] = useState(false);
  const [showPlaypbx, setShowPlaypbx] = useState(false);
  const [showPlayghost, setShowPlayghost] = useState(false);

  return (
    <div className="text-white p-5">
      <h3 className="font-bold mb-5">Top Playlist of 2023</h3>
      <div className="flex space-x-10 ml-5">
        <div
          className="relative"
          onMouseEnter={() => setShowPlayking(true)}
          onMouseLeave={() => setShowPlayking(false)}
        >
          <img
            src={King}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover mr-5  rounded-md"
          />
          {showPlayKing && (
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
          <h3 className="pt-3 ">Leo</h3>
        </div>
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlaypbx(true)}
          onMouseLeave={() => setShowPlaypbx(false)}
        >
          <img
            src={Pbx}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover  rounded-md"
          />
          {showPlaypbx && (
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
          <h3 className="pt-3">Pb-X1</h3>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowPlayghost(true)}
          onMouseLeave={() => setShowPlayghost(false)}
        >
          <img
            src={Ghost}
            alt=""
            style={{ height: "225px", width: "210px" }}
            className="object-cover ml-5  rounded-md"
          />
          {showPlayghost && (
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
          <h3 className="pt-3 pl-5">Ghost</h3>
        </div>
      </div>
    </div>
  );
}
