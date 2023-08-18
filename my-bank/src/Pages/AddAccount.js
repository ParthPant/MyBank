import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";

// const navigate = useNavigate();h

function AddAccount() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [post, setPost] = React.useState(null);
  const [detail, setDetail] = React.useState(null);

  const detailURL = "http://localhost:5296/api/customers/" + id;

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
  console.log("Check " + formData.acctype);

  React.useEffect(() => {
    axios
      .get(detailURL, {
        params: {
          includeAccounts: false,
        },
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setDetail(response.data);
      });
  }, []);

  if (!detail) return null;
  console.log(detail);

  function createPost() {
    axios
      .post(
        baseURL + `customers/${id}/accounts`,
        {
          accountType: formData.acctype,
          balance: formData.balance,
        },
        {
          headers: configheaders,
        },
      )
      .then((response) => {
        console.log(response);
        setPost(response.data);
        // navigate("/http://localhost:3000/dashboard");
      });
  }

  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 class="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
            Add Account
          </h1>
          <form
            onSubmit={handleSubmit}
            className="m-auto flex flex-col gap-4 form-control w-full max-w-xs"
          >
            <div>
              <label for="username" class="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={detail["name"]}
                readOnly={true}
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
                value={detail["email"]}
                readOnly={true}
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
                value={detail["contact"]}
                readOnly={true}
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>

            <div>
              <label for="acctype" class="label">
                <span className="label-text">Account Type</span>
              </label>
              <input
                type="text"
                id="acctype"
                name="acctype"
                value={formData.acctype || ""}
                onChange={handleChange}
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div>
              <label for="balance" class="label">
                <span className="label-text">Balance</span>
              </label>
              <input
                type="text"
                id="balance"
                name="balance"
                value={formData.balance || ""}
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
              Add Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddAccount;
