import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'

const MyProfile = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
  return (
    <div className='mx-2'>
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / MyProfile </p>
        </div>



        <div className="">
          <div className="lg:flex ">
            <div className="w-full">
              <div className="bg-white py-4 px-8 rounded shadow-md">
                ashdkjh 
              </div>
              <div className="bg-white py-4 px-8 my-4 rounded shadow-md">
                ashdkjh
              </div>
            </div>
            <div className="md:mx-4 mx-0 w-full md:my-0 my-4">
              <div className="bg-white py-4 px-8  rounded shadow-md">
                ashdkjh
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyProfile