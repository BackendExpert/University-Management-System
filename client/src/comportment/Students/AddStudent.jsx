import React, { useEffect, useState } from 'react'
import { BsBag, BsPeople, BsPersonAdd, BsPersonGear, BsPersonPlusFill, BsPersonSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'
import  secureLocalStorage  from  "react-secure-storage"

const AddStudent = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    // student data
    const [StdData, SetStdData] = useState({
        username: '',
        email: '',
        password: '',
        dept: '',
        AdmissionNo: '',
        gender: '',
    })


    if(RoleUser !== null && EmailUser !== null && RoleUser !== "Student"){
        return (
            <div className='bg-white shadow-md rounded py-12 px-10 my-8'>
                <h1 className="lg:text-3xl text-xl text-gray-500">Add New Student</h1>
                <hr className='pb-4 pt-2'/>

                <form>
                    <div className="lg:grid grid-cols-4 gap-4">
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Username: </label>
                            <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Username'
                            onChange={e => SetStdData({...StdData, username:e.target.value})}/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Email: </label>
                            <input type="email" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Email Address'
                            onChange={e => SetStdData({...StdData, email:e.target.value})}/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Gender</label>
                            <select name="" id="" className='h-12 rounded pl-2 border-none bg-gray-200 w-full my-2'
                            onChange={e => SetStdData({...StdData, gender:e.target.value})}>
                                <option>Select Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                </form>
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

export default AddStudent