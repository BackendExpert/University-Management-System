import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewStd = () => {
    const { id } = useParams()

    // when came to this page the page scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

  return (
    <div className='my-4 mx-8'>
        <div className="bg-white py-4 px-6 rounded shadow-md">
            <div className="my-4">
                <Link to={'../Students'}>
                    <button className='bg-blue-500 py-2 px-4 rounded text-white shadow-md duration-500 hover:bg-blue-600'>Back</button>
                </Link>
            </div>
            <h1 className="">Student Data : <span className="font-semibold">{id}</span></h1>
            <hr className="py-2" />
        </div>
    </div>
  )
}

export default ViewStd