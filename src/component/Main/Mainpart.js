import React from "react";
import { useState } from "react";
import Shubh from "../images/shubh.jpg";
import Dhanda from "../images/dhanda.jpg";
import Sidhu from "../images/sidhu.jpg";
import Square from "../images/square.jpg";
export default function Mainpart() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const handleImageClick = (media) => {
    setSelectedMedia(media);
  };
  return (
    <div>
      <div>
        <div className="flex pl-10 pt-5 ">
          <div className="flex pr-20">
            <img
              src={Shubh}
              alt=""
              className="h-10 w-10 cursor-pointer rounded-full"
            />
            <h6 className="text-white pt-2 pl-3 font-bold cursor-pointer">
              Shubh
            </h6>
          </div>
          <div className="flex pl-20">
            <img
              src={Dhanda}
              alt=""
              className="h-10 w-10 cursor-pointer rounded-full"
            />
            <h6 className="text-white pt-2 pl-3 font-bold cursor-pointer">
              Dhanda Nyoliwala
            </h6>
          </div>
        </div>
        <div className="flex pl-10 pt-3 ">
          <div className="flex pr-20">
            <img
              src={Sidhu}
              alt=""
              className="h-10 w-10 cursor-pointer rounded-full"
            />
            <h4 className="text-white pt-2 pl-3 pb-7 font-bold cursor-pointer">
              Sidhu Moosewala
            </h4>
          </div>
          <div className="flex">
            <img
              src={Square}
              alt=""
              className="h-10 w-10 cursor-pointer rounded-full"
            />
            <h4 className="text-white pt-2 pl-3 pb-7 font-bold cursor-pointer">
              Mc Square
            </h4>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
