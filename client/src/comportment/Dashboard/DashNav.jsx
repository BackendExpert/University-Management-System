import React from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"


const DashNav = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    if(RoleUser !== null && EmailUser !== null){

    }
    else{
        
    }
  return (
    <div>
        <div className="flex">

        </div>
    </div>
  )
}

export default DashNav