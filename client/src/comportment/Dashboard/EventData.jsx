import React from 'react'

const EventData = () => {
    const notifi = [
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
                    <div className="my-2 mx-4 bg-white py-4 px-8 rounded shadow-md">
                        <div className="flex justify-between">
                            <h1 className="text-gray-500">{no.title}</h1>
                            <p className="">{no.NDate}</p>
                        </div>
                        <hr />
                        <div className="py-2 px-8">
                            {no.NBody}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default EventData