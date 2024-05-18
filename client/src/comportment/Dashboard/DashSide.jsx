import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'

const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const [sideOpen, SetsideOpen] = useState(true)

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
                    <p className="text-2xl"><MyIcons name='school' size='large'></MyIcons></p>                    
                    {
                        sideOpen ? 
                            <h1 className="text-2xl my-2 pl-2">ABC Campus</h1>
                        :
                            <h1 className="text-2xl my-2 pl-2"></h1>

                    }
                    
                </div>
                
            </div>
        </div>
    )
    
}

export default DashSide