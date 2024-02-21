import React from "react";
import Mainnavbar from "./Main/Mainnavbar";
import Mainpart from "./Main/Mainpart";
import MainpartLower from "./Main/Mainpartlower";
import MainpartLowersecond from "./Main/MainpartLowersecond";
import MainpartLowerthird from "./Main/MainpartLowerthird";
import Footer from "./Main/Footer";
export default function Main() {
  return (
    <div className="bg-black w-4/5">
      <Mainnavbar />
      <Mainpart />
      <MainpartLower />
      <MainpartLowersecond />
      <MainpartLowerthird />
      <Footer />
    </div>
  );
}
