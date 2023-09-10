import React from 'react'

function Main({darkMode}) {
  return (
    <div className={`flex flex-col  gap-5 ${darkMode ? "dark" : ""}`} >
        <div><h5 className='  font-palanquin text-sm text-center lg:text-start md:text-lg  dark:text-cyan-500 text-amber-600 font-bold'>Hi, my name is</h5></div>
        <div><h1 className=' text-3xl md:text-5xl xl:text-7xl font-semibold text-center lg:text-start font-montserrat dark:text-slate-300 text-cyan-600'>Oladimeji Falusi </h1></div>
        <div><p className=' text-center lg:text-start text-lg xl:text-2xl dark:text-slate-400 text-cyan-500 font-semibold'>I am a <span className='dark:text-cyan-500  text-amber-600'>full stack developer</span> with a passion for building beautiful <br /> and functional user interfaces across all platform.</p></div>
    </div>
  )
}

export default Main