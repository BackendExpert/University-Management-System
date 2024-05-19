import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'

const DashHome = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    // const DarkMode = localStorage.getItem('darkMode');

    // dashdata
    const DashData = [
        {id: 1, name: "Students", icon: "", value: <CountUp end={20} />, style: ""},
        {id: 2, name: "Teachers", icon: "", value: <CountUp end={20} />, style: ""},
        {id: 3, name: "Subjects", icon: "", value: <CountUp end={20} />, style: ""},
        {id: 4, name: "Staff", icon: "", value: <CountUp end={20} />, style: ""},
        {id: 5, name: "Students", icon: "", value: <CountUp end={20} />, style: ""},
        {id: 6, name: "Students", icon: "", value: <CountUp end={20} />, style: ""},
        {id: 7, name: "Students", icon: "", value: <CountUp end={20} />, style: ""},
    ]

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className=''>
                <div className="lg:grid grid-cols-4 gap-4">
                    <div className="">

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