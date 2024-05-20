import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsMortarboard } from "react-icons/bs";

const DashHome = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    // const DarkMode = localStorage.getItem('darkMode');

    // dashdata
    const DashData = [
        {id: 1, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "text-green-500"},
        {id: 2, name: "Teachers", icon: <BsPersonVideo3 />, value: <CountUp end={20} />, style: "text-blue-500"},
        {id: 3, name: "Subjects", icon: <BsFileEarmarkText />, value: <CountUp end={20} />, style: "text-yellow-500"},
        {id: 4, name: "Staff", icon: <BsPeople />, value: <CountUp end={20} />, style: "text-red-500"},
        {id: 5, name: "Courses", icon: <BsMortarboard />, value: <CountUp end={20} />, style: "text-purple-500"},
        {id: 6, name: "Departments", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "text-yellow-500"},

    ]

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='mx-8'>
                <div className="my-4">
                    <p>/ Dashbord /</p>
                </div>
                <div className={` ${RoleUser === "Student" ? 'lg:flex' : ''}`}>
                {
                        (() => {
                            if(RoleUser === "Student"){
                                return (
                                    <div className="mr-8 my-2 w-full">
                                        <div className="bg-white  py-4 px-6 rounded shadow-md">
                                            <h1 className="text-2xl font-semibold">My Information</h1>
                                            <div className="py-8 px-6">
                                                <img src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png" alt="" className='h-40'/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })()
                    }

                    <div className={`lg:grid ${RoleUser === "Student" ? ' grid-cols-2 w-full' : ' grid-cols-4' } gap-4 my-2`}>
                        {
                            DashData.map((dataDash) => {
                                return (
                                    <div className="">
                                        <div className={` text-gray-500 rounded bg-white shadow-md`}>
                                            <div className="py-8 px-8 flex justify-between py-8">
                                                <div className="">
                                                    <h1 className={`text-4xl py-2 font-semibold ${dataDash.style}`}>{dataDash.value}</h1>
                                                    <p className="">{dataDash.name}</p>
                                                </div>
                                                <div className="">
                                                    <h1 className="text-5xl">{dataDash.icon}</h1>
                                                </div>
                                            </div>
                                            <div className="py-4 pl-4 text-white font-semibold bg-gradient-to-r from-cyan-500 to-green-500">
                                                All {dataDash.name}
                                            </div>
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

export default DashHome