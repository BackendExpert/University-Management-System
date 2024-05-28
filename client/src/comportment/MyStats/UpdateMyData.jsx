import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios';

const UpdateMyData = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='lg:text-2xl my-2 '>
                <div className="bg-white py-4 px-6 rounded shadow-md">
                    <h1 className="text-gray-600">Update My Data</h1>
                    <hr />

                    <form action="">
                        <div className="md:grid grid-cols-2 gap-4">
                            <div className="my-4">
                                <label htmlFor="" className="text-gray-500">First Name : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='First Name'
                                />
                            </div>
                            <div className="my-4">
                                <label htmlFor="" className="text-gray-500">First Name : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Last Name'
                                />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-gray-500">Address : </label>
                            <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Last Name'
                            />
                            <div className="md:flex">
                                <div className="flex">
                                    <input type="checkbox" name="" id="" className='px-4'/>
                                    <p className="px-2">                                        
                                        Set as Address Father's Address                                    
                                    </p>
                                </div>
                                <div className="flex">
                                    <input type="checkbox" name="" id="" className='px-4'/>
                                    <p className="px-2">                                        
                                        Set as Address Mother's Address                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4">Father's Information</p>
                        <hr />
                        <div className="md:grid grid-cols-2 gap-4 my-4">
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Father's Name : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Father Name'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Father's Mobile : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Father Mobile'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Father's Email : </label>
                                <input type="email" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Father Email Address'
                                />
                            </div>
                        </div>
                    </form>
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

export default UpdateMyData