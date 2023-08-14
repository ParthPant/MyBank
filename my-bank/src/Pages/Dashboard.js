import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import CustomerGrid from "../Components/CustomerGrid";

function DashBoard() {
  return (
    <>
      <Navbar />
      <div class="min-h-screen my-8 flex r justify-center">
        <ul class="menu bg-base-200 w-3/6 h-48 mt-1 rounded-box font-semibold flex justify-center text-xl place-content-center">
          <li>
            <a href="./customer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
              New Customer
            </a>
          </li>
          <li>
            <a href="./update-customer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Update Customer Details
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10, w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Customer Details
            </a>
          </li>
        </ul>
      </div>
      <CustomerGrid />
    </>
  );
}

export default DashBoard;
