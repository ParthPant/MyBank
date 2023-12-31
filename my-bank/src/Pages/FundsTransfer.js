import { useState } from "react";
import axios from "axios";
import { baseURL, configheaders } from "../utils.js";

const FundsTransfer = () => {
  const [formData, setFormData] = useState({});

  const checkBalance = () => {
    axios
      .get(baseURL + "balance/" + formData.accNoFrom, configheaders)
      .then((res) => {
        alert("The Balance for this account is :" +res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("The account does not exist");
        }
        console.log(err.response);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseURL + "fundtransfer/", formData, configheaders)
      .then((res) => {
        alert("Succesfully made transaction");
      })
      .catch((err) => {
        alert(err.response.data);
      });
      formData.transactionAmount = 0;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    console.log(name +" : " + value)
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
          Funds Transfer
        </h1>
        <form
          onSubmin={handleSubmit}
          className="m-auto flex flex-col gap-4 content-center items-center justify-center form-control w-full max-w-xs"
        >
          <div>
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <input
              required
              onChange={handleChange}
              name="accNoFrom"
              value={formData.accNoFrom}
              type="number"
              placeholder="Account No. of Sender"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <input
              required
              onChange={handleChange}
              name="accNoTo"
              value={formData.accNoTo}
              type="number"
              placeholder="Account No. of Receiver"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              required
              onChange={handleChange}
              name="transactionAmount"
              value={formData.transactionAmount}
              type="number"
              placeholder="Transaction Amount"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button onClick={checkBalance} className="btn btn-primary">
            Check Balance
          </button>

          <button onClick={handleSubmit} className="btn btn-primary">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundsTransfer;
