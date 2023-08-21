import { React, useState } from "react";
import axios from "axios";
import { baseURL, configheaders } from "../utils.js";

const BalanceEnquiry = () => {
  const [search, setSearch] = useState("");
  const [balance, setBalance] = useState(null);

  const getBalance = () => {
    axios
      .get(baseURL + "balance/" + search, configheaders)
      .then((res) => {
        setBalance(res.data);
      })
      .catch((err) => {
        if (err.response.status == 404) {
          alert("The account does not exist");
        }
        console.log(err.response);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
          Balance Enquiry
        </h1>
        <div className="flex gap-4 m-6">
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter Account Number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => getBalance()}>
            Get Balance
          </button>
        </div>
        {balance ? (
          <div className="flex gap-4 m-6">
            <label>Current Balance: </label>
            <label>{balance}</label>
            <button
              className="btn btn-xs btn-error ml-auto"
              onClick={() => {
                setBalance(null);
                setSearch("");
              }}
            >
              clear
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default BalanceEnquiry;
