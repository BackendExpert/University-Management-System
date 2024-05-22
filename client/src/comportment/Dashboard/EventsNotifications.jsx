import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'

const EventsNotifications = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    if(RoleUser !== null && EmailUser !== null) {
        return (
            <div>
                <div className="bg-white py-4 px-6 my-4">
                    <div className="flex">
                        {
                            (() => {
                                if(buttonValue === 0){
                                    return (
                                        <div className="mx-2">Notifications</div>
                                    )
                                }
                                if(buttonValue === "Events"){
                                    return (
                                        <div className="mx-2">Events</div>    
                                    )
                                }
                            })()
                        }
                        <div className="mx-2">Notifications</div>
                        <div className="mx-2">Events</div>                        
                    </div>
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