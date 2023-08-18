import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider.js";

const Layout = ({ children }) => {
  const { token } = useAuth();
  return (
    <>
      <Navbar />
      {token ? (
        <Sidebar>
          <Outlet />
        </Sidebar>
      ) : (
        <>
          <Outlet />
        </>
      )}

      <Footer />
    </>
  );
};

export default Layout;
