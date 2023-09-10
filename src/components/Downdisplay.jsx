import React from 'react'
import {FaUserAlt, FaBriefcase, FaProjectDiagram, FaAddressCard, FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {IoMailOutline} from 'react-icons/io5'

function Downdisplay({openDown}) {
    const downData = [
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


    const downsocialData = [
        {
         icon : <IoMailOutline />,
         social : "",
        },
     
        {
         icon : <FaLinkedinIn />,
         social : "",
        },
     
        {
         icon :<FaGithub />,
         social : "",
        },
     
        {
         icon : <FaInstagram />,
         social : "",
        },
     
        {
         icon : <FaTwitter />,
         social : "",
        },
     
        {
         icon : <FaFacebook />,
         social : "",
        },
     
     
     ]
     
    
     return (
        <div className={` lg:hidden relative bg-cyan-400 ${openDown ? "bottom-[500px]":  "bottom-[-600px]" } transition-all ease-in duration-500 overflow-hidden overflow-x-auto ${openDown ? "md:bottom-[450px]" :"sm:bottom-[-700px]"} `}>

           


           <div className={` bg-cyan-400  flex flex-col p-10 h-screen w-screen fixed justify-center items-center   ` }>

           <div className=' flex flex-row absolute top-9 text-2xl gap-5 justify-between '>
                {downsocialData.map((social, index) => {
                    return(
                        <a  className=' cursor-pointer text-white' key={index}>{social.icon}</a>
                    )
                })}
            </div>
            
        {downData.map((link, index) => (
        <a key={index} className=' text-2xl cursor-pointer gap-6 py-5 flex flex-row items-center text-white' href="">{link.title} <span>{link.icon}</span></a>
      ))}
    </div>
        </div>
       
     
  )
}

export default Downdisplay