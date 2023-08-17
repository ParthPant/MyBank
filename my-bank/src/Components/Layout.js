import React from "react";
import Routes from "../Routes/index.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import {Outlet} from "react-router-dom";

const Layout = ({children}) => {
    return(
		<>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</>
	);
}

export default Layout;
