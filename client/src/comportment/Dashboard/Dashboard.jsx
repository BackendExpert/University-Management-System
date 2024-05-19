import React from 'react'
import DashSide from './DashSide';
import { Outlet } from 'react-router-dom';
import DashNav from './DashNav';


const Dashboard = () => {
  return (
    <div className="flex">
      <DashSide />
      <div className="flex-1 p-6">
        <DashNav />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard