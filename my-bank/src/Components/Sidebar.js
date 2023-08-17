import React from "react";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    // <!-- Sidenav -->
    <>
      <div class="rounded-lg shadow bg-base-200 h-52 justify-items-center">
        {/* <input id="my-drawer" type="checkbox" class="drawer-toggle"></input>
  <div class="flex drawer-content">
    <label for="my-drawer" class="drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</label>
  </div>  */}
  {/* <div class="drawer-side"> */}
    {/* <label for="my-drawer" class="drawer-overlay"></label>  */}
    <ul class="h-full menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <Link to="/customer/add">
      <li>
        <a>Add Customers</a>
      </li> 
    </Link>
    <Link to="/dashboard">
      <li>
        <a>View Customers</a>
      </li>
    </Link>
      <li>
        <a>Transactions</a>
      </li>
    <Link to="/">
      <li>
        <a>Log out</a>
      </li>
    </Link>
    </ul>
  </div>

</>
    );

}

export default Sidebar;
