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

    // test notifications
    const Notificationsss = [
        {title: 'Subject', bodyN: 'The Subject 4894 has been Added', data: '2024/05/22 10:30'},
        {title: 'Subject', bodyN: 'The Subject 894  has been Added', data: '2024/05/22 10:30'},
        {title: 'Subject', bodyN: 'The Subject 4894 has been Added', data: '2024/05/22 10:30'},
        {title: 'Subject', bodyN: 'The Subject 4894 has been Added', data: '2024/05/22 10:30'},
        {title: 'Subject', bodyN: 'The Subject 4894 has been Added', data: '2024/05/22 10:30'},
        {title: 'Subject', bodyN: 'The Subject 4894 has been Added', data: '2024/05/22 10:30'},
        {title: 'Subject', bodyN: 'The Subject 4894 has been Added', data: '2024/05/22 10:30'},        
    ]

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
                    <p>{buttonValue}</p>

                    
                        {
                                Notificationsss.map((noti, index) => {
                                    if(buttonValue === 0){
                                        return (
                                            <div className="flex" key={index}>
                                                hi Noftifications {noti.title}
                                            </div>
                                        )
                                    }
                                })


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