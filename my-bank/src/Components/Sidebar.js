import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ children }) {
  return (
    // <!-- Sidenav -->
    <>
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="absolute z-10 top-5 left-5 btn btn-ghost btn-circle drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </label>
          <div className="min-w-full min-h-full">{children}</div>
        </div>
        <div className="drawer-side z-20">
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
              <Link to="/balance-enquiry">Balance Enquiry</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
            <li>
              <Link to="/cheque">Cheques</Link>
            </li>
            <li>
              <Link to="/mini-statement">Mini Statement</Link>
            </li>
            <li>
              <Link to="/funds-transfer">Funds Transfer</Link>
            </li>
            <li>
              <Link to="/pin-change">Pin Change</Link>
            </li>
            <li>
              <Link to="/currency-conversion">Currency Conversion</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
