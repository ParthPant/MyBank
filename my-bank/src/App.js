import React, {Component} from 'react';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AddCustomer from './Pages/AddCustomer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route> 
        <Route exact path="/addCustomer" element={<AddCustomer />}></Route>
      </Routes>  
    </Router>
  );}
}

export default App;
