import React from 'react'
import { Link } from 'react-router-dom'

const Exams = () => {
  return (
    <div className='mx-8'>
        <div className="my-4">
            <p>/ <Link to={'/Dashboard/Home'}> <span className='text-blue-500'>Dashbord</span></Link> / Exams </p>
        </div>
    </div>
  )
}

export default Exams