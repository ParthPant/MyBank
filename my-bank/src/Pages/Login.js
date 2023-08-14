import React from "react";
import Navbar from "../Components/Navbar";
import LoginCard from "../Components/LoginCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider.js";
import { useState } from "react";
import { configheaders, baseURL } from "../utils";
import axios from "axios";

const Login = () => {
  const { setToken } = useAuth();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (userName, password) => {
    axios
      .post(
        baseURL + "authentication/authenticate",
        {
          username: userName,
          password: password,
        },
        {
          headers: configheaders,
        },
      )
      .then((response) => {
        setToken(response.data);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <LoginCard onSubmit={handleLogin} error={error} />
    </>
  );
};

export default Login;
