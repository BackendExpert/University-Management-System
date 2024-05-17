import React, { useState } from 'react'


const SignIn = () => {
    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    localStorage.setItem("darkMode", Darkmode) 

  return (
    <div>
        <div className="py-8 lg:px-20 px-8 bg-gray-200 lg:h-screen h-auto w-full">

        </div>
    </div>
  )
}

export default SignIn