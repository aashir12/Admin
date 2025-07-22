import React, { useState } from "react";
import Header from "./Components/header";
import Sidebar from "./Components/sidebar";
import Login from "./pages/login";
import Home from "./pages/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AfterLog from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="cover">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<AfterLog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
