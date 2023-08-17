import React from "react";
import { useAuth } from "../Provider/AuthProvider.js";
import { Link } from "react-router-dom";

function Navbar() {
  const { token, setToken } = useAuth();

  const handleLogout = () => {
    setToken();
  };

  return (
    <div className="Navbar">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <div className="btn btn-ghost normal-case text-xl">MyBank</div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/about">
                <div>About</div>
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="./" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Navbar;
