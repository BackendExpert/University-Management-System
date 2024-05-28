import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import axios from 'axios';


// DeptsView


const AllDepts = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    // get data
    const [DeptsAll, SetDeptsAll] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/DeptsView')
        .then(res => SetDeptsAll(res.data.Result))
        .catch(err => console.log(err)) 
    }, [])

    if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div className="">
                <div className='bg-white py-4 px-8 rounded shadow-md'>
                    <h1 className="lg:text-3xl text-xl text-gray-500">Departments</h1>
                    <hr className='pb-4 pt-2'/>
                </div>
        
                <div class="overflow-x-auto my-8 bg-white">
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
                            {
                                DeptsAll.map((dataDept, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataDept.DeptID}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataDept.DeptName}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataDept.DeptDesc}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex">
                                                    <button>Update</button>
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
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