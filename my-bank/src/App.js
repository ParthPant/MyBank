import React, {Component} from 'react';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/login" element={<Home />}></Route>
        <Route exact path="/admin/:mode" element={<Admin />}></Route> 
        <Route exact path="/dashboard" element={<Login />}></Route>
      </Routes>  
    </Router>
  );}
}

export default App;
