import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js"

function AddCustomer() {
  const [formData, setFormData] = useState({});
  const [post, setPost] = React.useState(null);
  const { mode } = useParams();
  console.log(mode);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    alert(JSON.stringify(formData));
  };

  function createPost() {
    axios
      .post(
        baseURL + "customers/",
        {
          name: formData.username,
          email: formData.email,
          contact: formData.contact,
          cardNumber: formData.cardNumber,
          pinNo: formData.pinNo,
          city: formData.city,
          accNo: formData.accNo,
        },
        {
          headers: configheaders,
        },
      )
      .then((response) => {
        console.log(response);
        setPost(response.data);
      });
  }

  return (
    <>
      <Navbar />
      <div class="mt-10 mb-10">
        <div class="min-h-screen flex items-center justify-center">
          <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
              {mode === "editCust" ? <>Update</> : <>New</>} Customer
            </h1>
            <form onSubmit={handleSubmit}>
              <div class="mb-4">
                <label for="username" class="block mb-2 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="contact" class="block mb-2 text-sm text-gray-600">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="cardNumber"
                  class="block mb-2 text-sm text-gray-600"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="pinNo" class="block mb-2 text-sm text-gray-600">
                  Pin Number
                </label>
                <input
                  type="text"
                  id="pinNo"
                  name="pinNo"
                  value={formData.pinNo || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="city" class="block mb-2 text-sm text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="accNo" class="block mb-2 text-sm text-gray-600">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accNo"
                  name="accNo"
                  value={formData.accNo || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={createPost}
                class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
