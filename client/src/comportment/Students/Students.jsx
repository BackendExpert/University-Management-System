import React from 'react'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const Students = () => {
    const studentData = [
      {name: "Students", value: <CountUp end={20}/>, icon: <BsBag />, style: "text-green-500"},
      {name: "Students", value: <CountUp end={20}/>, icon: <BsBag />, style: "text-green-500"},
      {name: "Students", value: <CountUp end={20}/>, icon: <BsBag />, style: "text-green-500"},
      {name: "Students", value: <CountUp end={20}/>, icon: <BsBag />, style: "text-green-500"},      
    ]
  return (
    <div className='mx-8'>
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Students </p>
        </div>

        <div className="">
          <div className="lg:grid grid-cols-4 gap-4">
            {
              studentData.map((dataStd) => {
                return (
                    <div className="cursor-pointer">
                        <div className="bg-white rounded shadow-md py-12 px-8">
                            <div className="flex w-full justify-between">
                                <div className="">
                                    <h1 className={`text-4xl ${dataStd.style}`}>{dataStd.value}</h1>
                                    <p className="py-2 text-xl">{dataStd.name}</p>
                                </div>
                                <div className="">
                                    <p className="text-5xl text-gray-500">{dataStd.icon}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-white py-6 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                            All {dataStd.name} 
                        </div>
                    </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Students