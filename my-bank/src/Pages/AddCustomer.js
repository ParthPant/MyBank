import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";
import { ErrorAlert, SuccessAlert, InfoAlert } from "../Components/Alert.js";

function AddCustomer() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [post, setPost] = React.useState(null);
  const { mode } = useParams();
  const { id } = useParams();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    // alert(JSON.stringify(formData));
  };

  function createPost() {
    if (mode === "add") {
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
          navigate(`/customer-details/${response.data.custId}`)
        }).catch((err) => {
          // <ErrorAlert path={"dashboard"}></ErrorAlert>
          console.log(err)
        });
    } else {
      axios
        .put(
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
            headers: configheaders,
          },
        )
        .then((response) => {
          setPost(response.data);
          navigate(`/customer-details/${id}`, {replace: true})
        })
        .catch((err) => {
          <ErrorAlert path={"dashboard"}></ErrorAlert>
          console.log(err)
          // navigate("/", {replace: true})
        });
    }
  }

  React.useEffect(() => {
    if (mode === "edit") {
      let requestURL = baseURL + "customers/" + id;
      axios
        .get(requestURL, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setFormData(response.data);
        });
    }
  }, []);

  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 class="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
            {mode === "edit" ? <>Update</> : <>New</>} Customer
          </h1>
          <form
            onSubmit={handleSubmit}
            className="m-auto flex flex-col gap-4 form-control w-full max-w-xs"
          >
            <div>
              <label for="name" class="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name || ""}
                onChange={handleChange}
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div>
              <label for="email" class="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email || ""}
                onChange={handleChange}
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div>
              <label for="contact" class="label">
                <span className="label-text">Contact</span>
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Phone No."
                value={formData.contact || ""}
                onChange={handleChange}
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div>
              <label for="city" class="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city || ""}
                onChange={handleChange}
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>

            <button
              type="submit"
              onClick={createPost}
              className="btn btn-primary"
            >
              {mode === "add" ? "Register" : "Update"}
            </button>
            {(post)?(
              <>
              <SuccessAlert message={formData.name} path={`/customer-details/${post.custId}`}/>

              </>
            ):(
              <>

              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
