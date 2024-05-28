import React from 'react'

const AllDepts = () => {
  return (
    <div className="">
        <div className='bg-white py-4 px-8 rounded shadow-md'>
            <h1 className="lg:text-3xl text-xl text-gray-500">Departments</h1>
            <hr className='pb-4 pt-2'/>
        </div>

        <div class="overflow-x-auto my-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 md:block hidden">
                            Dept No
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dept Name 
                        </th>
                        <th scope="col" class="px-6 py-3 md:block hidden">
                            Dept Descriptiono
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>            
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>   

    </div>

    )
}

export default AllDepts