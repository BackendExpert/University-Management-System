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

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    if(RoleUser !== null && EmailUser !== null){
      return (
        <div className='mx-2'>
            <div className="my-4">
                <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / MyProfile </p>
            </div>
          
          <div className="bg-white py-4 px-8 my-4 rounded shadow-md">
            {
              (() => {
                if(buttonValue === 0){
                  return (
                      <div className="md:flex md:my-0 my-2">
                          <div className="cursor-pointer mx-2 py-2 border-b-2 border-blue-500 text-blue-500">My Information</div>
                          <div className="cursor-pointer mx-2 py-2" onClick={() => HeadleButtonClick("UpdatePass")}>Update Password</div>
                          <div className="cursor-pointer mx-2 py-2" onClick={() => HeadleButtonClick("UpdateMyData")}>Update My Data</div>  
                      </div>
                  )
                }
                if(buttonValue === "UpdatePass"){
                    return (
                        <div className="md:flex md:my-0 my-2">
                            <div className="cursor-pointer mx-2 py-2 " onClick={() => HeadleButtonClick(0)}>My Information</div>
                            <div className="cursor-pointer mx-2 py-2 border-b-2 border-blue-500 text-blue-500">Update Password</div> 
                            <div className="cursor-pointer mx-2 py-2" onClick={() => HeadleButtonClick("UpdateMyData")}>Update My Data</div>  
                        </div>
                    )
                }
                if(buttonValue === "UpdateMyData"){
                  return (
                      <div className="md:flex md:my-0 my-2">
                          <div className="cursor-pointer mx-2 py-2 " onClick={() => HeadleButtonClick(0)}>My Information</div>
                          <div className="cursor-pointer mx-2 py-2 " onClick={() => HeadleButtonClick("UpdatePass")}>Update Password</div> 
                          <div className="cursor-pointer mx-2 py-2 border-b-2 border-blue-500 text-blue-500" >Update My Data</div>  
                      </div>
                  )
              }
              })()
            }
          </div>
          
          {
            (() => {
              if(buttonValue === 0){
                return (
                  <ProfileData />
                )
              }
            })()
          }
    
          
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

export default MyProfile