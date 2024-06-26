import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsMortarboard, BsBuilding, BsMortarboardFill, BsPersonCheck, BsCashCoin, BsCalendarEvent } from "react-icons/bs";
import EventsNotifications from './EventsNotifications';
import axios from 'axios';

const DashHome = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    // const DarkMode = localStorage.getItem('darkMode');

    // count superAdmin data
    const [CountStudens, SetCountStudents] = useState(0)
    const [CountDets, SetCountDets] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const StdCount = await axios.get('http://localhost:8081/AllStudents');
                SetCountStudents(StdCount.data.StdResult);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                const deptCount = await axios.get('http://localhost:8081/AllDepts');
                SetCountDets(deptCount.data.StdResult);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, [])

    // dashdata
    const DashData = [
        {id: 1, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={CountStudens} />, style: "text-green-500"},
        {id: 2, name: "Lecturers", icon: <BsPersonVideo3 />, value: <CountUp end={20} />, style: "text-blue-500"},
        {id: 3, name: "Subjects", icon: <BsFileEarmarkText />, value: <CountUp end={20} />, style: "text-yellow-500"},
        {id: 4, name: "Staff", icon: <BsPeople />, value: <CountUp end={20} />, style: "text-red-500"},
        {id: 5, name: "Courses", icon: <BsMortarboard />, value: <CountUp end={20} />, style: "text-purple-500"},
        {id: 6, name: "Departments", icon: <BsBuilding />, value: <CountUp end={CountDets} />, style: "text-yellow-500"},
        {id: 7, name: "Events", icon: <BsCalendarEvent />, value: <CountUp end={20} />, style: "text-yellow-500"},        
    ]

    const studentData = [
        {id: 1, name: "My Course", icons: <BsMortarboard />, value: "Bsc Information Technology", style: "text-blue-500"},
        {id: 2, name: "My Department", icons: <BsBuilding />, value: "Computing", style: "text-red-500"},
        {id: 3, name: "Expenses", icons: <BsCashCoin />, value: <CountUp end={10000} />, style: "text-green-500"},
    ]

    // fetch student My information
    const [MyData, SetMyData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/GetMyDataSTD/' + EmailUser)
        .then(res => SetMyData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='mx-2'>
                <div className="my-4">
                    <p>/ Dashbord /</p>
                </div>

                {
                        (() => {
                            if(RoleUser === "Student"){
                                return (
                                    <div className="">
                                        <div className="md:grid grid-cols-3 gap-4 my-4 mr-4 ">
                                            {
                                                studentData.map((stdData) => {
                                                    return (
                                                        <Link to={stdData.link}>
                                                            <div className={`h-full bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${stdData.style}`}>                                       
                                                                <div className="lg:py-8 flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                                                                    <div className="">
                                                                        <h1 className={`text-[100%] ${stdData.style}`}>{stdData.value}</h1>
                                                                        <p className="py-2 text-[120%] lg:text-3xl lg:mt-2">{stdData.name}</p>
                                                                    </div>
                                                                    <div className="">
                                                                        <p className="lg:text-5xl text-[200%] text-gray-500">{stdData.icons}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                                                    {stdData.name} 
                                                                </div>
                                                            </div>  
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="md:grid grid-cols-2 gap-4">
                                            <div className="md:mr-8 my-2 md:w-full">
                                                <div className="bg-white py-4 px-6 rounded shadow-md">
                                                    <h1 className="text-2xl font-semibold text-gray-500">My Information</h1>
                                                    <hr  className='mt-4'/>
                                                    <div className="py-8 md:flex">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png" alt="" className='h-[20%] w-auto'/>
                                                        {
                                                            MyData.map((DataSTD) => {
                                                                return (
                                                                    <table border={0} className='mx-2' >
                                                                        <tr className=''>
                                                                            <td className='font-semibold'>Email: </td>
                                                                            <td className='pl-4 text-gray-500'>{EmailUser} </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='font-semibold'>Admission ID: </td>
                                                                            <td className='pl-4 text-gray-500'>{DataSTD.RegNo}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='font-semibold'>Admission Date: </td>
                                                                            <td className='pl-4 text-gray-500'>{DataSTD.RegisterAt} </td>
                                                                        </tr>
            
                                                                        <tr>
                                                                            <td className='font-semibold'>Gender: </td>
                                                                            <td className='pl-4 text-gray-500'>{DataSTD.Gender} </td>
                                                                        </tr>
                                                                    </table>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className="">
                                                        <Link to={'/Dashboard/MyProfile'}>
                                                            <button type="button" class="rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 py-2 px-6 hover:shadow-md">
                                                                More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="mr-8 my-2 w-full">
                                                <div className="bg-white h-full shadow-md py-4 px-6 rounded ">                                                    
                                                    <h1 className="text-2xl font-semibold text-gray-500">My Course</h1>
                                                    <hr  className='mt-4'/>
                                                    <div className="py-8 md:flex">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/2997/2997322.png" alt="" className='h-[20%] w-auto'/>
                                                        <table border={0} className=''>
                                                            <tr className=''>
                                                                <td className='font-semibold'>Course Name: </td>
                                                                <td className='pl-4 text-gray-500'>BSc in IT </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Course Code: </td>
                                                                <td className='pl-4 text-gray-500'>IT5/BSC </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-semibold'>Batch No: </td>
                                                                <td className='pl-4 text-gray-500'>BSC/IT/01 </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='font-semibold'>Registation No: </td>
                                                                <td className='pl-4 text-gray-500'>ABC/123/23D </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="">
                                                        <Link to={'#'}>
                                                            <button type="button" class="rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 py-2 px-6 hover:shadow-md">
                                                                More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    
                                                </div>
                                            </div> */}
                                            <div className="mr-8 my-2 w-full">
                                                <div className="bg-white h-full shadow-md py-4 px-6 rounded">
                                                    <h1 className="text-2xl font-semibold text-gray-500">Current GPA</h1>      
                                                    <hr  className='mt-4'/>                                              
                                                    <div className="py-8 flex">
                                                        <img src="https://cdn-icons-png.flaticon.com/128/3755/3755243.png" alt="" className='h-[20%] w-auto'/>
                                                        <div className="text-center w-full my-4">
                                                            <p className="text-2xl font-semibold text-yellow-500">3.25</p>
                                                            <p className="my-1">OverRoll GPA</p>
                                                            <p className="my-1">Second Upper</p>
                                                        </div>
                                                    </div> 
                                                    <div className="">
                                                        <Link to={'#'}>
                                                            <button type="button" class="rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 py-2 px-6 hover:shadow-md">
                                                                More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                            if(RoleUser === "SuperAdmin") {
                                return (
                                    <div className="">
                                        <div className="md:grid grid-cols-4 gap-4">
                                            {
                                                DashData.map((dataDash) => {
                                                    return (
                                                    <div className={`bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${dataDash.style}`}>                                       
                                                        <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                                                            <div className="">
                                                                <h1 className={`text-[180%] ${dataDash.style}`}>{dataDash.value}</h1>
                                                                <p className="py-2 text-[120%]">{dataDash.name}</p>
                                                            </div>
                                                            <div className="">
                                                                <p className="text-[200%] text-gray-500">{dataDash.icon}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                                            All {dataDash.name} 
                                                        </div>
                                                    </div> 
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                )
                            }
                            if(RoleUser === "Hod") {
                                return (
                                    <div className="">
                                        <div className="md:grid grid-cols-4 gap-4">
                                            {
                                                DashData.map((dataDash) => {
                                                    if(dataDash.id !== 4 && dataDash.id !== 6){
                                                        return (
                                                            <div className={`bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${dataDash.style}`}>                                       
                                                                <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                                                                    <div className="">
                                                                        <h1 className={`text-[180%] ${dataDash.style}`}>{dataDash.value}</h1>
                                                                        <p className="py-2 text-[120%]">{dataDash.name}</p>
                                                                    </div>
                                                                    <div className="">
                                                                        <p className="text-[200%] text-gray-500">{dataDash.icon}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                                                    {dataDash.name} in Dept
                                                                </div>
                                                            </div> 
                                                        )
                                                    }
                                                })
                                            }
                                        </div>

                                    </div>
                                )
                            }
                        })()
                    }

                    <div className="">
                        <EventsNotifications />
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

export default DashHome