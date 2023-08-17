import React from "react";
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
    <div className="">
      <div className="glass grid h-[80vh] place-items-center">
        <LoginCard className="" onSubmit={handleLogin} error={error} />
      </div>
    </div>
  );
};

export default Login;
