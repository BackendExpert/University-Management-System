import React from 'react'

const NotificationData = () => {
    const notifi = [
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        {title: "Notification 1", NBody: "Body of Notification", NDate: "2024/05/22 10:30"},
        
    ]
  return (
    <div>
        {
            notifi.map((no, index) => {
                return (
                    <div className="my-2 mx-4 bg-white">
                        <div className="flex">
                            <h1 className="">{no.title}</h1>
                            <p className="">{no.NDate}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NotificationData