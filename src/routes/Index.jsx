import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Container/Home/Home";
import Login from "../Components/userLogin/Login";
import LazyLoad from "react-lazyload";
import Storeavl from "../Container/Store/Storeavl";
import Navbar from "../common/Navbar";
import Download from "../common/Download";
import Footer from "../common/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LazyLoad height={200} once>
                <Login />
              </LazyLoad>
            }
          />
          <Route path="/nearstore" element={<Storeavl />} />
          
        </Routes>
      </Router>
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
