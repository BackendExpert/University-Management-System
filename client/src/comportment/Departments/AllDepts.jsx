import React from 'react'

const AllDepts = () => {
  return (
    <div className="">
        <div className='bg-white py-4 px-8 rounded shadow-md'>
            <h1 className="lg:text-3xl text-xl text-gray-500">Departments</h1>
            <hr className='pb-4 pt-2'/>
        </div>

        <table className='max-w-full'>
            <thead>
                <tr>
                    <th className='font-semibold'>#</th>
                    <th>Dept Name</th>
                    <th>Dept Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='font-semibold'>1</td>
                    <td>IT</td>
                    <td>Information Tech</td>
                    <th>Edit</th>
                </tr>
            </tbody>
        </table>

    </div>

    )
}

export default AllDepts