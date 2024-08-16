import React, { useState } from "react";
import Header from "../Components/header";
import Sidebar from "../Components/sidebar";
import Home from "./home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PostForm from "./createPost";


const AfterLog = () => {
  return (
    <div className="cover">
      <Sidebar />
      <div className="coverrft">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-post" element={<PostForm />} />
        </Routes>
      </div>
    </div>
  );
};
export default AfterLog;
