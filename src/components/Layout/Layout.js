import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default Layout;
