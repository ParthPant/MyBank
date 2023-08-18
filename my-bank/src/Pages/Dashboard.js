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
          <button className="m-10 btn bg-purple-600 btn-primary rounded-none">
            New Customer
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
