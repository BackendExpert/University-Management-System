import React, { useState } from 'react'
import MyIcons from '@reacticons/ionicons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage"


const SignInSignUp = () => {
    // use navigate
    const navigate = useNavigate()

    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    // localStorage.setItem("darkMode", Darkmode) 

    // headleDarkMode
    const headleDarkMode = () => {
        SerDarkmode(true)
    }
    // headleLightMode
    const headleLightMode = () => {
        SerDarkmode(false)
    }

    // headle button values
    const [buttonValue, SetButtonValue] = useState("SignIn")
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    // data 
    const [SignInData, SetSignInData] = useState({
        email: '',
        password: ''
    })

    // headleSignIn
    const headleSignIn = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:8081/SignIn', SignInData)

            const loginToken = res.data.Token;

            //store token in localstorage
            localStorage.setItem('LoginToken', loginToken)

            if(res.data.Msg === "Success"){
                if(res.data.LoginUser[0].is_active === 0 && res.data.LoginUser[0].is_lock === 1){
                    alert('Your Account has been locked. Unauthorized activity has been detected.')
                    localStorage.clear()
                    navigate('/')
                }
                else if(res.data.LoginUser[0].is_active === 0){
                    alert('Your Account is still not Activate Wait for Activate from Admin')
                    localStorage.clear()
                    navigate('/')
                }
                else{
                    //get and store login user role and email
                    const userRole = res.data.LoginUser[0].Role;
                    const userEmail = res.data.LoginUser[0].Email;

                    //store data in localstore so that use secureLocalStorage
                    secureLocalStorage.setItem("Login1", userRole);
                    secureLocalStorage.setItem("login2", userEmail);
                    navigate('/Dashboard/Home');
                }
            }
            else{
                alert(res.data.Error)
            }
        }
        catch(err){
            console.log(err)
        }
       
    }

    // SignUp data
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        SignUpemail: '',
        SignUppassword: ''
    })

    // headleSignUp
    const headleSignUp = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8081/SignUp', SignUpData)
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Rejestation Successfull")
                window.location.reload()
            }
            else{
                alert(res.data.Error)
            }
        })
    }

  return (
    <div>
        <div className={`py-8 md:px-4 px-8 md:h-full lg:h-screen h-auto md:w-full ${!Darkmode ? 'light-mode duration-500 bg-gray-200' : 'dark-mode duration-500 bg-[#1e293b]'}`}>
            {
                !Darkmode ? 
                    <p className='cursor-pointer' onClick={() => headleDarkMode()}>LightMode</p>
                :
                    <p className='cursor-pointer' onClick={() => headleLightMode()}>DarkMode</p>
            }
            
            <div className="">
                <div className="md:grid grid-cols-3 gap-2 md:py-[2%]"> 
                    <div className=""></div>

                    <div className={`md:mx-[2%] my-[8%] py-8 rounded shadow-md ${!Darkmode ? 'light-mode duration-500 bg-white' : 'dark-mode duration-500 bg-[#2c3646]'}`}>
                        <div className="text-center">
                            <p className="text-blue-500 text-xl"><MyIcons name='school' size='large'></MyIcons></p>
                            {
                                (() => {
                                    if(buttonValue === "SignIn"){
                                        return (
                                            <h1 className="text-sm">Welcome Back</h1>
                                        )
                                    }
                                    if(buttonValue === "SignUp"){
                                        return (
                                            <h1 className="text-sm">Welcome To</h1>
                                        )
                                    }
                                })()
                            }
                            <p className="md:text-3xl my-2">UMS</p>
                        </div>
                        <div className="mx-8 ">
                            {
                                (() => {
                                    if(buttonValue === "SignIn"){
                                        return (
                                            <form onSubmit={headleSignIn}>
                                                <div className="my-4">
                                                    <label htmlFor="" className='my-2 md:text-xl'>Email : </label>
                                                    <input type="email" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Email Address'
                                                    onChange={e => SetSignInData({...SignInData, email:e.target.value})}/>
                                                </div>
                                                <div className="my-4">
                                                    <label htmlFor="" className='my-2 md:text-xl'>Password : </label>
                                                    <input type="password" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Password'
                                                    onChange={e => SetSignInData({...SignInData, password:e.target.value})}/>
                                                </div>
                                                <div className="">
                                                    <button type='submit' className='w-full h-14 bg-blue-500 rounded text-white duration-500 hover:bg-blue-600'>SignIn</button>
                                                </div>
                                            </form>
                                        )
                                    }

                                    if(buttonValue === "SignUp"){
                                        return (
                                            <form onSubmit={headleSignUp}>
                                                <div className="my-8">
                                                    <label htmlFor="" className='my-2 md:text-2xl'>Username : </label>
                                                    <input type="text" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Username'
                                                    onChange={e => SetSignUpData({...SignUpData, username:e.target.value})}/>
                                                </div>
                                                <div className="my-8">
                                                    <label htmlFor="" className='my-2 md:text-2xl'>Email : </label>
                                                    <input type="email" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Email Address'
                                                    onChange={e => SetSignUpData({...SignUpData, SignUpemail:e.target.value})}/>
                                                </div>
                                                <div className="my-8">
                                                    <label htmlFor="" className='my-2 md:text-2xl'>Password : </label>
                                                    <input type="password" name="" id="" className={`my-2 text-xl h-16 w-full rounded pl-2 mr-4  ${!Darkmode ? 'bg-gray-200 light-mode duration-500' : 'dark-mode duration-500 bg-[#1e293b]'}`} required placeholder='Enter Password'
                                                    onChange={e => SetSignUpData({...SignUpData, SignUppassword:e.target.value})}/>
                                                </div>
                                                <div className="">
                                                    <button type='submit' className='w-full h-14 bg-blue-500 rounded text-white duration-500 hover:bg-blue-600'>SignUp</button>
                                                </div>
                                            </form>
                                        )
                                    }
                                })()
                            }


                            <div className="my-1 mb-8">
                                {
                                    (() => {
                                        if(buttonValue === "SignIn"){
                                            return (
                                                <span className='text-blue-600'>Forget Password</span>
                                            )
                                        }
                                        else{
                                            <div className=""></div>
                                        }
                                    })()
                                }
                                
                            </div>
                            <div className="">
                                {
                                    (() => {
                                        if(buttonValue === "SignIn"){
                                            return (
                                                <p>Don't have an Account ? <span onClick={() => HeadleButtonClick("SignUp")} className='text-blue-600 cursor-pointer'>SignUp</span></p>
                                            )
                                        }
                                        if(buttonValue === "SignUp"){
                                            return (
                                                <p>Already have an Account ? <span onClick={() => HeadleButtonClick("SignIn")} className='text-blue-600 cursor-pointer'>SignIn</span></p>
                                            )
                                        }
                                    })()
                                }
                                
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

export default SignInSignUp