// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpageloading";
import Signup from "./component/Main/Signup";
import Login from "./component/Main/Signin";
import FirstPage from "./firstPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MainPage" element={<Mainpage />}></Route>
      </Routes>
    </Router>
  );
}
