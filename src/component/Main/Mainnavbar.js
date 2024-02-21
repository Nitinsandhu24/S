import React from "react";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="top-0 left-0 w-full bg-gray-950 p-4 flex justify-between">
      <h1 className="font-bold p-3 text-white">Naam Abhi Sochuga</h1>

      <div>
        <Link to="/signup">
          <button className="mr-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}
