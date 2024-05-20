import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsMortarboard, BsBuilding } from "react-icons/bs";

const DashHome = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    // const DarkMode = localStorage.getItem('darkMode');

    // dashdata
    const DashData = [
        {id: 1, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "text-green-500"},
        {id: 2, name: "Lecturers", icon: <BsPersonVideo3 />, value: <CountUp end={20} />, style: "text-blue-500"},
        {id: 3, name: "Subjects", icon: <BsFileEarmarkText />, value: <CountUp end={20} />, style: "text-yellow-500"},
        {id: 4, name: "Staff", icon: <BsPeople />, value: <CountUp end={20} />, style: "text-red-500"},
        {id: 5, name: "Courses", icon: <BsMortarboard />, value: <CountUp end={20} />, style: "text-purple-500"},
        {id: 6, name: "Departments", icon: <BsBuilding />, value: <CountUp end={20} />, style: "text-yellow-500"},

    ]

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='mx-8'>
                <div className="my-4">
                    <p>/ Dashbord /</p>
                </div>

                {
                        (() => {
                            if(RoleUser === "Student"){
                                return (
                                    <div className="">
                                        <div className="lg:grid grid-cols-3 gap-4">
                                            <div className="mr-8 my-2 w-full">
                                                <div className="bg-white py-4 px-6 rounded shadow-md">
                                                    <h1 className="text-2xl font-semibold text-gray-500">My Information</h1>
                                                    <hr  className='mt-4'/>
                                                    <div className="py-8 px-6 lg:flex">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png" alt="" className='h-40'/>
                                                        <table border={0} className='mx-4'>
                                                            <tr className=''>
                                                                <td className='font-semibold'>Name: </td>
                                                                <td className='pl-4 text-gray-500'>Jehan Weerasuriya </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Admission ID: </td>
                                                                <td className='pl-4 text-gray-500'>123456ABCD </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Admission Date: </td>
                                                                <td className='pl-4 text-gray-500'>25/12/2021 </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='font-semibold'>Gender: </td>
                                                                <td className='pl-4 text-gray-500'>Male </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="">
                                                        <Link to={'/Dashboard/MyProfile'}>
                                                            <button type="button" class="rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 py-2 px-6 hover:shadow-md">
                                                                More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mr-8 my-2 w-full">
                                                <div className="bg-white h-full shadow-md py-4 px-6 rounded ">                                                    
                                                    <h1 className="text-2xl font-semibold text-gray-500">My Course</h1>
                                                    <hr  className='mt-4'/>
                                                    <div className="py-8 px-6 lg:flex">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/2997/2997322.png" alt="" className='h-40'/>
                                                        <table border={0} className='mx-4'>
                                                            <tr className=''>
                                                                <td className='font-semibold'>Course Name: </td>
                                                                <td className='pl-4 text-gray-500'>BSc in IT </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Course Code: </td>
                                                                <td className='pl-4 text-gray-500'>IT5/BSC </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Batch No: </td>
                                                                <td className='pl-4 text-gray-500'>BSC/IT/01 </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='font-semibold'>Registation No: </td>
                                                                <td className='pl-4 text-gray-500'>ABC/123/23D </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="">
                                                        <Link to={'#'}>
                                                            <button type="button" class="rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 py-2 px-6 hover:shadow-md">
                                                                More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="mr-8 my-2 w-full">
                                                <div className="bg-white h-full shadow-md py-4 px-6 rounded">
                                                    <h1 className="text-2xl font-semibold text-gray-500">Current GPA</h1>      
                                                    <hr  className='mt-4'/>                                              
                                                    <div className="py-8 px-6 lg:flex">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/3755/3755243.png" alt="" className='h-40'/>
                                                        <table border={0} className='mx-4'>
                                                            <tr className=''>
                                                                <td className='font-semibold'>Year: </td>
                                                                <td className='pl-4 text-gray-500'>2nd </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Semester: </td>
                                                                <td className='pl-4 text-gray-500'>3rd </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Semester GPA: </td>
                                                                <td className='pl-4 text-gray-500'>3.62 </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='font-semibold'>OverRoll GPA: </td>
                                                                <td className='pl-4 text-gray-500'>3.30 </td>
                                                            </tr>
                                                        </table>
                                                    </div> 
                                                    <div className="">
                                                        <Link to={'#'}>
                                                            <button type="button" class="rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 py-2 px-6 hover:shadow-md">
                                                                More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            if(RoleUser === "SuperAdmin") {
                                return (
                                    <div className="">
                                        <div className="lg:grid grid-cols-4 gap-4">
                                            {
                                                DashData.map((dataDash) => {
                                                    return (
                                                    <div className="">
                                                        <div className="bg-white rounded shadow-md py-12 px-8">
                                                            <div className="flex w-full justify-between">
                                                                <div className="">
                                                                    <h1 className={`text-4xl ${dataDash.style}`}>{dataDash.value}</h1>
                                                                    <p className="py-2 text-xl">{dataDash.name}</p>
                                                                </div>
                                                                <div className="">
                                                                    <p className="text-5xl text-gray-500">{dataDash.icon}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-white py-6 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                                            All Students
                                                        </div>
                                                    </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                )
                            }
                            if(RoleUser === "Hod") {
                                return (
                                    <div className="">
                                        <div className="lg:grid grid-cols-4 gap-4">
                                            {
                                                DashData.map((dataDash) => {
                                                    if(dataDash.id !== 4 && dataDash.id !== 6){
                                                        return (
                                                            <div className="">
                                                                <div className="bg-white rounded shadow-md py-12 px-8">
                                                                    <div className="flex w-full justify-between">
                                                                        <div className="">
                                                                            <h1 className={`text-4xl ${dataDash.style}`}>{dataDash.value}</h1>
                                                                            <p className="py-2 text-xl">{dataDash.name}</p>
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-5xl text-gray-500">{dataDash.icon}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-white py-6 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                                                    All Students
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>

                                    </div>
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

export default DashHome