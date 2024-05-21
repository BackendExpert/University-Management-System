import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'
import SuperAdminImg from '../../assets/SuperAdminWhite.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsBook, BsPatchCheck, BsBuilding, BsFile, BsMortarboard } from "react-icons/bs";



const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    // alert(DarkMode)

    const [sideOpen, SetsideOpen] = useState(true)

    const SideLink = [
        {id: 1, name: "Dashboard", link: "Home", icons: <BsSpeedometer2 />},
        {id: 2, name: "Students", link: "Students", icons: <BsBackpack2Fill />},
        {id: 3, name: "Teachers", link: "Teachers", icons: <BsPersonVideo3 />},
        {id: 4, name: "Subjects", link: "Subjects", icons: <BsFileEarmarkText />}, 
        {id: 5, name: "Staff", link: "Staff", icons: <BsPeople />},       
        {id: 6, name: "Library", link: "Library", icons: <BsBook />},   // for labrarian
        {id: 7, name: "Marks", link: "MyMarks", icons: <BsPatchCheck />},  // student
        {id: 8, name: "Departments", link: "Departments", icons: <BsBuilding />},  
        {id: 9, name: "Courses", link: "Courses", icons: <BsMortarboard />},  
        {id: 10, name: "Batches", link: "Batches", icons: <BsPeople />},
        {id: 11, name: "Profile", link: "MyProfile", icons: <BsPersonGear />},  

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
            <div className={` ${sideOpen ? 'w-72' : 'w-20'} bg-gray-800 text-white border-r-2 border-gray-400 duration-500 h-full px-4 shadow-md`}>
                <div className="">
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
                                {
                                    (() => {
                                        if(RoleUser === "SuperAdmin"){
                                            return (
                                                <p>SuperAdmin</p>
                                            )
                                        }
                                        if(RoleUser === "Student"){
                                            return (
                                                <p>Student</p>
                                            )
                                        }
                                        if(RoleUser === "Hod"){
                                            return (
                                                <p>Hend of Dept</p>
                                            )
                                        }
                                    })()
                                }
                                
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
                                if(RoleUser === "SuperAdmin"){
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
                                if(RoleUser === "Student"){
                                    if(AdminLinks.id === 1 || AdminLinks.id === 7 || AdminLinks.id === 11){
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
                                }
                                if(RoleUser === "Hod"){
                                    if(AdminLinks.id !== 8){
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
                                }
                            }
                        })
                    }
                </div>
                
            </div>
        </div>
    )
    
}

export default DashSide