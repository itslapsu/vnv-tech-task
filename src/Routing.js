import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Routing = () => {
  return (
    <Routes>
      <Route path="vnv-tech-task/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Routing;
