import React from "react";
import { Link } from "react-router-dom";
import '../Pages/background.css'

function Sidebar({children}) {
  return (
    // <!-- Sidenav -->
    <>
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="min-w-full backg">
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/customer/add">Add Customers</Link>
            </li>
            <li>
              <Link to="/dashboard">View Customers</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
