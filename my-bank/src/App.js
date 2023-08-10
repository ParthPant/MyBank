import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import {LoginCard} from './Components/LoginCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" />
          <input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
          <div className="card-actions">
            <button class="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
