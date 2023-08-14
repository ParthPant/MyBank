import React from "react";
import CustomerRow from "./CustomerDetails";

function CustomerGrid() {
  let customers = [];
  for (let i = 0; i < 8; ++i) {
    customers.push({ customerID: "ID " + i, name: "Customer " + i });
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
