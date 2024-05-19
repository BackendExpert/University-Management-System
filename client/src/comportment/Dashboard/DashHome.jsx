import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const DashHome = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    // const DarkMode = localStorage.getItem('darkMode');


    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className=''>
                <div className="lg:grid grid-cols-4 gap-4">
                    <div className="">
        
                    </div>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }

}

export default DashHome