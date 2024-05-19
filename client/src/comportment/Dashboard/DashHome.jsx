import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower } from "react-icons/bs";

const DashHome = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    // const DarkMode = localStorage.getItem('darkMode');

    // dashdata
    const DashData = [
        {id: 1, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "bg-green-500"},
        {id: 2, name: "Teachers", icon: <BsPersonVideo3 />, value: <CountUp end={20} />, style: "bg-blue-500"},
        {id: 3, name: "Subjects", icon: <BsFileEarmarkText />, value: <CountUp end={20} />, style: "bg-yellow-500"},
        {id: 4, name: "Staff", icon: <BsPeople />, value: <CountUp end={20} />, style: "bg-red-500"},
        {id: 5, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "bg-purple-500"},
        {id: 6, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "bg-yellow-500"},
        {id: 7, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "bg-green-500"},
    ]

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='mx-8'>
                <div className="my-4">
                    <p>/ Dashbord /</p>
                </div>
                <div className="lg:grid grid-cols-4 gap-4">
                    {
                        DashData.map((dataDash) => {
                            return (
                                <div className="">
                                    <div className={`py-12 px-8 text-white rounded-xl ${dataDash.style}`}>
                                        <div className="flex">
                                            <div className="text-5xl">
                                                {dataDash.icon}
                                            </div>
                                            <div className="ml-4">
                                                <h1 className="text-3xl">{dataDash.name}</h1>
                                                <p className="text-xl">{dataDash.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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