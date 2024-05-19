import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'
import SuperAdminImg from '../../assets/SuperAdminWhite.png'

import { BsBackpack2Fill } from "react-icons/bs";


const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const [sideOpen, SetsideOpen] = useState(true)

    const SideLink = [
        {name: "Dashboard", link: "#", icons: <BsBackpack2Fill />},
        {name: "Students", link: "#", icons: "person"},
        {name: "Teachers", link: "#", icons: "person"},
        {name: "Subjects", link: "#", icons: "person"},
        {name: "Staff", link: "#", icons: "person"},       
        {name: "Profile", link: "#", icons: "person"},   

        
    ]

    return (
        <div className="">
            <div className={` ${sideOpen ? 'w-72' : 'w-20'} duration-500 bg-gray-800 h-screen px-4 text-white`}>
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
                <hr />
                
                <div className="">
                    {
                        SideLink.map((AdminLinks) => {
                            return (
                                <Link>
                                    <div className="my-8 mx-2">
                                        <div className="flex">
                                            <p className="text-3xl">{AdminLinks.icons}</p>
                                            <p className={` ${sideOpen ? 'visible' : 'invisible'} py-1 pl-4 text-xl`}>{AdminLinks.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
    
}

export default DashSide