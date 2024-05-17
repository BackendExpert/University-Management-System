import React, { useState } from 'react'
import MyIcons from '@reacticons/ionicons'
import { Link } from 'react-router-dom'


const SignIn = () => {
    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    localStorage.setItem("darkMode", Darkmode) 

    // data 
    const [SignInData, SetSignInData] = useState({
        email: '',
        password: ''
    })

  return (
    <div>
        <div className="py-8 lg:px-20 px-8 bg-gray-200 lg:h-screen h-auto lg:w-full">
            <div className="">
                <div className="lg:grid grid-cols-3 gap-2 lg:py-16">
                    <div className=""></div>

                    <div className="bg-white lg:mx-20 my-16 py-8 rounded shadow-md">
                        <div className="text-center my-8">
                            <p className="text-blue-500 text-4xl pt-8"><MyIcons name='school' size='large'></MyIcons></p>
                            <h1 className="text-2xl">Welcome Back</h1>
                            <p className="lg:text-3xl text-gray-500 my-2">UMS</p>
                        </div>
                        <hr />
                        <div className="mx-8 ">
                            <form>
                                <div className="my-8">
                                    <label htmlFor="" className='my-2 lg:text-2xl'>Email : </label>
                                    <input type="email" name="" id="" className="my-2 text-xl h-16 w-full rounded bg-gray-200 pl-2 mr-4" required placeholder='Enter Email Address'/>
                                </div>
                                <div className="my-8">
                                    <label htmlFor="" className='my-2 lg:text-2xl'>Password : </label>
                                    <input type="password" name="" id="" className="my-2 text-xl h-16 w-full rounded bg-gray-200 pl-2 mr-4" required placeholder='Enter Password'/>
                                </div>
                                <div className="">
                                    <button type='submit' className='w-full h-14 bg-blue-500 rounded text-white duration-500 hover:bg-blue-600'>SignIn</button>
                                </div>
                            </form>

                            <div className="my-1 mb-8">
                                <span><Link><span className='text-blue-600'>Forget Password</span></Link></span>
                            </div>
                            <hr />
                            <div className="">
                                <p>Don't have an Account ? <span className='text-blue-600 cursor-pointer'>SignUp</span></p>
                            </div>
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