import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseURL, configheaders } from "../utils.js";
import axios from "axios";

function Cheques({ transactions, balance }) {
  let navigate = useNavigate();
  const [permit, setPermit] = React.useState(null);
  const handleCheque = (event, accNo, id) => {
    // event.preventDefault();
    console.log("Data"+accNo);
    axios
      .put(baseURL + "transactions/" + accNo + "/approve/" + id,
      {
        approved : true
      }, configheaders)
      .then((response) => {
        setPermit(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("This account does not exist!");
        setPermit(null);
      });
      navigate(`/transactions/${accNo}`, {replace:true})
  };
  if(permit)
    console.log(permit);
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
              
              <th>Amount</th>
              <th>Status</th>
              <th>Time</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction, index) => {
                // {console.log(account.accType)}
                if(transaction.transactionType == "Cheque")
                return (
                  <tr>
                    <th>{transaction.id}</th>
                    <td>{transaction.accNo}</td>
                    
                    <td>{transaction.amount}</td>
                    <td>{transaction.approved? ("Approved") : (<button onClick={event=> handleCheque(event, transaction.accNo, transaction.id)} className="btn btn-primary btn-xs">Pending</button>)}</td>
                    <td>{transaction.time}</td>

                  </tr>
                );
              })}
              {console.log("transaction" + transactions)}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ChequeEnquiry() {
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
              Cheque
            </h1>
            <div className="overflow-x-auto">
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
              {console.log(post)}
              {post && (
                
                  <Cheques
                    transactions={post}
                    balance={post.balance}
                  />
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ChequeEnquiry;
  