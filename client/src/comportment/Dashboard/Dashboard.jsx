import React from 'react'
import DashSide from './DashSide';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="flex">
      <DashSide />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard