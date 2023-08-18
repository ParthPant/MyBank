import React from "react";

function About() {
  return (
    <div>
      <div className="card card-side image-full flex h-screen">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center m-auto">
          <h1 className="font-helvetica text-7xl text-purple-600">MyBank</h1>
          <hr className="bg-black" />
          <h2 className="font-helvetica text-xl text-justify">
            Want a one-stop solution to manage your customer database? MyBank is
            the website you're looking for. With this application, you can add,
            remove, and edit your customers' details with just the click of a
            button. Log in now for a seamless administration experience.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default About;
