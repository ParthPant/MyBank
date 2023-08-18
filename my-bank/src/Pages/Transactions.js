import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";

function Transactions() {
  const { accNo } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");
  const [post, setPost] = React.useState(null);

  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(formData);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/transactions/' + formData);
  }

  useEffect(() => {
    // if (accNo !== undefined) {
      axios
        .get(baseURL + "transactions/" + accNo, configheaders)
        .then((response) => {
          setPost(response.data);
          console.log(response.data);
        })
        .catch(err => console.log(err));
    // }
  }, [accNo]);

  if (post) {
    console.log(post);
    post.map((transactions, index) => {
      console.log(transactions);
    });
  }

  return (
    <>
      <div class="pt-10 pb-10 backg">
        <div class="min-h-screen flex items-center justify-center">
          <div class="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="overflow-x-auto">
              {(accNo === undefined) ? <div className="flex justify-between"> <input
                type="text"
                id="name"
                name="name"
                value={formData || ""}
                placeholder="Account Number"
                onChange={handleChange}
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
                <button className="btn btn-primary ml-5" onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </button>
              </div> :

                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Account No</th>
                      <th>Transaction Type</th>
                      <th>Amount</th>
                      {/* <th></th> */}
                      {/* <th></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {post && post.map((transactions, index) => {
                      // {console.log(account.accType)}
                      return (
                        <tr>
                          <th>{index}</th>
                          <td>{accNo}</td>
                          <td>{transactions.transactionType}</td>
                          <td>{transactions.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
