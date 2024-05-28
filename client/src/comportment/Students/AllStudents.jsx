import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import axios from 'axios';


const AllStudents = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser !== null && EmailUser !== null & RoleUser === "SuperAdmin" && RoleUser === "Hod"){
        return (
            <div>AllStudents</div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear();
            navigate('/')
        }, [])
    }

}

export default AllStudents