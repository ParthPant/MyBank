import React from 'react';
import Navbar from '../Components/Navbar';
import LoginCard from '../Components/LoginCard';
import './Home.css';

function AddCustomer(){
    return (
        <div className="AddCustomer">
            <Navbar />
            <div class="h-[80vh] w-screen flex-row place-items-center p-10">
                <div class="justify-self-center grid grid-cols-2 gap-4">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
            
        </div>
    );
}

export default AddCustomer;