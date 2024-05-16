// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpageloading";
import Signup from "./component/Main/Signup";
import Login from "./component/Main/Signin";
import FirstPage from "./firstPage";
import Subh from "./component/Main/Subh";
import Dhanda from "./component/Main/Dhanda";
import Sidhu from "./component/Main/Sidhu";
import Square from "./component/Main/Square";
import Artist from "./component/Main/Artist";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MainPage" element={<Mainpage />}></Route>
        <Route path="/artist1" element={<Subh />}></Route>
        <Route path="/artist2" element={<Dhanda />}></Route>
        <Route path="/artist3" element={<Sidhu />}></Route>
        <Route path="/artist4" element={<Square />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
      </Routes>
    </Router>
  );
}
