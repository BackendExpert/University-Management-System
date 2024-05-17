import React, { useState } from 'react'


const SignIn = () => {
    // sent darkMode
    const [Darkmode, SerDarkmode] = useState(false)
    localStorage.setItem("darkMode", Darkmode) 

  return (
    <div>
        <div className="my-8 lg:mx-20 mx-8 bg-gray-500">

        </div>
    </div>
  )
}

export default SignIn