import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    return (
        <div className="w-64 h-screen bg-gray-800 text-white fixed">
          <div className="p-4">
            {
                (() => {
                    if(RoleUser === "SuperAdmin") {
                        return (
                            <h2 className="text-2xl font-bold">SuperAdmin Dashboard</h2>
                        )
                    }
                    if(RoleUser === "user"){
                        return (
                            <h2 className="text-2xl font-bold">Dashboard</h2>
                        ) 
                    }
                })()
            }
            
          </div>
          <nav className="mt-10">

          </nav>
        </div>
      );
    
}

export default DashSide