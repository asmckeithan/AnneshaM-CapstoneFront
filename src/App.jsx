import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Reports from "./pages/Reports-page";
import News from "./pages/News-page";
import Updates from "./pages/Update-page";


function App() {
 

  return (
  
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/report" element={<Reports />} />
        <Route path="/news" element={<News />} />
        <Route path="/update" element={<Updates />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );


}

export default App
