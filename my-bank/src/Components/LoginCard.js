import React from 'react';
import {Link} from 'react-router-dom';

function LoginCard() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
            <form>
            <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
            <div className="card-actions">
                <Link to ="/admin">
                    <button class="btn">Login</button>
                </Link>
            </div>
            </form>
        </div>
      </div>
  );
}

export default LoginCard;