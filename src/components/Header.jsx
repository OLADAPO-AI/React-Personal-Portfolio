import React from 'react'
import { BsToggleOff, BsToggleOn, BsFillSunFill, BsFillMoonStarsFill, BsMenuButtonWideFill } from "react-icons/bs";
import socialdata from '../constants/data';
import { IoMdClose } from "react-icons/io";

function Header({handleClick, open, toggleIcon,darkMode , openDown , toggleUp}) {

    

    
    

   
  return (
    <div>
      <nav className=' w-full flex flex-row justify-between  relative'>
        <div className=' flex flex-row justify-between items-center w-full lg:w-3/4 mt-10 pl-9 pr-6 lg:pr-0'><h1 className=' text-5xl dark:text-slate-200 text-slate-800 italic font-palanquin font-bold'>DIMEJI.</h1>
           

           <button className={`px-5 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                   onClick={toggleIcon}
                  >
                <span className="sr-only">Toggle theme</span>
            {darkMode ? (
            <BsFillSunFill className="w-5 h-5 text-yellow-500" />  
           ) : (
            <BsFillMoonStarsFill className="w-5 h-5 text-gray-900" />
             )}
            </button>
        </div>
        
        <div className=' lg:block hidden bg-cyan-400  h-auto p-6 absolute right-0 rounded-bl-2xl z-30 '>
            <div className='text-white cursor-pointer' onClick={handleClick}>{open ? <IoMdClose size={30}/> : <BsMenuButtonWideFill  size={30}/>}</div>
            <div className=' flex flex-col py-6 gap-6 items-center'>
                {socialdata.map((social, index) => {
                    return(
                        <a  className=' cursor-pointer text-white' key={index}>{social.icon}</a>
                    )
                })}
            </div>

            
        </div> 
        
        
      </nav>
      
      <div className=''>
        
        <div className=' lg:hidden bg-cyan-400 absolute bottom-0  h-auto w-screen  z-30'>
        <div onClick={toggleUp} className='text-white cursor-pointer p-2 flex flex-row items-center justify-center'>{openDown ? <IoMdClose size={25}/> : <BsMenuButtonWideFill  size={25}/>}
           
        
        </div>
             
      </div>

      
    </div>
    </div>
  )
}

export default Header