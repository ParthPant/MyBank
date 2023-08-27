import React from "react";
import {baseURL, configheaders} from "../utils.js";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function CustomerDetails() {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get(baseURL + "customers/" + id, {
        params: {
          includeAccounts: false,
        },
        configheaders
      })
      .then((response) => {
        setPost(response.data);
      })
      .catch(err => console.log(err.response))
  }, []);

  if (!post) return null;
  console.log(post);

  function toggleCustomer() {
    let url = baseURL + "customers/" + id + (post.enabled ? "/disable" : "/enable");
    console.log(url)
    axios
      .post(url, configheaders)
      .then(res => {console.log(res)})
      .catch(err => {console.log(err.response)})

    setPost({...post, enabled: !post.enabled})
  }

  function deleteCustomer() {
    axios
      .delete(baseURL, {
        headers: configheaders,
      })
      .then((response) => {
        console.log(response);
        navigate("/dashboard", { replace: true });
      });
  }

  return (
    <div>
      <div className="grid place-items-center">
        <div className="card card-side m-20 min-w-[60%] flex bg-white/10 backdrop-blur-lg">
          <figure className="w-1/2">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.name}`}
              alt="Profile Pic"
            />
          </figure>
          <div className="card-body font-helvetica pr-10">
            <h1 className="card-title">{post.name}</h1>
            {!post.enabled && <h1 className="badge badge-primary">Disabled</h1>}
            <hr className="p-0"></hr>
            <h2 className="">{post.email}</h2>
            <h2 className="">{post.contact}</h2>
            <h2 className="">{post.city}</h2>
            <h2 className="">{post.pinNo}</h2>
            <h2 className="">{post.cardNo}</h2>
            <div className="card-actions justify-end">
              <Link to={"/customer/edit/" + id}>
                <button className="btn btn-primary btn-sm">
                  Edit
                </button>
              </Link>
              <Link to={"/add-account/" + id}>
                <button className="btn btn-primary btn-sm">
                  Add
                </button>
              </Link>
              <Link to={"/view-account/" + id}>
                <button className="btn btn-primary btn-sm">
                  Accounts
                </button>
              </Link>
              <button onClick={toggleCustomer} className="btn btn-warning btn-sm">
                {post.enabled ? "Disable" : "Enable"}
              </button>
              <button onClick={deleteCustomer} className="btn btn-error btn-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
