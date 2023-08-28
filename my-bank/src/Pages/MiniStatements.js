import { useState } from "react";
import { baseURL, configheaders } from "../utils.js";
import axios from "axios";

function Statement({ transactions, balance }) {
  return (
    <>
      <div className="text-m text-center text-white-500 mt-8 mb-6">
        Balance : <span className="font-bold text-xl underline">{balance}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Account No</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction, index) => {
                // {console.log(account.accType)}
                return (
                  <tr>
                    <th>{index}</th>
                    <td>{transaction.accNo}</td>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.time}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function MiniStatement() {
  const [accNo, setAccNo] = useState();
  const [statement, setStatement] = useState();

  const getStatement = () => {
    axios
      .get(baseURL + "statement/" + accNo, configheaders)
      .then((res) => {
        setStatement(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
        setAccNo("");
        setStatement(null);
      });
  };

  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <div class="m-10 min-w-md p-6 text-center bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
            Mini Statement
          </h1>
          <div className="join text-center">
            <input
              type="number"
              className="join-item input input-bordered w-full max-w-xs"
              placeholder="Enter Account Number"
              value={accNo}
              onChange={(e) => setAccNo(e.target.value)}
            />
            <button
              className="join-item btn btn-primary"
              onClick={() => getStatement()}
            >
              Get Statement
            </button>
          </div>
          {statement && (
            <Statement
              transactions={statement.transactions}
              balance={statement.balance}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default MiniStatement;
