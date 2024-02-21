import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaRegLibrary } from "react-icons/fa";
export default function UpperNav() {
  return (
    <div className="flex flex-col">
      <div className=" text-white bg-gray-1000  p-3 border-4 border-black rounded-10">
        <div className="flex items-center pl-5 pt-5 ">
          <FaHome className="h-7 w-7 cursor-pointer" />
          <p className="pl-2 cursor-pointer">Home</p>
        </div>
        <div className="flex items-center pl-5 pt-5">
          <FaSearch className="h-7 w-7 cursor-pointer" />
          <p className="pl-2 cursor-pointer">Search</p>
        </div>
        <br />
      </div>
    </div>
  );
}
