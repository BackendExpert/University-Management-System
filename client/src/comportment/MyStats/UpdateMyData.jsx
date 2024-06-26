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

    const [StdUpdateData, SetStdUpdateData] = useState([])

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='lg:text-xl my-2 '>
                <div className="bg-white py-4 px-6 rounded shadow-md">
                    <h1 className="text-gray-600">Update My Data</h1>
                    <hr />

                    <form action="">
                        <div className="md:grid grid-cols-2 gap-4 my-4">
                            <div className="">
                                <label htmlFor="" className="text-gray-500">First Name : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='First Name'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">First Name : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Last Name'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Moble Number (Whatsapp) : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Mobile (Whatsapp)'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Landline Number : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='LandLine Number'
                                />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-gray-500">Address : </label>
                            <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Address'
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
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Father Mobile'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Father's Email : </label>
                                <input type="email" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Father Email Address'
                                />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-gray-500">Father's Address : </label>
                            <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Address'
                            />
                        </div>
                        <p className="mt-4">Mother's Information</p>
                        <hr />
                        <div className="md:grid grid-cols-2 gap-4 my-4">
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Mother's Name : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Mother Name'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Mother's Mobile : </label>
                                <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Mother Mobile'
                                />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-gray-500">Mother's Email : </label>
                                <input type="email" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Mother Email Address'
                                />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-gray-500">Mother's Address : </label>
                            <input type="text" name="" id="" className="my-2 h-12 w-full rounded bg-gray-200 pl-2" placeholder='Address'
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="my-4 text-white py-4 px-8 rounded shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Update</button>
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