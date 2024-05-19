import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'
import SuperAdminImg from '../../assets/SuperAdminWhite.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower } from "react-icons/bs";


const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    // alert(DarkMode)

    const [sideOpen, SetsideOpen] = useState(true)

    const SideLink = [
        {name: "Dashboard", link: "Home", icons: <BsSpeedometer2 />},
        {name: "Students", link: "Students", icons: <BsBackpack2Fill />},
        {name: "Teachers", link: "Teachers", icons: <BsPersonVideo3 />},
        {name: "Subjects", link: "Subjects", icons: <BsFileEarmarkText />},
        {name: "Staff", link: "Staff", icons: <BsPeople />},       
        {name: "Profile", link: "#", icons: <BsPersonGear />},  
        {name: "LogOut", icons: <BsPower />},       
    ]

    const headleLogOut = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }
    
    const [ModeDark, SetModeDark] = useState(false)

    // for darkmode
    const healeDarkMode = () => {
        SetModeDark(true)
    }

    const healeLightkMode = () => {
        SetModeDark(false)
    }

    localStorage.setItem("darkMode", ModeDark) 
    return (
        <div className="">
            <div className={` ${sideOpen ? 'w-72' : 'w-20'} bg-gray-800 text-white border-r-2 border-gray-400 duration-500 h-screen px-4 shadow-md`}>
                <div className="lg:invisible visible">
                {
                    sideOpen ? 
                        <p className="" onClick={() => SetsideOpen(false)}><MyIcons name='arrow-back-circle' size='large'></MyIcons></p>
                    :
                        <p className="" onClick={() => SetsideOpen(true)}><MyIcons name='arrow-forward-circle' size='large'></MyIcons></p>    
                }
                </div>
                
                <div className="flex">
                    <p className="text-2xl my-4"><MyIcons name='school' size='large'></MyIcons></p>                    
                    {
                        sideOpen ? 
                            <div className="my-4">
                                <h1 className="text-2xl my-2 pl-2">ABC Campus</h1>
                                <p>SuperAdmin</p>
                            </div>

                        :
                            <h1 className="text-2xl my-2 pl-2"></h1>

                    }
                    
                </div>
                <hr className={` ${DarkMode ? 'border-gray-400' : 'border-white'}`}/>
                
                <div className="">
                    {
                        SideLink.map((AdminLinks) => {
                            if(AdminLinks.name === "LogOut"){
                                return (
                                    <div onClick={() => headleLogOut()} className="my-8 mx-2 text-red-500 cursor-pointer">
                                        <div className="flex">
                                            <p className="text-3xl">{AdminLinks.icons}</p>
                                            <p className={` ${sideOpen ? 'visible' : 'invisible'} py-1 pl-4 text-xl`}>{AdminLinks.name}</p>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                return (
                                    <Link to={AdminLinks.link}>
                                        <div className="my-8 mx-2">
                                            <div className="flex">
                                                <p className="text-3xl">{AdminLinks.icons}</p>
                                                <p className={` ${sideOpen ? 'visible' : 'invisible'} py-1 pl-4 text-xl`}>{AdminLinks.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
                <div className="">
                    {
                        !ModeDark ?
                            <p onClick={() => healeDarkMode()} className="cursor-pointer">DarkMode</p>
                        :
                            <p onClick={() => healeLightkMode()} className="cursor-pointer">LightMode</p>  
                    }
                    
                </div>
                
            </div>
        </div>
    )
    
}

export default DashSide