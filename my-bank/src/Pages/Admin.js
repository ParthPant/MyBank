import React from 'react';
import Navbar from '../Components/Navbar';

function Admin(){
    return (
            <> 
            <Navbar/>   
            <div class="mt-10 mb-10" >
                <div class="min-h-screen flex items-center justify-center">
                    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                        
                        <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">New Customer</h1>
                            <form>
                                
                                <div class="mb-4">
                                    <label for="apellido" class="block mb-2 text-sm text-gray-600">Name</label>
                                    <input type="text" id="apellido" name="apellido" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <div class="mb-4">
                                    <label for="password" class="block mb-2 text-sm text-gray-600">Contact</label>
                                    <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <div class="mb-6">
                                    <label for="confirmPassword" class="block mb-2 text-sm text-gray-600">Card Number</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <div class="mb-6">
                                    <label for="confirmPassword" class="block mb-2 text-sm text-gray-600">Pin Number</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <div class="mb-6">
                                    <label for="confirmPassword" class="block mb-2 text-sm text-gray-600">City</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <div class="mb-6">
                                    <label for="confirmPassword" class="block mb-2 text-sm text-gray-600">Account Number</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                </div>
                                <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
                </> 
    );
}

export default Admin;