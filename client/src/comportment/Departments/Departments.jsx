import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios';
import { BsBuilding, BsBuildingAdd } from 'react-icons/bs';
import AddDept from './AddDept';
import AllDepts from './AllDepts';

const Departments = () => {
  const navigate = useNavigate()
  //curent login user
  const RoleUser = secureLocalStorage.getItem("Login1");
  const EmailUser = secureLocalStorage.getItem("login2");

  
  const [buttonValue, SetButtonValue] = useState(0)
  const HeadleButtonClick = (clickValue) => {
      SetButtonValue(clickValue)   
  }

  const [CountDets, SetCountDets] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const deptCount = await axios.get('http://localhost:8081/AllDepts');
            SetCountDets(deptCount.data.StdResult);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    fetchData();
}, [])

  const DeptData = [
    {name: "Departments", btnValue: 0, value: <CountUp end={CountDets} />, icon: <BsBuilding />, style: "text-blue-500"},
    {name: "Add New Departments", btnValue: "AddDept", value: "#", icon: <BsBuildingAdd />, style: "text-green-500"},
  ]
  if(EmailUser !== null && RoleUser === "SuperAdmin"){
    return (
      <div className="mx-8">
          <div className="my-4">
              <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Departments </p>
          </div>
          <div className="">
            <div className="md:grid grid-cols-3 gap-4 my-4 mr-4 ">
              {
                DeptData.map((Depts) => {
                  return (
                    <div onClick={() => HeadleButtonClick(Depts.btnValue)} className={`cursor-pointer h-full bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${Depts.style}`}>                                       
                      <div className="lg:py-8 flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                          <div className="">
                              <h1 className={`text-[180%] ${Depts.style}`}>{Depts.value}</h1>
                              <p className="py-2 text-[120%] lg:text-3xl lg:mt-2">{Depts.name}</p>
                          </div>
                          <div className="">
                              <p className="lg:text-5xl text-[200%] text-gray-500">{Depts.icon}</p>
                          </div>
                      </div>
                      <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                          {Depts.name} 
                      </div>
                  </div>  
                  )
                })
              }
            </div>
            {
              (() => {
                if(buttonValue === 0){
                  return (
                    <AllDepts />
                  )
                }
                if(buttonValue === "AddDept"){
                  return (
                    <AddDept />
                  )
                }
              })()
            }
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

export default Departments