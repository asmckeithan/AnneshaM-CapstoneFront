import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Reports from "./pages/Reports-page";


function App() {
 

  return (
  
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/report" element={<Reports />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );


}

export default App
