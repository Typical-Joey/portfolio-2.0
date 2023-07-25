import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Navbar/MyNavbar";
import Projects from "./Projects/Projects";
import Homepage from "./Homepage/Homepage";
import "./global.css";

function App() {
  return (
    <div className="app-container">
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
