import React, {Component} from 'react';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/admin/:mode" element={<Admin />}></Route> 
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>  
    </Router>
  );}
}

export default App;
