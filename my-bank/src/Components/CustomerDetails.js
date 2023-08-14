import React from 'react';

function CustomerDetails(props) {
  return (
    <div className="card w-64 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{props.customerID}</h2>
            <p>{props.customerName}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
            <button className="btn btn-ghost">Delete</button>
            </div>
        </div>
    </div>
  );
}

export default CustomerDetails;