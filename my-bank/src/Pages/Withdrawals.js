import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, configheaders } from "../utils.js";

export default function Withdrawals() {
  const {accNum} = useParams();
  const [formData, setFormData] = useState({accNo: accNum});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseURL + "transactions/" + accNum, formData, configheaders)
      .then((res) => {
        alert("Succesfully made transaction");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    if(name === "transactionType")
        console.log(formData.transactionType);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
          Perform Transaction
        </h1>
        <form
          onSubmin={handleSubmit}
          className="m-auto flex flex-col gap-4 content-center items-center justify-center text-left form-control w-full max-w-xs"
        >
          <div>
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <input
              required
              disabled
              onChange={handleChange}
              name="accNo"
              value={formData.accNo}
              type="number"
              placeholder="Account Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Transaction Type</span>
            </label>
            <select 
            required 
            name="transactionType" 
            id="transactionType" 
            value={formData.transactionType} 
            className="select select-bordered w-full min-w-lg" onChange={handleChange}>
                <option value="" disabled selected hidden>Select Type</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
                <option value="Cheque">Cheque</option>
            </select>
        </div>

        <div>
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              required
              onChange={handleChange}
              name="amount"
              value={formData.amount}
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
