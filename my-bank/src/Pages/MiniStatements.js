import React, { useState } from "react";

function Statement({transactions, balance}) {
  return (
    <>
      <div className="text-m text-center text-white-500 mt-8 mb-6">
        Balance : <span className="font-bold text-xl underline">{balance}</span>
      </div>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Account No</th>
            <th>Transaction Type</th>
            <th>Amount</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  )
}

const dummy = {
  transactions: [
    {
      accNo: 1,
      transactionType: "credit",
      amount: 2334
    }
  ],
  balance: 2343
}

function MiniStatement() {
  const [accNo, setAccNo] = useState();
  const [statement, setStatement] = useState();

  const getStatement = () => {
    setStatement(dummy)
  }

  return (
    <>
      <div class="pt-10 pb-10">
        <div class="min-h-screen flex items-center justify-center">
          <div class="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
              Mini Statement
            </h1>
            <div className="flex gap-4 m-6">
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
                placeholder="Enter Account Number"
                value={accNo}
                onChange={(e) => setAccNo(e.target.value)}
              />
              <button className="btn btn-primary" onClick={() => getStatement()}>
                Get Statement
              </button>
            </div>
            {statement && <Statement transactions={statement.transactions} balance={statement.balance}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniStatement;
