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
			{token ? <div className="flex flex initial"><Sidebar /><Outlet /></div> : <Outlet />}
			
			<Footer/>
		</>
	);
}

export default Layout;
