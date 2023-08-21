import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../utils";
import axios from "axios";

function CustomerCard(props) {
  const [isToggle, setisToggle] = useState(false);
  var url = `https://api.dicebear.com/6.x/initials/svg?seed=${props.customerName}`;
  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  function FrontOfCard() {
    return (
      <div
        onClick={() => setisToggle(!isToggle)}
        style={
          !isToggle
            ? {
                display: "block",
                // borderRadius: "20px",
                // border: "10px black",
                // padding: "20px",
                // height: "200px",
              }
            : { visibility: "hidden" }
        }
        className="relative group transition-all duration-100 delay-200 z-20 hover:cursor-pointer"
      >
        <figure className="mt-4">
          <img
            src={url}
            alt="User Profile"
            style={{ borderRadius: "20em", height: "100px" }}
          />
        </figure>
        <div className="card-body flex items-center justify-start">
          <h2 className="card-title text-center">
            {props.customerID + ": " + props.customerName}
          </h2>
        </div>
        <div className="absolute right-0 top-0 flex-col hidden gap-2 p-4 group-hover:flex">
          <Link to={"/customer-details/" + props.customerID}>
            <button
              title="Details"
              className="btn btn-circle btn-sm btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
          <Link to={"/add-account/" + props.customerID}>
            <button
              title="Add Account"
              className="btn btn-circle btn-sm btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
          <button
            title="Delete"
            onClick={deleteCustomer}
            className="btn btn-circle btn-sm btn-error"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  function BackOfCard() {
    return (
      <div
        onClick={() => setisToggle(!isToggle)}
        style={
          !isToggle
            ? { visibility: "hidden" }
            : { display: "flex", height: "200px" }
        }
        className="absolute inset-0 w-full h-full flex justify-center items-center transition-all z-10 hover:opacity-100"
      >
        <div className="flex gap-4">
          <Link to={"/customer-details/" + props.customerID}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <Link to={"/add-account/" + props.customerID}>
            <button className="btn btn-primary">Add Account</button>
          </Link>
          <button onClick={deleteCustomer} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    );
  }

  function deleteCustomer() {
    axios
      .delete(baseURL + "customers/" + props.customerID, {
        headers: configheaders,
      })
      .then((response) => {
        console.log(response);
        window.location.reload(true);
      });
  }

  return (
    // <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    //   <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    //     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //       <tr>
    //         <th scope="col" class="px-6 py-3">
    //           {props.customerID}
    //         </th>
    //         <th scope="col" class="px-20 py-3 col-span-6">
    //           {props.customerName}
    //         </th>
    //         <th scope="col" class="py-3">
    //           <button
    //             type="button"
    //             class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
    //           >
    //             Details
    //           </button>
    //         </th>
    //         <th scope="col" class="py-3">
    //           <button
    //             type="button"
    //             class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
    //           >
    //             Delete
    //           </button>
    //         </th>
    //       </tr>
    //     </thead>
    //   </table>
    // </div>
    // <div className="card w-64 bg-neutral text-neutral-content">
    //     <div className="card-body items-center text-center">
    //         <h2 className="card-title">{props.customerID}</h2>
    //         <p>{props.customerName}</p>
    //         <div className="card-actions justify-end">
    //         <button className="btn btn-primary">View</button>
    //         <button className="btn btn-ghost">Delete</button>
    //         </div>
    //     </div>
    //   <div className="card group/item hover:bg-slate-100 w-96 glass shadow-xl">
    //   <figure><img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Shoes" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{props.customerID + ": " + props.customerName}</h2>
    //     {/* <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div> */}
    //   </div>
    // </div>
    <div className="backdrop-blur-lg bg-white/5 card w-96 shadow-xl transition-all duration-700">
      <FrontOfCard />
      <BackOfCard />
    </div>
  );
}

export default CustomerCard;
