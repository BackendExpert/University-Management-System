import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'
import SuperAdminImg from '../../assets/SuperAdminWhite.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsBook, BsPatchCheck, BsBuilding, BsFile, BsMortarboard, BsList, BsX, BsCalendarEvent } from "react-icons/bs";



const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    // alert(DarkMode)

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

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
        {id: 11, name: "Events", link: "Events", icons: <BsCalendarEvent />},  
        {id: 12, name: "Profile", link: "MyProfile", icons: <BsPersonGear />},  

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
            <button
                className="md:hidden fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded font-semibold"
                onClick={toggleSidebar}
            >
                {
                    !isOpen ? <BsList /> : <BsX />
                }
            </button>
            <div className={`md:relative fixed top-0 left-0 h-full px-4 bg-gray-800 text-white w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex whitespace-nowrap">
                    <p className="text-2xl my-4 "><MyIcons name='school' size='large'></MyIcons></p>                    

                            <div className="my-4">
                                <h1 className="text-xl my-2 pl-2">ABC Campus</h1>
                                {
                                    (() => {
                                        if(RoleUser === "SuperAdmin"){
                                            return (
                                                <p className='text-sm'>SuperAdmin</p>
                                            )
                                        }
                                        if(RoleUser === "Student"){
                                            return (
                                                <p className='text-sm'>Student</p>
                                            )
                                        }
                                        if(RoleUser === "Hod"){
                                            return (
                                                <p className='text-sm'>Hend of Dept</p>
                                            )
                                        }
                                    })()
                                }
                                
                            </div>


                    
                </div>
                <hr className={` ${DarkMode ? 'border-gray-400' : 'border-white'}`}/>
                
                <div className="my-8">
                    {
                        SideLink.map((AdminLinks) => {
                            if(AdminLinks.name === "LogOut"){
                                return (
                                    <div onClick={() => headleLogOut()} className="my-8 mx-2 text-red-500 cursor-pointer">
                                        <div className="flex">
                                            <p className="text-xl">{AdminLinks.icons}</p>
                                            <p className={`pl-4`}>{AdminLinks.name}</p>
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
                                                    <p className="">{AdminLinks.icons}</p>
                                                    <p className={` py-1 pl-4 `}>{AdminLinks.name}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                                if(RoleUser === "Student"){
                                    if(AdminLinks.id === 1 || AdminLinks.id === 7 || AdminLinks.id === 12){
                                        return (
                                            <Link to={AdminLinks.link}>
                                                <div className="my-4 mx-2">
                                                    <div className="flex">
                                                        <p className="text-xl">{AdminLinks.icons}</p>
                                                        <p className={`pl-4 `}>{AdminLinks.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                                if(RoleUser === "Hod"){
                                    if(AdminLinks.id !== 5 && AdminLinks.id !== 8){
                                        return (
                                            <Link to={AdminLinks.link}>
                                                <div className="my-8 mx-2">
                                                    <div className="flex">
                                                        <p className="">{AdminLinks.icons}</p>
                                                        <p className={` py-1 pl-4 `}>{AdminLinks.name}</p>
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