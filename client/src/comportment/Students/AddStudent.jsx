import React, { useEffect, useState } from 'react'
import { BsBag, BsPeople, BsPersonAdd, BsPersonGear, BsPersonPlusFill, BsPersonSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'
import  secureLocalStorage  from  "react-secure-storage"
import axios from 'axios'

const AddStudent = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    // fetch department data for add student

    const [DataDept, SetDataDept] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/DeptStd')
        .then(res => SetDataDept(res.data.Result))
        .catch(err => console.log(err))
    }, [])
    // student data
    const [StdData, SetStdData] = useState({
        username: '',
        email: '',
        password: '',
        dept: '',
        AdmissionNo: '',
        gender: '',
        nic: '',
    })

    const headleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/AddStudent', StdData)
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Student Added Successfully")
                window.location.reload()
            }
            else{
                alert(res.data.Error)
            }
        })
    }

    

    if(RoleUser !== null && EmailUser !== null && RoleUser !== "Student"){
        return (
            <div className='bg-white shadow-md rounded py-12 px-10 my-8'>
                <h1 className="lg:text-3xl text-xl text-gray-500">Add New Student</h1>
                <hr className='pb-4 pt-2'/>

                <form onSubmit={headleSubmit}>
                    <div className="lg:grid grid-cols-4 gap-4">
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Username: </label>
                            <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Username'
                            onChange={e => SetStdData({...StdData, username:e.target.value})}/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>NIC No: </label>
                            <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter NIC Number'
                            onChange={e => SetStdData({...StdData, nic:e.target.value})}/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Email: </label>
                            <input type="email" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Email Address'
                            onChange={e => SetStdData({...StdData, email:e.target.value})}/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Password: </label>
                            <input type="password" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Password'
                            onChange={e => SetStdData({...StdData, password:e.target.value})}/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Gender</label>
                            <select name="" id="" className='h-12 rounded pl-2 border-none bg-gray-200 w-full my-2'
                            onChange={e => SetStdData({...StdData, gender:e.target.value})} required>
                                <option value=''>Select Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="">
                        <label htmlFor="" className='lg:text-xl text-gray-500'>Select Department</label>
                            <select name="" id="" className='h-12 rounded pl-2 border-none bg-gray-200 w-full my-2'
                            onChange={e => SetStdData({...StdData, dept:e.target.value})} required>
                                <option value=''>Select Option</option>
                                {
                                    DataDept.map((stdDept) => {
                                        return (
                                            <option value={stdDept.DeptName}>{stdDept.DeptName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="" className='lg:text-xl text-gray-500'>Admission No: </label>
                            <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Admmision Number'
                            onChange={e => SetStdData({...StdData, AdmissionNo:e.target.value})}/>
                        </div>
                    </div>
                    <div className="">
                        <button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded py-4 px-8 my-4 text-white duration-500'>Add Student</button>
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