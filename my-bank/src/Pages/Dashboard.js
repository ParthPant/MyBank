import React from "react";
import CustomerGrid from "../Components/CustomerGrid";
import Sidebar from "../Components/Sidebar";

function DashBoard() {
  return (
    <div>
      <div className="flex-column items-center text-center">
        <CustomerGrid />
      </div>
    </div>
  );
}

export default DashBoard;
