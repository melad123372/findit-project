import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componints/Navbar/Navbar";
import Home from "./componints/Home/Home";
import About from "./componints/About/About";
import Properties from "./componints/Propertie/Propertie";
import Footar from "./componints/Footar/Footar";
import Agents from "./componints/Agents/Agents";
import Blogs from "./componints/Blogs/Blogs";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>

      <Footar />
    </BrowserRouter>
  );
}
