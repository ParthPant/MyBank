import React from "react";
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import Navbar from "../Components/Navbar";

function CustomerDetails() {

    const {id} = useParams();

    const [post, setPost] = React.useState(null);
  
     const baseURL = "http://localhost:5296/api/customers/" + id;

     const configheaders = {
         "content-type": "application/json",
         Accept: "application/json",
         "Access-Control-Allow-Origin": "*",
     };

     React.useEffect(() => {
         axios.get(baseURL, {
            params: {
                includeAccounts: false
            },
            headers: {
             "Authorization": "Bearer" + " " + localStorage.getItem("token")
         }}).then((response) => {
         setPost(response.data);
         });
     }, []);

   if (!post) return null;
   console.log(post);
//   let customers = [];
//   for (let i = 0; i < post.length; ++i) {
//     customers.push({ customerID: post[i].custId + i, name: post[i].name });
//   }
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center">
      <div className="card card-side glass m-20 flex">
        <figure className="grow"><img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Person Smiling" /></figure>
        <div className="card-body font-helvetica shrink">
          <h1 className="card-title">{post.name}</h1>
          <hr className="p-0"></hr>
          <h2 className="">{post.email}</h2>
          <h2 className="">{post.contact}</h2>
          <h2 className="">{post.city}</h2>
          <h2 className="">{post.pinNo}</h2>
          <h2 className="">{post.cardNo}</h2>
            <div className="card-actions justify-end">
              <Link to={"/customer/edit/" + id}>
                <button className="btn btn-primary rounded-none">Edit</button>
              </Link>
                <button className="btn btn-ghost">Delete</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
