import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <div className="mx-8">
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Events </p>
        </div>
    </div>
  )
}

export default Events