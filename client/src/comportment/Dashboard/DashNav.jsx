import React from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"


const DashNav = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-gray-200 py-4 px-8 rounded-xl shadow-xl mb-8'>
                <p className="">{DarkMode}</p>
                <div className="flex ">
                    {
                        (() => {
                            if(RoleUser === "SuperAdmin"){
                                return (
                                    <p className="text-gray-500 text-2xl font-semibold">SuperAdmin Dashbord</p>
                                )
                            }
                        })()
                    }
                </div>
                <div className={`${!DarkMode ? 'light-mode duration-500 bg-gray-200' : 'dark-mode duration-500 bg-[#1e293b]'}`}>
                    Hi alll
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

export default DashNav