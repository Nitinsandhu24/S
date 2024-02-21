import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

export default function Mainpage() {
  return (
    <div className="flex flex-row border border-gray-400 border-4">
      <Navbar className="bg-gray-900 fixed top-0 left-0 right-0 z-10" />
      <div className="w-1 bg-gray-400 overflow-y-auto"></div>{" "}
      <Main className="" />
    </div>
  );
}
