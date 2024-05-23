import React, { useEffect, useState } from 'react'
import { BsBag, BsPeople, BsPersonAdd, BsPersonGear, BsPersonPlusFill, BsPersonSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'
import  secureLocalStorage  from  "react-secure-storage"


const Students = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    const studentData = [
      {id: 1, btnValue: "", name: "Students", value: <CountUp end={20}/>, icon: <BsPeople />, style: "text-green-500"},
      {id: 2, btnValue: "", name: "Requests", value: <CountUp end={20}/>, icon: <BsPersonGear />, style: "text-green-500"},
      {id: 3, btnValue: "", name: "Lock Students", value: <CountUp end={20}/>, icon: <BsPersonSlash />, style: "text-green-500"},
      {id: 4, btnValue: "", name: "My Subjects", value: <CountUp end={20}/>, icon: <BsPersonSlash />, style: "text-purple-500"},
      {id: 5, btnValue: "", name: "My Semesters", value: <CountUp end={20}/>, icon: <BsPersonSlash />, style: "text-green-500"},
      {id: 6, btnValue: "AddStudent", name: "New Students", value: "#", icon: <BsPersonAdd />, style: "text-green-500"},      
    ]

    if(RoleUser !== null && EmailUser !== null && RoleUser !== "Student"){
      return (
        <div className='mx-4'>
            <div className="my-4">
                <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Students </p>
            </div>
    
            <div className="">
              <div className="md:grid grid-cols-4 gap-4">
                {
                  studentData.map((dataStd) => {
                    if(RoleUser === "SuperAdmin") {
                      if(dataStd.id !== 4 && dataStd.id !== 5){
                        return (
                          <div onClick={() => HeadleButtonClick(dataStd.btnValue)} className={`cursor-pointer bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${dataStd.style}`}>                                       
                              <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                                  <div className="">
                                      <h1 className={`text-[180%] ${dataStd.style}`}>{dataStd.value}</h1>
                                      <p className="py-2 text-[120%]">{dataStd.name}</p>
                                  </div>
                                  <div className="">
                                      <p className="text-[200%] text-gray-500">{dataStd.icon}</p>
                                  </div>
                              </div>
                              <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                  All {dataStd.name} 
                              </div>
                          </div> 
                          )
                      }
                    }
                    if(RoleUser === "Hod"){
                      return (
                        <div onClick={() => HeadleButtonClick(dataStd.btnValue)} className={`bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${dataStd.style}`}>                                       
                            <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                                <div className="">
                                    <h1 className={`text-[180%] ${dataStd.style}`}>{dataStd.value}</h1>
                                    <p className="py-2 text-[120%]">{dataStd.name}</p>
                                </div>
                                <div className="">
                                    <p className="text-[200%] text-gray-500">{dataStd.icon}</p>
                                </div>
                            </div>
                            <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                All {dataStd.name} 
                            </div>
                        </div> 
                        )
                    }
                    if(RoleUser === "Lec"){
                      if(dataStd.id === 1 || dataStd.id === 4 || dataStd.id === 5){
                        return (
                          <div className={`bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${dataStd.style}`}>                                       
                              <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                                  <div className="">
                                      <h1 className={`text-[180%] ${dataStd.style}`}>{dataStd.value}</h1>
                                      <p className="py-2 text-[120%]">{dataStd.name}</p>
                                  </div>
                                  <div className="">
                                      <p className="text-[200%] text-gray-500">{dataStd.icon}</p>
                                  </div>
                              </div>
                              <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                                  All {dataStd.name} 
                              </div>
                          </div> 
                          )
                      }
                    }
    
                  })
                }
              </div>
            </div>
            <div className="">
              
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

export default Students