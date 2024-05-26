import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios';
import { BsBuilding, BsBuildingAdd } from 'react-icons/bs';

const AddDept = () => {

    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    // dept data
    const [deptData, SetdeptData] = useState({
        deptNo: '',
        deptName: '',
        deptDesc: ''
    })

    if(EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div className='bg-white py-4 px-8 rounded shadow-md'>
                <div className="md:grid grid-cols-2 gap-4">
                    <div className="my-2">
                        <label htmlFor="">Department ID</label>
                        <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Department ID' 
                        onChange={e => SetdeptData({...deptData, deptNo:e.target.value})}/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="">Department Name</label>
                        <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Department Name' 
                        onChange={e => SetdeptData({...deptData, deptName:e.target.value})}/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="">Department Description</label>
                        <input type="text" name="" id="" className="h-12 rounded pl-2 border-none bg-gray-200 w-full my-2" required placeholder='Enter Department Description' 
                        onChange={e => SetdeptData({...deptData, deptDesc:e.target.value})}/>
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

export default AddDept