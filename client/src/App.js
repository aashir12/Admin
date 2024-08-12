import React, { useState } from "react";
import Header from "./Components/header";
import axios from "axios";
import Sidebar from "./Components/sidebar";
import Home from "./Components/home";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="cover">
        <Sidebar />
        <div className="coverrft">
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={'this is a new post'} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
