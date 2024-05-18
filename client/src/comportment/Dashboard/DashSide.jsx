import React from 'react'
import { Link } from 'react-router-dom';

const DashSide = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white fixed">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          </div>
          <nav className="mt-10">
            <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Home
            </Link>
            <Link to="home" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              Home
            </Link>
            <Link to="profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              Profile
            </Link>
          </nav>
        </div>
      );
    
}

export default DashSide