import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'

const ProfileData = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser === "Student"){
        return (
            <div className="">
            <div className="md:flex ">
              <div className="w-full">
                <div className="bg-white py-4 px-8 rounded shadow-md">
                <div className="lg:py-16 py-8 md:flex">
                    <img src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png" alt="" className='lg:h-56 h-[20%] w-auto'/>
                      <table border={0} className='mx-2 lg:text-2xl'>
                          <tr className=''>
                              <td className='font-semibold'>Email: </td>
                              <td className='pl-4 text-gray-500'>jehan.w@example.com </td>
                          </tr>
                          <tr>
                              <td className='font-semibold'>Admission ID: </td>
                              <td className='pl-4 text-gray-500'>123456ABCD </td>
                          </tr>
                          <tr>
                              <td className='font-semibold'>Username: </td>
                              <td className='pl-4 text-gray-500'>jehanstd </td>
                          </tr>
        
                          <tr>
                              <td className='font-semibold'>Password: </td>
                              <td className='pl-4 text-gray-500'>**********</td>
                          </tr>
                      </table>
                  </div>
                </div>
                <div className="bg-white py-4 px-8 my-4 rounded shadow-md">
                  <h1 className="lg:text-2xl font-semibold text-gray-500 py-4">My Personal Data</h1>
                  <hr />
                  <div className="">
                    
                  </div>
                </div>
              </div>
              <div className="md:mx-4 mx-0 w-full md:my-0 my-4">
                <div className="bg-white py-4 px-8  rounded shadow-md">
                  ashdkjh
                </div>
              </div>
            </div>
          </div>
          )
    }

}

export default ProfileData