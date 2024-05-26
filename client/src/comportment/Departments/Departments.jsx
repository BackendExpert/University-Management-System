import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios';
import { BsBuilding } from 'react-icons/bs';

const Departments = () => {
  const navigate = useNavigate()
  //curent login user
  const RoleUser = secureLocalStorage.getItem("Login1");
  const EmailUser = secureLocalStorage.getItem("login2");

  const DeptData = [
    {name: "Departments", value: <CountUp end={20} />, icos: <BsBuilding />, style: "text-blue-500"}
  ]
  if(EmailUser !== null && RoleUser === "SuperAdmin"){
    return (
      <div className="mx-8">
          <div className="my-4">
              <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Departments </p>
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

export default Departments