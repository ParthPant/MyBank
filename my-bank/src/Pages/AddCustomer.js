import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";

function AddCustomer() {
  const [formData, setFormData] = useState({});
  const [post, setPost] = React.useState(null);
  const { mode } = useParams();
  const {id} = useParams();
  // console.log(mode);
  // console.log(id);

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
    if(mode === "add"){
      axios
        .post(
          baseURL + "customers/",
          {
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
            cardNo: formData.cardNo,
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
        })
    }
    else {
      axios.put(
        baseURL + "customers/" + id, 
        {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          cardNo: formData.cardNo,
          pinNo: formData.pinNo,
          city: formData.city,
          
        },
        {
          headers: configheaders
        },
      ).then((response) => {  
        console.log(response);
        setPost(response.data);}
      )
    }
  }

   
  React.useEffect(() => {
    if(mode === "edit"){
      let requestURL = baseURL + "customers/" + id;
      axios.get(requestURL, {
        headers: {
          "Authorization": "Bearer" + " " + localStorage.getItem("token")
        }}).then((response) => {
        setFormData(response.data);
      });
    }  
  }, []);

  return (
    <>
      <Navbar />
      <div class="pt-10 pb-10 glass">
        <div class="min-h-screen flex items-center justify-center">
          <div class="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
            <h1 class="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
              {mode === "edit" ? <>Update</> : <>New</>} Customer
            </h1>
            <form onSubmit={handleSubmit}>
              <div class="mb-4">
                <label for="name" class="block mb-2 text-sm text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm text-gray-300">
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
                <label for="contact" class="block mb-2 text-sm text-gray-300">
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
                  for="cardNo"
                  class="block mb-2 text-sm text-gray-300"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNo"
                  name="cardNo"
                  value={formData.cardNo || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="pinNo" class="block mb-2 text-sm text-gray-300">
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
                <label for="city" class="block mb-2 text-sm text-gray-300">
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
              
              <button
                type="submit"
                onClick={createPost}
                className="font-helvetica btn btn-primary bg-purple-600 mx-auto block mb-2 rounded-none hover:border-black"
              >
                {mode==="add" ? "Register": "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
