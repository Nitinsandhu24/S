import React, { useState } from "react";
import Nitish from "../images/podcast.jpg";
import Beer from "../images/beerbicep.jpg";
import Geeta from "../images/geeta.jpg";

export default function MainpartLowersecond() {
  const [showPlayNitish, setShowPlayNitish] = useState(false);
  const [showPlayBeer, setShowPlayBeer] = useState(false);
  const [showPlayGeeta, setShowPlayGeeta] = useState(false);

  return (
    <div className="text-white p-5">
      <h3 className="font-bold mb-5">Episode For you</h3>
      <div className="flex space-x-10 ml-5">
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayNitish(true)}
          onMouseLeave={() => setShowPlayNitish(false)}
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
          <h3 className="pt-3">Nitish Rajput</h3>
        </div>
        <div
          className="relative mr-5"
          onMouseEnter={() => setShowPlayBeer(true)}
          onMouseLeave={() => setShowPlayBeer(false)}
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
          <h3 className="pt-3">Ranveer Allahbadia</h3>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowPlayGeeta(true)}
          onMouseLeave={() => setShowPlayGeeta(false)}
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
          <h3 className="pt-3 pl-5"> Bhagwat Geeta</h3>
        </div>
      </div>
    </div>
  );
}
