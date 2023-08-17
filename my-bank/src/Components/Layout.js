import React from "react";
import Routes from "../Routes/index.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar.js";
import {Outlet} from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider.js";


const Layout = ({children}) => {
	const{token} = useAuth();
    return(
		<>
			<Navbar/>
			<div className="flex flex initial">
			{ token ? <Sidebar />:<></>}
			<Outlet/>
			</div>
			<Footer/>
		</>
	);
}

export default Layout;
