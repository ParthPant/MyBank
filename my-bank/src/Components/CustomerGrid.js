import React from "react";
import CustomerCard from "./CustomerCard";
import { Link } from "react-router-dom";
import axios from "axios";

function CustomerGrid() {
  const [post, setPost] = React.useState(null);
  const [formData, setFormData] = React.useState(null);

  const baseURL = "http://localhost:5296/api/customers/";

  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {});
  }, []);

  if (!post) return null;
  console.log(post);
  let customers = [];
  for (let i = 0; i < post.length; ++i) {
    let data = post[i].name.toLowerCase();
    let val = formData;
    if (formData !== null) val = formData.toLowerCase();
    if (data.includes(val) || val === null)
      customers.push({ customerID: post[i].custId, name: post[i].name });
  }
  return (
    <>
      <div className="join m-6 items-center justify-center flex-column">
        <input
          type="text"
          className="join-item input input-bordered w-full max-w-xs"
          placeholder="Search"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <Link to="/customer/add">
          <button title="New Customer" className="join-item btn btn-primary">
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
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div class="grid grid-cols-3 grid-auto-cols gap-10 p-10 place-content-center max-w-screen">
        {customers.map((customer, index) => {
          return (
            <CustomerCard
              key={index}
              customerID={customer.customerID}
              customerName={customer.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default CustomerGrid;
