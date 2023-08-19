import React from "react";
import CustomerCard from "./CustomerCard";
import axios from "axios";

function CustomerGrid() {
  const [post, setPost] = React.useState(null);

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
    customers.push({ customerID: post[i].custId, name: post[i].name });
  }
  return (
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
  );
}

export default CustomerGrid;
