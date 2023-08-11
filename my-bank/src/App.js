import React, {Component} from 'react';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AddCustomer from './Pages/AddCustomer';
import Login from './Pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route> 
        <Route exact path="/addCustomer" element={<AddCustomer />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>  
    </Router>
  );}
}

export default App;
