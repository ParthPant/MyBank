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
            <a className="btn btn-ghost normal-case text-xl">MyBank</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/about">
                <a>About</a>
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <a href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="./" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a href="/login">Sign In</a>
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
