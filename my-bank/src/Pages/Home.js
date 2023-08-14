import React from "react";
import Navbar from "../Components/Navbar";
import LoginCard from "../Components/LoginCard";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <LoginCard />
    </div>
  );
}

export default Home;
