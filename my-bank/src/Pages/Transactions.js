import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";
import TransactionTable from "../Components/TransactionTable.js";

function Transactions() {
  const { accNo } = useParams();
  const [formData, setFormData] = useState("");
  const [post, setPost] = React.useState(null);

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(formData);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .get(baseURL + "transactions/" + formData, configheaders)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("This account does not exist!");
        setPost(null);
      });
    // navigate("/transactions/" + formData);
  };

  useEffect(() => {
    if (accNo !== undefined) {
      axios
        .get(baseURL + "transactions/" + accNo, configheaders)
        .then((response) => {
          setPost(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [accNo]);

  return (
    <>
      <div class="min-h-full flex items-center justify-center">
        <div class="m-10 min-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
            Transactions
          </h1>
          <div className="overflow-x-auto text-center">
            {accNo === undefined && (
              <div className="join justify-between">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData || ""}
                  placeholder="Account Number"
                  onChange={handleChange}
                  className="join-item input input-bordered w-full max-w-xs"
                  required
                />
                <button
                  className="join-item btn btn-primary"
                  onClick={handleClick}
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            )}
            {post && <TransactionTable post={post} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
