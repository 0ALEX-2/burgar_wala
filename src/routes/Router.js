// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

export const Routerr = () => {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
      <Route path="/services" component={<Services />} />
      <Route path="/contact" component={<Contact />} />
    </Routes>
  );
};
