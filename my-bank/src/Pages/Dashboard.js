import React from "react";
import { Link } from "react-router-dom";
import CustomerGrid from "../Components/CustomerGrid";
import Sidebar from "../Components/Sidebar";

function DashBoard() {
  return (
    <div>
      <div className="flex-column items-center text-center">
        <CustomerGrid />
        <Link to="/customer/add">
          <button className="btn btn-primary">New Customer</button>
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
