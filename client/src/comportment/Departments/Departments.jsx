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
    {name: "Departments", btnValue: "AllDepts", value: <CountUp end={20} />, icon: <BsBuilding />, style: "text-blue-500"},
    {name: "Add New Departments", btnValue: "AddDept", value: "#", icon: <BsBuilding />, style: "text-green-500"},
  ]
  if(EmailUser !== null && RoleUser === "SuperAdmin"){
    return (
      <div className="mx-8">
          <div className="my-4">
              <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Departments </p>
          </div>
          <div className="">
            <div className="md:grid grid-cols-3 gap-4 my-4 mr-4 ">
              {
                DeptData.map((Depts) => {
                  return (
                    <div className={`cursor-pointer h-full bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${Depts.style}`}>                                       
                      <div className="lg:py-8 flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                          <div className="">
                              <h1 className={`text-[180%] ${Depts.style}`}>{Depts.value}</h1>
                              <p className="py-2 text-[120%] lg:text-3xl lg:mt-2">{Depts.name}</p>
                          </div>
                          <div className="">
                              <p className="lg:text-5xl text-[200%] text-gray-500">{Depts.icon}</p>
                          </div>
                      </div>
                      <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                          {Depts.name} 
                      </div>
                  </div>  
                  )
                })
              }
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

export default Departments