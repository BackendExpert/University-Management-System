import React, { useEffect, useState } from 'react'
import { BsBag, BsPeople, BsPersonAdd, BsPersonGear, BsPersonPlusFill, BsPersonSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'
import  secureLocalStorage  from  "react-secure-storage"

const AddStudent = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');
  return (
    <div>AddStudent</div>
  )
}

export default AddStudent