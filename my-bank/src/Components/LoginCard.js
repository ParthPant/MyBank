import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginCard({ onSubmit, error }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isSignIn, setisSignin] = useState(true);

  return (
    <div className="card w-96 bg-gray-900">
      <div className="card-body items-center text-center">
        
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
        { !isSignIn ?  <input
          type="password"
          placeholder="Confirm Password"
          className="input border-black input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        : <></>}
               {error ? (
          <div><b className="text-red-600">Wrong user credentials provided</b></div>
        ) : (
          <></>
        )}
        { isSignIn ? <div className="card-actions">
          <button
            class="btn btn-primary bg-purple-600 rounded-none"
            onClick={() => onSubmit(userName, password)}
          >
            Login
          </button>
        </div> : <></>}
        { !isSignIn ? <div className="card-actions">
          <button
            class="btn btn-primary bg-purple-600 rounded-none"
            onClick={() => onSubmit(userName, password)}
          >
            Sign up
          </button>
        </div> : <></>}
        { !isSignIn ? <div onClick={()=> {setisSignin(!isSignIn)}}class="text-blue-400 hover:underline">Already have an account? Log in</div> : <></>}
 
        { isSignIn ? <div onClick={()=> {setisSignin(!isSignIn)}}class="text-blue-400 hover:underline">New user? Create new account</div> : <></>}
      </div>
    </div>

  );
}

export default LoginCard;
