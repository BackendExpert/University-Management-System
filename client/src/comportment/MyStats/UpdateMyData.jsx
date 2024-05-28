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