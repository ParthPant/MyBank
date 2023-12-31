import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";
import "./background.css";
import { ErrorAlert, SuccessAlert, InfoAlert } from "../Components/Alert.js";

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
    console.log(name);
    console.log(value);
    if(name == "accType")
        console.log(formData.acctype)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    // alert(JSON.stringify(formData));
  };
  console.log("Check " + formData.accType);

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
          accountType: formData.accType,
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
              <label for="accType" class="label">
                <span className="label-text">Account Type</span>
              </label>
              <select 
            required 
            name="accType" 
            id="accType" 
            value={formData.acctype}
            className="select select-bordered w-full min-w-lg" onChange={handleChange}>
                <option value="" disabled selected hidden>Select Type</option>
                <option value="Saving">Saving</option>
                <option value="Salary">Salary</option>
                <option value="Fixed Deposit">Fixed Deposit</option>
                <option value="Recurring Deposit">Recurring Deposit</option>
            </select>
              
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
                placeholder="Balance"
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div>
              <label for="pinNo" class="label">
                <span className="label-text">Pin Number</span>
              </label>
              <input
                type="text"
                id="pinNo"
                name="pinNo"
                placeholder="Pin No."
                value={formData.pinNo || ""}
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
            {(post)?(
              <>
              <SuccessAlert message={"Account"} path={`/view-account/${post.custId}`}/>
              
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

export default AddAccount;
