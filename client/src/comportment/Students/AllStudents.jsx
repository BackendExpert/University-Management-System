import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import axios from 'axios';


const AllStudents = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    // get std data
    const [StdData, SetStdData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/StdView')
        .then(res => SetStdData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    if(RoleUser !== null && EmailUser !== null & RoleUser === "SuperAdmin" || RoleUser === "Hod"){
        return (
            <div className="my-8">
                <div className='bg-white py-4 px-8 rounded shadow-md'>
                    <h1 className="lg:text-3xl text-xl text-gray-500">Departments</h1>
                    <hr className='pb-4 pt-2'/>
                </div>
        
                <div class="overflow-x-auto my-8 bg-white">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    <p className="hidden md:table-cell">Reg No</p>
                                    <p className="md:hidden">Student Data</p>                                   
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Department
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>            
                        </thead>
                        <tbody>
                            {
                                StdData.map((dataStd, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataStd.RegNo}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataStd.EmailStd}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataStd.stdDept}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                {dataStd.Gender}
                                            </th>
                                            <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex">
                                                    <button>View</button>
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
            localStorage.clear();
            navigate('/')
        }, [])
    }

}

export default AllStudents