import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios';
import { BsBuilding, BsBuildingAdd } from 'react-icons/bs';


// DeptsView


const AllDepts = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div className="">
                <div className='bg-white py-4 px-8 rounded shadow-md'>
                    <h1 className="lg:text-3xl text-xl text-gray-500">Departments</h1>
                    <hr className='pb-4 pt-2'/>
                </div>
        
                <div class="overflow-x-auto my-8">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 md:block hidden">
                                    Dept No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Dept Name 
                                </th>
                                <th scope="col" class="px-6 py-3 md:block hidden">
                                    Dept Descriptiono
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>            
                        </thead>
                        <tbody>
        
                        </tbody>
                    </table>
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

export default AllDepts