import React from 'react'
import DashSide from './DashSide';
import { Outlet } from 'react-router-dom';
import DashNav from './DashNav';
import DashSideTest from './DashSideTest';


const Dashboard = () => {
  return (
    <div className="flex">
    <DashSideTest />
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold">Main Content</h1>
      <p>Welcome to the main content area.</p>
    </div>
  </div>
    // <div className="">
    //   {/* <DashSide /> */}
    //   <DashSideTest />
    //   <div className="flex-1 px-2 py-4 bg-gray-200">
    //     <DashNav />
    //     <Outlet />
    //   </div>
    // </div>
  )
}

export default Dashboard