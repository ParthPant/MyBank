import React from "react";

export default function TransactionTable(props) {
  console.log(props);
  return (
    <table className="table table-zebra">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Account No</th>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Time</th>
          {/* <th></th> */}
          {/* <th></th> */}
        </tr>
      </thead>
      <tbody>
        {props &&
          props.post.map((transactions, index) => {
            {
              console.log(transactions);
            }
            if(transactions.approved)
            return (
              <tr>
                <th>{index}</th>
                <td>{transactions.accNo}</td>
                <td>{transactions.transactionType}</td>
                <td>{transactions.amount}</td>
                <td>{transactions.time}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
