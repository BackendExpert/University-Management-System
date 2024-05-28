import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'
import axios from 'axios';


const UpdateMyPassword = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const [UpdatePass, SetUpdatePass] = useState({
        currentPass: '',
        newPass: '',
    })

    const headleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/UpdatePassword/' + EmailUser, {UpdatePass})
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Password Updated Successful")
                localStorage.clear()
                navigate('/')
            }
            else{
                alert(res.data.Error)
            }
        })
    }


    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='lg:text-2xl my-2'>
                <div className="bg-white py-4 px-6 rounded shadow-md">
                    <h1 className="text-gray-600">Update Password</h1>
                    <div className="my-4">
                        <form onSubmit={headleSubmit}>
                            <div className="md:grid grid-cols-2 gap-4">
                                <div className="">
                                    <label htmlFor="" className='lg:text-xl text-gray-500'>Current Password</label>
                                    <input type="password" name="" id="" className="lg:h-16 my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Current Password'
                                    onChange={e => SetUpdatePass({...UpdatePass, currentPass:e.target.value})}/>
                                </div>
                                <div className="">
                                    <label htmlFor="" className='lg:text-xl text-gray-500'>New Password</label>
                                    <input type="password" name="" id="" className="lg:h-16 my-2 h-12 w-full rounded bg-gray-200 pl-2" required placeholder='New Password'
                                    onChange={e => SetUpdatePass({...UpdatePass, newPass:e.target.value})}/>
                                </div>
                            </div>
                            <div className="">
                                <button type="submit" className="my-4 text-white py-4 px-8 rounded shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Update Password</button>
                            </div>

                        </form>
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

export default UpdateMyPassword