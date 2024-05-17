import React, { useState } from 'react'
import MyIcons from '@reacticons/ionicons'

const SignIn = () => {
    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    localStorage.setItem("darkMode", Darkmode) 

  return (
    <div>
        <div className="py-8 lg:px-20 px-8 bg-gray-200 lg:h-screen h-auto w-full">
            <div className="">
                <div className="lg:grid grid-cols-3 gap-2 py-16">
                    <div className=""></div>

                    <div className="bg-white mx-20 my-8">
                        <div className="text-center my-8">
                            <p className="text-blue-500 text-4xl"><MyIcons name='school' size='large'></MyIcons></p>
                            <h1 className="text-2xl">Welcome Back</h1>
                            <p className="text-3xl text-gray-500 my-2">University Management System</p>
                        </div>
                        <hr />
                        <div className="mx-8 ">
                            <form>
                                <div className="my-8">
                                    <label htmlFor="" className='my-2 text-2xl'>Email : </label>
                                    <input type="email" name="" id="" className="my-2 text-xl h-16 w-full rounded bg-gray-200 pl-2 mr-4" required placeholder='Enter Email Address'/>
                                </div>
                                <div className="my-8">
                                    <label htmlFor="" className='my-2 text-2xl'>Password : </label>
                                    <input type="password" name="" id="" className="my-2 text-xl h-16 w-full rounded bg-gray-200 pl-2 mr-4" required placeholder='Enter Password'/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className=""></div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn