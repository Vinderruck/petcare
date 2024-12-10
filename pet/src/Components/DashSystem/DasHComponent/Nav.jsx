import React,{useState,} from 'react'
import {Link, useNavigate} from 'react-router-dom';
 
import { useEffect } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { logo2 } from '../../../assets';
import { MdKeyboardArrowDown } from "react-icons/md";
 
const Navbar = () => {
 
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
    <div style={{width:"35px",height:'35px'}} className="top-24 left-0 fixed bg-white opacity-80 mt-3 rounded" ><MdKeyboardArrowDown className="p-2 w-full h-full"/></div>
    </main>
  )
}

export default  Navbar 