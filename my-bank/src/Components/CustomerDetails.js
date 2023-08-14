import React from "react";

function CustomerRow(props) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              {props.customerID}
            </th>
            <th scope="col" class="px-20 py-3 col-span-6">
              {props.customerName}
            </th>
            <th scope="col" class="py-3">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Details
              </button>
            </th>
            <th scope="col" class="py-3">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Delete
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    // <div className="card w-64 bg-neutral text-neutral-content">
    //     <div className="card-body items-center text-center">
    //         <h2 className="card-title">{props.customerID}</h2>
    //         <p>{props.customerName}</p>
    //         <div className="card-actions justify-end">
    //         <button className="btn btn-primary">View</button>
    //         <button className="btn btn-ghost">Delete</button>
    //         </div>
    //     </div>
  );
}

export default CustomerRow;
