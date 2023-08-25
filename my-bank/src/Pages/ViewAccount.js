import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";

function ViewAccount() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [post, setPost] = React.useState(null);

  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  React.useEffect(() => {
    axios
      .get(baseURL + "customers/" + id + "/accounts", {
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
  post.map((account, index) => {
    console.log(account);
  });

  function deleteAccount(accNo) {
    axios
      .delete(baseURL + "customers/" + id + "/accounts/" + accNo, {
        headers: configheaders,
      })
      .then((response) => {
        console.log(response);
        // window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        console.log(err.response.headers.statsu);
      });
  }

  return (
    <>
      <div class="min-h-full flex items-center justify-center">
        <div class="w-[70%] p-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Account No</th>
                  <th>Account Type</th>
                  <th>Balance</th>
                  <th>Card Number</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {post.map((account, index) => {
                  // {console.log(account.accType)}
                  return (
                    <tr>
                      <th>{index}</th>
                      <td>{account.accNo}</td>
                      <td>{account.accountType}</td>
                      <td>{account.balance}</td>
                      <td>{account.cardNo}</td>
                      <td>
                        <Link to={"/transactions/" + account.accNo}>
                          <button className="btn btn-primary btn-xs">
                            Transactions
                          </button>
                        </Link>
                      </td>

                      <td>
                        <Link to={"/withdrawals/" + account.accNo}>
                          <button className="btn btn-primary btn-xs">
                            Deposit/Withdraw
                          </button>
                        </Link>
                      </td>

                      <td>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={(e) => deleteAccount(account.accNo)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAccount;
