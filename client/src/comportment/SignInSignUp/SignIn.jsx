import React, { useState } from 'react'
import MyIcons from '@reacticons/ionicons'

const SignIn = () => {
    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    localStorage.setItem("darkMode", Darkmode) 

  return (
    <div>
        <div className="py-8 lg:px-20 px-8 bg-gray-200 lg:h-screen h-auto w-full">
            <div className="bg-white mx-20">
                <div className="lg:grid grid-cols-2 gap-2">
                    <div className="text-center">
                        <p className="text-blue-500"><MyIcons name='school' size='large'></MyIcons></p>
                        <h1 className="">Welcome Back</h1>
                        <p className="">University Management System</p>
                    </div>
                    <div className="">
                        <form>
                            <div className="">
                                <label htmlFor="">Email : </label>
                                <input type="email" name="" id="" className="" required placeholder='Enter Email Address'/>
                            </div>
                            <div className="">
                                <label htmlFor="">Password : </label>
                                <input type="email" name="" id="" className="" required placeholder='Enter Password'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn