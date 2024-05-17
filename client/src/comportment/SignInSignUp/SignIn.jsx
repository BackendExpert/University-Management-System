import React, { useState } from 'react'
import MyIcons from '@reacticons/ionicons'
import { Link } from 'react-router-dom'


const SignIn = () => {
    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    localStorage.setItem("darkMode", Darkmode) 

    // headleDarkMode
    const headleDarkMode = () => {
        SerDarkmode(true)
    }
    // headleLightMode
    const headleLightMode = () => {
        SerDarkmode(false)
    }

    // headle button values
    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    // data 
    const [SignInData, SetSignInData] = useState({
        email: '',
        password: ''
    })

    // headleSignIn
    const headleSignIn = (e) => {
        e.preventDefault();
        
        // send data
    }


  return (
    <div>
        <div className={`py-8 lg:px-20 px-8 lg:h-screen h-auto lg:w-full ${!Darkmode ? 'light-mode duration-500 bg-gray-200' : 'dark-mode duration-500 bg-[#1e293b]'}`}>
            {
                !Darkmode ? 
                    <p className='cursor-pointer' onClick={() => headleDarkMode()}>LightMode</p>
                :
                    <p className='cursor-pointer' onClick={() => headleLightMode()}>DarkMode</p>
            }
            
            <div className="">
                <div className="lg:grid grid-cols-3 gap-2 lg:py-16"> 
                    <div className=""></div>

                    <div className={`lg:mx-20 my-16 py-8 rounded shadow-md ${!Darkmode ? 'light-mode duration-500 bg-white' : 'dark-mode duration-500 bg-[#2c3646]'}`}>
                        <div className="text-center my-8">
                            <p className="text-blue-500 text-4xl pt-8"><MyIcons name='school' size='large'></MyIcons></p>
                            <h1 className="text-2xl">Welcome Back</h1>
                            <p className="lg:text-3xl my-2">UMS</p>
                        </div>
                        <div className="mx-8 ">
                            <form onSubmit={headleSignIn}>
                                <div className="my-8">
                                    <label htmlFor="" className='my-2 lg:text-2xl'>Email : </label>
                                    <input type="email" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Email Address'
                                    onChange={e => SetSignInData({...SignInData, email:e.target.value})}/>
                                </div>
                                <div className="my-8">
                                    <label htmlFor="" className='my-2 lg:text-2xl'>Password : </label>
                                    <input type="password" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Password'
                                    onChange={e => SetSignInData({...SignInData, password:e.target.value})}/>
                                </div>
                                <div className="">
                                    <button type='submit' className='w-full h-14 bg-blue-500 rounded text-white duration-500 hover:bg-blue-600'>SignIn</button>
                                </div>
                            </form>

                            <div className="my-1 mb-8">
                                <span><Link><span className='text-blue-600'>Forget Password</span></Link></span>
                            </div>
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