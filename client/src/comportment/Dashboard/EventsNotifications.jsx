import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'
import NotificationData from './NotificationData';

const EventsNotifications = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    // test notifications


    if(RoleUser !== null && EmailUser !== null) {
        return (
            <div>
                <div className="bg-white py-4 px-6 my-4">
                        {
                            (() => {
                                if(buttonValue === 0){
                                    return (
                                        <div className="flex">
                                            <div className="cursor-pointer mx-2 py-2 border-b-2 border-blue-500">Notifications</div>
                                            <div className="cursor-pointer mx-2 py-2" onClick={() => HeadleButtonClick("Events")}>Events</div> 
                                        </div>
                                    )
                                }
                                if(buttonValue === "Events"){
                                    return (
                                        <div className="flex">
                                            <div className="cursor-pointer mx-2 py-2 " onClick={() => HeadleButtonClick(0)}>Notifications</div>
                                            <div className="cursor-pointer mx-2 py-2 border-b-2 border-blue-500">Events</div> 
                                        </div>
                                    )
                                }
                            })()
                        }

                    <hr  className='my-4'/> 
                        {
                            (() => {
                                if(buttonValue === 0){
                                    return (
                                        <NotificationData />
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

export default EventsNotifications