import { React, useState, useEffect } from "react";
import axios from "axios";
import { baseURL, configheaders } from "../utils.js";
import { apiKey } from "../apiUtils.js"

export default function CurrencyConversion() {
  const [formData, setFormData] = useState({currency: "INR"});
  const [balance, setBalance] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  const getAmount = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .get(baseURL + "balance/" + formData.accNo, configheaders)
      .then((res) => {
        setBalance(res.data * exchangeRates[formData.currency]);
        console.log(balance);
      })
      .catch((err) => {
        if (err.response.status == 404) {
          alert("The account does not exist");
        }
        console.log(err);
        console.log(err.response);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    const reqUrl =  "https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/INR";
    console.log(reqUrl);
    axios.get(
       reqUrl
    ).then((res) => {setExchangeRates(res.data.conversion_rates)})
    .catch((err) => {console.log(err.response.data)});}, [])

  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
          Currency Conversion
        </h1>
        <div className="join">
          <input
            type="number"
            className="join-item grow input input-bordered"
            placeholder="Enter Account Number"
            name="accNo"
            value={formData.accNo}
            onChange={handleChange}
          />
          <input
            type="text"
            className="join-item flex-none w-20 input input-bordered"
            placeholder="Currenry"
            name="currency"
            heading="Currency"
            value={formData.currency}
            onChange={handleChange}
          />
          <button className="join-item btn btn-primary" onClick={getAmount}>
            View Amount
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
                setFormData(null);
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
