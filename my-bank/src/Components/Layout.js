import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";
import { Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider.js";
import "../Pages/background.css";

const Layout = ({ children }) => {
  const { token } = useAuth();
  return (
    <>
      <Navbar />
      <div className="h-screen backg">
        {token ? (
          <Sidebar>
            <Outlet />
          </Sidebar>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
