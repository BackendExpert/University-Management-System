import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios';
import { BsBuilding, BsBuildingAdd } from 'react-icons/bs';

const AddDept = () => {

    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div>AddDept</div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default AddDept