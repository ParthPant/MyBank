import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginCard({ onSubmit, error }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isSignIn, setisSignin] = useState(true);

  return (
    <div className="card w-96 bg-gray-900">
      <form className="card-body items-center text-center">
        <div className="card-title">Admin Login</div>
        <input
          type="text"
          placeholder="Username"
          className="input border-black input-bordered input-primary w-full max-w-xs"
          required
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input border-black input-bordered input-primary w-full max-w-xs"
          required
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isSignIn ? (
          <input
            type="password"
            placeholder="Confirm Password"
            className="input border-black input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        ) : (
          <></>
        )}
        {error ? (
          <div>
            <b className="text-red-600">Wrong user credentials provided</b>
          </div>
        ) : (
          <></>
        )}
        {isSignIn ? (
          <div className="card-actions">
            <button
              className="btn btn-active btn-primary bg-purple-600"
              onClick={(e) => {
                e.preventDefault();
                onSubmit(userName, password);
              }}
            >
              Login
            </button>
          </div>
        ) : (
          <></>
        )}
        {!isSignIn ? (
          <div className="card-actions">
            <button
              className="btn btn-active btn-primary bg-purple-600"
              onClick={(e) => {
                e.preventDefault();
                onSubmit(userName, password);
              }}
            >
              Sign up
            </button>
          </div>
        ) : (
          <></>
        )}
        {!isSignIn ? (
          <div
            onClick={() => {
              setisSignin(!isSignIn);
            }}
            className="text-blue-400 hover:underline"
          >
            Already have an account? Log in
          </div>
        ) : (
          <></>
        )}

        {isSignIn ? (
          <div
            onClick={() => {
              setisSignin(!isSignIn);
            }}
            className="text-blue-400 hover:underline"
          >
            New user? Create new account
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default LoginCard;
