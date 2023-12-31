import { useState } from "react";
import axios from "axios";
import { baseURL, configheaders } from "../utils.js";

export default function PinChange() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.oldPin === formData.newPin) {
      alert("The old pin and new pin should not be the same!");
    } else if (formData.confirmPin === formData.newPin) {
      axios
        .put(
          baseURL + "accounts/" + formData.accNo + "/pinChange",
          {
            oldPin: formData.oldPin,
            newPin: formData.newPin,
          },
          configheaders,
        )
        .then((res) => {
          console.log(res);
          alert("Pin Changed Successfully");
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data);
        });
    } else {
      alert("New Pin and Confirm New Pin should match!!");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white-500 mt-8 mb-6">
          Pin Change
        </h1>
        <form
          onSubmin={handleSubmit}
          className="m-auto flex flex-col gap-4 content-center items-center justify-center form-control w-full max-w-xs"
        >
          <div>
            <label className="label">
              <span className="label-text">Account Number</span>
            </label>
            <input
              required
              onChange={handleChange}
              name="accNo"
              value={formData.accNo}
              type="number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Old PIN</span>
            </label>
            <input
              type="password"
              required
              onChange={handleChange}
              name="oldPin"
              value={formData.oldPin}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">New PIN</span>
            </label>
            <input
              type="password"
              required
              onChange={handleChange}
              name="newPin"
              value={formData.newPin}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Confirm New PIN</span>
            </label>
            <input
              type="password"
              required
              onChange={handleChange}
              name="confirmPin"
              value={formData.confirmPin}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Change PIN
          </button>
        </form>
      </div>
    </div>
  );
}
