import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'
import ProfileData from './ProfileData';

const MyProfile = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser !== null && EmailUser !== null){
        
    }
    else{
      useEffect(() => {
        localStorage.clear()
        navigate('/')
      }, [])
    }
  return (
    <div className='mx-2'>
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / MyProfile </p>
        </div>

      <ProfileData />
    </div>
  )
}

export default MyProfile