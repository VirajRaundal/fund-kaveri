import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import WhatPage from "./pages/WhatPage";
import WhyPage from "./pages/WhyPage";
import ContributePage from "./pages/ContributePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WhatPage />} />
          <Route path="/what" element={<WhatPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/contribute" element={<ContributePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;