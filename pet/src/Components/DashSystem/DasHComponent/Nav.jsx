import React,{useState,} from 'react'
import {Link, useNavigate} from 'react-router-dom';
 
import { useEffect } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { logo2 } from '../../../assets';
import { MdKeyboardArrowDown, MdOutlinePets,MdScheduleSend,MdInsertPhoto,MdClose  } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { SiPivotaltracker } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Button } from 'react-bootstrap';
import './Nav.css'
 
const Navbar = ({onLinkClick}) => {
 const [Sidebar, setsidebar] = useState(false)
const [open, setopen] = useState(false)
const navigate =useNavigate();


//function that holds navigation to sign up

 
const handlemenucose =()=>{
  if (window.scrollY > 0) {
setopen(false)
return
  } 
}

 useEffect(() => {
 window.addEventListener("scroll",handlemenucose)
   
   return ()=>{
    window.removeEventListener("scroll",handlemenucose)
   }
 }, [])
 

   

const Alert =()=>{
 
   alert("We are sorry to tell you that this service is amoung our future plan we shall let you know once ready")
}
   

 
  
  return (
    <main className='w-full'>
    <div className="z-10 bg-white opacity-80 w-full Navbar1">
        <div className="logdiv" style={{marginTop:"2px"}}><img src={logo2} alt="logo" className="logo"/></div>
    <div className="NavbarRight">
   <ul className="flex justify-center items-center">
    <li ><a href="#home" className="navLinks">Home</a></li>
      <li ><a href="#about" className="navLinks">Help/Support</a></li>
    <li className="navLinks"><a href="#service"> Profile</a></li>
    </ul> 
    </div>
   <div className="NavIcon" style={{width:"35px",height:"35px", boxShadow:"1px 1px 1px 1px black", borderRadius:"10px"}}> 
    <CiMenuKebab  onClick={()=>setopen(!open)} className="smIcon"/>
    {open &&(
      <div className="navsmright bg-white p-3" >
     <ul className="flex flex-col justify-center items-start"> <li ><a href="#home" className="navLinks">Home</a></li>
    <li ><a href="#about" className="navLinks">Help/Support</a></li>
    <li  ><a href="#service">  Profile</a></li>
    </ul>
      </div>
    )}</div>
    </div>
    <div style={{width:"35px",height:'35px'}} className="top-24 left-0 fixed bg-white mt-3 rounded" >
      <MdKeyboardArrowDown  onClick={()=>setsidebar(true)} className="p-2 w-full h-full"/>
    
    
    {Sidebar &&(
     <div className="fixed flex flex-col bg-white item-center -mt-7 rounded-md w-[60%] sm:w-[30%] overflow-auto sidebar">
      <div className= "bg-white border rounded-full w-[35px] h-[35px]" onClick={()=>setsidebar(false)}><MdClose onClick={()=>setsidebar(false)} className="p-2 w-[100%] h-[100%]" /></div>
      <Link to="#" onClick={()=> {onLinkClick("Component2");setsidebar(false)}}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]"> 
        < MdOutlinePets className="p-2 w-[100%] h-[100%]"/></div> Pet Profile</span></Link>
      <Link to="#"  onClick={()=> {onLinkClick("Component3");setsidebar(false)}}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]"> 
        <CiBookmarkCheck  className="p-2 w-[100%] h-[100%]"/></div>Book Appointment</span></Link>
      <Link to="#" onClick={()=> {onLinkClick("Component4");setsidebar(false)}}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]"> 
   
      <MdScheduleSend  className="p-2 w-[100%] h-[100%]" /></div>Pet Care schedule</span></Link>
      <Link to="#" onClick={()=> {onLinkClick("Component5");setsidebar(false)}}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]"> 
        <MdInsertPhoto  className="p-2 w-[100%] h-[100%]"/></div>Pet Photos</span></Link>
      <Link to="#" onClick={Alert}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]"> 
        <SiPivotaltracker  className="p-2 w-[100%] h-[100%]"/></div>Pet Tracking and Gps</span></Link>



        <Link to="#" onClick={()=> {onLinkClick("Component6");setsidebar(false)}}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]">
        <FaUsersCog  className="p-2 w-[100%] h-[100%]"/>  </div>Manage User</span></Link>
         
          <Link to="#"  onClick={()=> {onLinkClick("Component7");setsidebar(false)}}> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]">
         < GrOverview className="p-2 w-[100%] h-[100%]" /> </div>Appointment Overview</span></Link>
          <Link to="#"> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]">
         <IoAnalyticsOutline  className="p-2 w-[100%] h-[100%]"/> </div>Analytics</span></Link>
          <Link to="#"> <span className="flex justify-start gap-3 item-center"> <div className="flex justify-center items-center shadow-md w-[35px] h-[35px]">
         <IoMdSettings  className="p-2 w-[100%] h-[100%]"/> </div>System Setting</span></Link>
         <Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}}  className="bg-lime-500 opacity-80 m-3 rounded-md w-[30%] text-[1rem] text-black montserrat" >LogOut</Button>
     </div>
    )
  }</div>
    </main>
  )
}

export default  Navbar 