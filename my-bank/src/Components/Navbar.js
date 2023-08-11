import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
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
      <li><a>About</a></li>
    </ul>
  </div>
</div>
<hr></hr>
    </div>
  );
}

export default Navbar;
