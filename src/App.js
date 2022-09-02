// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import ClassPage from "./ClassPage.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ManageClass from "./ManageClass.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Dashboard from "./components/Dashboard"



function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageclass/:classId" element={<ClassPage />} />
        <Route path="/manageclass" element={<ManageClass />} />
      </Routes>
      
    </BrowserRouter>
    </div>
      
  );
}

export default App;

