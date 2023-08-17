import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAuth } from "../Provider/AuthProvider";
import Footer from "../Components/Footer";

function LandingPage() {
  const { token } = useAuth();
  return (
    <div>
      <Navbar />
      <div className="card card-side glass image-full m-10 flex h-[79.5vh]">
        <figure><img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
        <div className="card-body items-center text-center m-auto">
          <h1 className="font-helvetica text-7xl"><span className="text-purple-600">Know your </span><br /> Customers</h1>
          <div className="card-actions justify-end">
            <Link to={token ? "/dashboard": "/login"}>
            <button className="btn bg-purple-600 rounded-none hover:border-black-700 border-transparent border-2">Get Started</button>
            </Link>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LandingPage;
