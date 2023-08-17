import React from "react";
import Routes from "../Routes/index.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";
import {Outlet} from "react-router-dom";

const Layout = ({children}) => {
    return(
		<>
			<Navbar/>
			<Sidebar />
			<Outlet/>
			<Footer/>
		</>
	);
}

export default Layout;
