import React from 'react'
import {FaBriefcase ,FaUserAlt, FaProjectDiagram, FaAddressCard } from 'react-icons/fa' 
function Sidedisplay({open}) {

    const data = [
        {
            id: 1,
            title: "About",
            icon: <FaUserAlt />,
            link: "/about",
        },
        {
            id: 2,
            title: "Experience",
            icon: <FaBriefcase />,
            link: "/experience",
        },
        {
            id: 3,
            title: "Projects",
            icon: <FaProjectDiagram />,
            link: "/projects",
        },
        {
            id: 4,
            title: "Contact",
            icon: <FaAddressCard />,
            link: "/contact",   
        }
    ]
  return (
    <div className={` bg-cyan-400 md:block  flex flex-col p-10 h-screen w-4/12 fixed ${open ? "right-0" : "right-[-900px]" } transition-all ease-in duration-500 overflow-hidden overflow-y-auto ` }>
      {data.map((link, index) => (
        <a key={index} className=' text-2xl gap-6 py-5 flex flex-row items-center text-white' href="">{link.title} <span>{link.icon}</span></a>
      ))}
    </div>
  )
}

export default Sidedisplay