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

    // headleSubmit
    const headleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8081/AddDept', deptData)
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Department Added Successful")
                window.location.reload()
            }
            else{
                alert(res.data.Error)
            }
        })
    }

    if(EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div className='bg-white py-4 px-8 rounded shadow-md'>
                <h1 className="lg:text-3xl text-xl text-gray-500">Add New Department</h1>
                <hr className='pb-4 pt-2'/>

                <form onSubmit={headleSubmit}>
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
                    <div className="">
                        <button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded py-4 px-8 my-4 text-white duration-500'>Add Student</button>
                    </div>
                </form>
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