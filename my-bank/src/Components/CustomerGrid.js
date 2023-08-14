import React from "react";
import CustomerRow from "./CustomerDetails";
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
    axios.get(baseURL, {
      headers: {
        "Authorization": "Bearer" + " " + localStorage.getItem("token")
      }}).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post);
  let customers = [];
  for (let i = 0; i < post.length; ++i) {
    customers.push({ customerID: post[i].custId + i, name: post[i].name });
  }
  return (
    <div class="pl-10 pr-10 grid gap-4">
      {customers.map((customer, index) => {
        return (
          <CustomerRow
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
