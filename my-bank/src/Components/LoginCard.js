import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginCard({ onSubmit, error }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="card card-compact w-96 bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        {error ? (
          <div className="">Wrong user credentials provided</div>
        ) : (
          <></>
        )}
        <input
          type="text"
          placeholder="Username"
          className="input border-black input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input border-black input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="card-actions">
          <button
            class="btn bg-slate-300"
            onClick={() => onSubmit(userName, password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
