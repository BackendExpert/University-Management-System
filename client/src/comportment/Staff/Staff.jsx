import React from 'react'
import { Link } from 'react-router-dom'


const Staff = () => {
  return (
    <div className='mx-8'>
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Teachers </p>
        </div>
    </div>
  )
}

export default Staff