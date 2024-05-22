import React from 'react'
import { Link } from 'react-router-dom'


const Expenses = () => {
  return (
    <div className='mx-8'>
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / My Payments </p>
        </div>
    </div>
  )
}

export default Expenses