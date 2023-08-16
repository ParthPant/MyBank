import React, {useState} from "react";
import {Link} from "react-router-dom";
import './CustomerCard.css'

function CustomerCard(props) {

  const [isToggle, setisToggle] = useState(false);
  var url = `https://api.dicebear.com/6.x/initials/svg?seed=${props.customerName}`

  function FrontOfCard() {
    return (
      <div onClick={()=>setisToggle(!isToggle)} style={!isToggle ? {display:'block'} : {display: 'none'}} className="bg-black card-front rounded glass transition-all duration-100 delay-200 z-20 hover:display-none">
        <figure><img src={url} alt="Person smiling" /></figure>
        <div className="card-body">
          <h2 className="card-title">{props.customerID + ": " + props.customerName}</h2>
        </div>
      </div>
    );
  }

  function BackOfCard() {
    return (
      <div onClick={()=>setisToggle(!isToggle)} style={!isToggle ? {display:'none'} : {display: 'flex'}} className="rounded glass absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back hover:opacity-100">
        <div className="grid grid-cols-2 gap-4">
          
          <Link to={"/customer-details/" + props.customerID}>
            <button className="btn bg-purple-600 rounded-none hover:cursor-pointer">View</button>
          </Link>
          <button className="btn btn-ghost hover:cursor-pointer">Delete</button>
        </div>
        <Link to={"/add-account/" + props.customerID}>
            <button className="btn bg-purple-600 rounded-none hover:cursor-pointer">Add</button>
            </Link>
      </div>
    );
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
  <div className="shrink customer-card card w-96 glass shadow-xl transition-all duration-700">
      <FrontOfCard />
      <BackOfCard />
    </div>
  );
}

export default CustomerCard;
