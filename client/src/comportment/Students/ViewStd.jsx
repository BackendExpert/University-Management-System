import React from 'react'
import { useParams } from 'react-router-dom'

const ViewStd = () => {
    const { id } = useParams()
  return (
    <div className='my-4 mx-8'>
        <div className="bg-white py-4 px-6 rounded shadow-md">
            <h1 className="">Student Data : {id}</h1>
        </div>
    </div>
  )
}

export default ViewStd