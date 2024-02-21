import React from "react";
import Twitter from "../images/x.jpg";
import Insta from "../images/insta.png";
import Face from "../images/Facebook.png";

export default function Footer() {
  return (
    <div>
      <div className="text-white p-9 flex justify-between">
        <div className="flex space-x-20">
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="cursor-pointer">
              <li>About us</li>
              <li>Jobs</li>
              <li>For the record</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Communities</h3>
            <ul className="cursor-pointer">
              <li>For Artist</li>
              <li>Developer</li>
              <li>Advertiser</li>
              <li>Investor</li>
              <li>Vendor</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-3">
          <img src={Twitter} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={Insta} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={Face} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="pl-9 text-white">&copy; 2024 My Spotify</div>
    </div>
  );
}
