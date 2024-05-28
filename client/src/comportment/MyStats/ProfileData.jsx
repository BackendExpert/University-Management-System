import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import UserImg from '../../assets/SuperAdmin.png'
import axios from 'axios';


const ProfileData = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    // fetch student My information
    const [MyData, SetMyData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/GetMyDataSTD/' + EmailUser)
        .then(res => SetMyData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    if(RoleUser === "Student"){
        return (
            <div className="">
            <div className="md:flex ">
              <div className="w-full">
                <div className="bg-white py-4 px-8 rounded shadow-md">
                <div className="lg:py-16 py-8 md:flex">
                    <img src="https://cdn-icons-png.flaticon.com/128/2641/2641333.png" alt="" className='lg:h-56 h-[20%] w-auto'/>
                    {
                      MyData.map((stdData, index) => {
                        return (
                          <table border={0} className='mx-2 lg:text-2xl'>
                            <tr className=''>
                                <td className='font-semibold'>Email: </td>
                                <td className='pl-4 text-gray-500'>{EmailUser}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold'>Admission ID: </td>
                                <td className='pl-4 text-gray-500'>{stdData.RegNo}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold'>Register At: </td>
                                <td className='pl-4 text-gray-500'>{stdData.RegisterAt} </td>
                            </tr>
          
                            <tr>
                                <td className='font-semibold'>Password: </td>
                                <td className='pl-4 text-gray-500'>**********</td>
                            </tr>
                        </table>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="bg-white py-4 px-8 my-4 rounded shadow-md">
                  <h1 className="lg:text-2xl font-semibold text-gray-500 py-4">My Personal Data</h1>
                  <hr />
                  <div className="">
                  {
                      MyData.map((stdData, index) => {
                        return (
                          <table border={0} className='mx-2 lg:text-2xl'>
                            <tr className='h-12'>
                                <td className='font-semibold'>First Name: </td>
                                <td className='pl-4 text-gray-500'>{stdData.Fname}</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='font-semibold'>Last Name : </td>
                                <td className='pl-4 text-gray-500'>{stdData.Lname}</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='font-semibold'>NIC : </td>
                                <td className='pl-4 text-gray-500'>{stdData.NIC}</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='font-semibold'>Address : </td>
                                <td className='pl-4 text-gray-500'>{stdData.Address}</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='font-semibold'>Whatsapp : </td>
                                <td className='pl-4 text-gray-500'>{stdData.Address}</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='font-semibold'>landLine : </td>
                                <td className='pl-4 text-gray-500'>{stdData.Address}</td>
                            </tr>
                        </table>
                        )
                      })
                    }                    
                  </div>
                </div>
              </div>
              <div className="md:mx-4 mx-0 w-full md:my-0 my-4">
                <div className="bg-white py-4 px-8  rounded shadow-md">
                {
                      MyData.map((stdData, index) => {
                        return (
                          <div className="">
                            <p className="">Mother's Information</p>
                            <hr />
                              <table border={0} className='mx-2 lg:text-2xl'>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Mother's Name: </td>
                                    <td className='pl-4 text-gray-500'>{stdData.MotherName}</td>
                                </tr>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Mobile Number : </td>
                                    <td className='pl-4 text-gray-500'>{stdData.Mmobile}</td>
                                </tr>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Email : </td>
                                    <td className='pl-4 text-gray-500'>{stdData.MEmail}</td>
                                </tr>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Address : </td>
                                    <td className='pl-4 text-gray-500'>{stdData.MAddress}</td>
                                </tr>
                            </table>
                            <div className="my-2"></div>
                          </div>
                        )
                      })
                    }      
                </div>

                <div className="bg-white py-4 px-8  rounded shadow-md my-4">
                {
                      MyData.map((stdData, index) => {
                        return (
                          <div className="">
                            <p className="">Father's Information</p>
                            <hr />
                              <table border={0} className='mx-2 lg:text-2xl'>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Father's Name: </td>
                                    <td className='pl-4 text-gray-500'>{stdData.FatherName}</td>
                                </tr>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Mobile Number : </td>
                                    <td className='pl-4 text-gray-500'>{stdData.Fmobile}</td>
                                </tr>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Email : </td>
                                    <td className='pl-4 text-gray-500'>{stdData.FEmail}</td>
                                </tr>
                                <tr className='h-12'>
                                    <td className='font-semibold'>Address : </td>
                                    <td className='pl-4 text-gray-500'>{stdData.FAddress}</td>
                                </tr>
                            </table>
                            <div className="my-2"></div>
                          </div>
                        )
                      })
                    }      
                </div>
              </div>
            </div>
          </div>
          )
    }

}

export default ProfileData