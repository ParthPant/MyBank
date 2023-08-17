import React, { useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { configheaders, baseURL } from "../utils.js";

// const navigate = useNavigate();h

function AddAccount() {
  const {id} = useParams();
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
  console.log("Check " + formData.acctype)

  React.useEffect(() => {
    axios.get(detailURL, {
       params: {
           includeAccounts: false
       },
       headers: {
        "Authorization": "Bearer" + " " + localStorage.getItem("token")
    }}).then((response) => {
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
          balance: formData.balance
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
      <div class="pt-10 pb-10 glass">
        <div class="min-h-screen flex items-center justify-center">
          <div class="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">

            <form onSubmit={handleSubmit}>
               <div class="mb-4">
                <label for="username" class="block mb-2 text-sm text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={detail["name"]}
                  readOnly={true}
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
                  value={detail["email"]}
                  readOnly={true}
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
                  value={detail["contact"]}
                  readOnly={true}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>




              <div class="mb-4">
                <label for="acctype" class="block mb-2 text-sm text-gray-300">
                  Account Type
                </label>
                <input
                  type="text"
                  id="acctype"
                  name="acctype"
                  value={formData.acctype || ""}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              {/* <div class="mb-4">
                <label for="acctype" class="block mb-2 text-sm text-gray-300">
                  Account Type
                </label>
                <select
                  type="text"
                  id="acctype"
                  name="acctype"


                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                >
                <option value={formData.acctype || ""} onChange={handleChange}>Saving</option>
                <option value={formData.acctype || ""} onChange={handleChange}>Salary</option>
                <option value={formData.acctype || ""} onChange={handleChange}>Fixed Deposit</option>
                <option value={formData.acctype || ""} onChange={handleChange}>Recurring Deposit</option>
                </select>
              </div> */}

              <div class="mb-4">
                <label for="balance" class="block mb-2 text-sm text-gray-300">
                  Balance
                </label>
                <input
                  type="text"
                  id="balance"
                  name="balance"
                  value={formData.balance || ""}
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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAccount;
