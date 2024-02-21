import React from "react";
import UpperNav from "./Navbar/UpperNav";
import LowerNav from "./Navbar/LowerNav";

export default function Navbar() {
  return (
    <div className="text-white bg-black w-1/5 h-full">
      <UpperNav />
      <LowerNav />
    </div>
  );
}
