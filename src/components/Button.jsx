import React from 'react'

function Button() {
  return (
    <div className=' flex flex-row items-center md:mt-12  justify-center gap-8 px-5 lg:mr-40 mt-6'>
        <button className=' bg-gradient-to-r from-[#559297] to-[#7ba949] hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 w-4/6 lg:w-[150px] font-medium rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105'>View Project</button>

        <button className=' bg-gradient-to-r from-[#ffffff] to-[#000000] hover:from-white hover:to-white hover:text-black focus:outline-none font-medium focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 w-4/6 lg:w-[150px] rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Resume</button>
    </div>
  )
}

export default Button