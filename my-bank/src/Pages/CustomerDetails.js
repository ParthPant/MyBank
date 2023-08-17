import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function CustomerDetails() {
  const { id } = useParams();

  const [post, setPost] = React.useState(null);

  const baseURL = "http://localhost:5296/api/customers/" + id;

  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get(baseURL, {
        params: {
          includeAccounts: false,
        },
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;
  console.log(post);
  //   let customers = [];
  //   for (let i = 0; i < post.length; ++i) {
  //     customers.push({ customerID: post[i].custId + i, name: post[i].name });
  //   }

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
        <div className="card card-side glass m-20 flex">
          <figure className="grow">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt="Person Smiling"
            />
          </figure>
          <div className="card-body font-helvetica pr-10">
            <h1 className="card-title">{post.name}</h1>
            <hr className="p-0"></hr>
            <h2 className="">{post.email}</h2>
            <h2 className="">{post.contact}</h2>
            <h2 className="">{post.city}</h2>
            <h2 className="">{post.pinNo}</h2>
            <h2 className="">{post.cardNo}</h2>
            <div className="card-actions justify-end">
              <Link to={"/customer/edit/" + id}>
                <button className="btn bg-purple-600 btn-primary rounded-none hover:cursor-pointer">
                  Edit
                </button>
              </Link>
              <Link to={"/add-account/" + id}>
                <button className="btn btn-primary bg-purple-600 rounded-none hover:cursor-pointer">
                  Add
                </button>
              </Link>
              <button onClick={deleteCustomer} className="btn btn-ghost">
                Delete
              </button>
            </div>
          </div>

          <Link to={"/view-account/" + id}>
            <button className="btn btn-primary bg-purple-600 rounded-none hover:cursor-pointer">
              Accounts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
