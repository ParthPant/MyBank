import React from 'react';
import Navbar from '../Components/Navbar';
import LoginCard from '../Components/LoginCard';
import LandingPage from './LandingPage';
import './Home.css';

function Home(){
    return (
        <div className="App">
            <Navbar />
            <LandingPage/>
            <LoginCard />
        </div>
    );
}

export default Home;