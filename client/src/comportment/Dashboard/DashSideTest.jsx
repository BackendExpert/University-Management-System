import React, { useState } from 'react'


const DashSideTest = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
      {/* Sidebar Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>

      {/* Sidebar */}
      <div className={`md:relative fixed top-0 left-0 h-auto bg-gray-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <h1 className="text-xl font-bold">Sidebar</h1>
          <nav>
            <ul>
              <li className="my-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a></li>
              <li className="my-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">About</a></li>
              <li className="my-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Services</a></li>
              <li className="my-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </div>
  )
}

export default DashSideTest