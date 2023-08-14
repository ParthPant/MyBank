import React from "react";
import Navbar from "../Components/Navbar";
import LoginCard from "../Components/LoginCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider.js";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

  return (
    <>
      <Navbar />
      <LoginCard />
    </>
  );
};

export default Login;
