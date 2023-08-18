import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";

function Transactions() {
  const { accNo } = useParams();
  const [formData, setFormData] = useState({});
  const [post, setPost] = React.useState(null);

  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  React.useEffect(() => {
    axios
      .get(baseURL + "transactions/" + accNo, {
        params: {
          includeAccounts: false,
        },
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;
  console.log(post);
  post.map((transactions, index) => {
    console.log(transactions);
  });

  return (
    <>
      <div class="pt-10 pb-10 backg">
        <div class="min-h-screen flex items-center justify-center">
          <div class="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Account No</th>
                    <th>Transaction Type</th>
                    <th>Amounnt</th>
                    {/* <th></th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                <tbody>
                  {post.map((transactions, index) => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
