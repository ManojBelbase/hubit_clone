import React, { useState } from 'react'
import Toolbar from "../Component/Navigation/Toolbar"
import Sidebar from "../Component/Navigation/sidebar/Sidebar"

const Layout = ({children}) => {
    const[show,setShow] = useState(false);
    function ShowSideBar(){
      setShow(pre=>{
        return !show;
      })
    }
  return (
    <div className=' text-white h-screen w-screen'>
        <Toolbar ShowSideBar={ShowSideBar} /> 
        <Sidebar Show={show} ShowSideBar={ShowSideBar} />
       
        <div className=''>{children}</div>
    </div>
  )
  }
export default Layout