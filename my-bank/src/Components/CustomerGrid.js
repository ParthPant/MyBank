import React from "react";
import CustomerCard from "./CustomerCard";
import axios from "axios";

function CustomerGrid() {
  const [post, setPost] = React.useState(null);
  const [formData, setFormData] = React.useState(null);


  const baseURL = "http://localhost:5296/api/customers/";

  const configheaders = {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPost(response.data);
      }).catch(err => {});
  }, []);

  if (!post) return null;
  console.log(post);
  let customers = [];
  for (let i = 0; i < post.length; ++i) {
    let data = post[i].name.toLowerCase();
    let val = formData;
    if(formData !== null)
      val  = formData.toLowerCase();
    if(data.includes(val) || val === null)
      customers.push({ customerID: post[i].custId, name: post[i].name });
  }
  return (
    <>
    <div className="flex gap-4 m-6 items-center justify-center flex-column">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="Search"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              
            />
            
          </div>
    <div class="grid grid-cols-3 grid-auto-cols gap-10 p-10 place-content-center max-w-screen">
      
      {customers.map((customer, index) => {
        return (
          <CustomerCard
            key={index}
            customerID={customer.customerID}
            customerName={customer.name}
          />
        );
      })}
    </div>
    </>
  );
}

export default CustomerGrid;
