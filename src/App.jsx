import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Button from "./components/Button"
import Sidedisplay from "./components/Sidedisplay"
import Downdisplay from "./components/Downdisplay"

function App() {
  const [open, setOpen] = React.useState(false)
  function toggle() {
    setOpen(!open)
  }

  const [darkMode , setDarkMode] = React.useState(false)
 
  function toggleTheme() {
    setDarkMode(!darkMode)
  }

  const [openDown, setOpenDown] = React.useState(false) 
  function toggleUp() {
    setOpenDown(!openDown)
  }

  return (

    <main className={darkMode ? "dark" : ""} >

      <main className={`w-screen h-screen flex flex-col  dark:bg-dark bg-light md:bg-center bg-cover bg-left-bottom relative`}>
       
       <Header 
         darkMode={darkMode}
         toggleIcon={toggleTheme}
         handleClick={toggle}
         open={open}
         openDown={openDown}
         toggleUp={toggleUp}
       />  
       <section className=" flex flex-col md:mt-24 mt-32 lg:mt-10 px-3 justify-center items-center"><Main 
         darkMode={darkMode}
       /></section>
       <Button />
       <Sidedisplay 
         open={open}
       />
       <Downdisplay 
          openDown={openDown}
       />
       
       </main> 
    </main>
    
  )
}

export default App
