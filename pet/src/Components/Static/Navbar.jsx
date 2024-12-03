import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {catdog, catplaying, catsitting, dogjump, Dogtraining, dogtreament, logo2} from "../../assets/index";
import Wrapper from '../HOC/Wrapper';
import './home.css'
import { useEffect } from 'react';
import { CiMenuKebab } from "react-icons/ci";
 
const Navbar = () => {
const [currentIndex, setcurrentIndex] = useState(0)


  const slide=[
    {id:1, src:catdog,alt:'catdog'},
    // {id:1, src:catplaying,alt:'catdog'},
    // {id:1, src:catsitting,alt:'catdog'},
    // {id:1, src:Dogtraining,alt:'catdog'},
   
  
    
    
  ]


  const nextslide =()=>{
    setcurrentIndex((prevIndex) => (prevIndex + 1) % slide.length)
  }
  const preIndex = ()=>{
    setcurrentIndex((prevIndex)=> prevIndex === 0 ? slide.length -1 : prevIndex - 1) 
  }


  useEffect(() => {
     const time =setInterval(nextslide,3000)
     return ()=>clearInterval(time)
  }, [])
  
  return (
    <main className='w-full'>
    <div className="bg-white opacity-80 w-full Navbar">
        <div className="logdiv"><img src={logo2} alt="logo" className="logo"/></div>
    <div className="NavbarRight">
      <Link to="#home" className="navLinks">Home</Link>
    <Link to="#" className="navLinks">About</Link>
    <Link to="#" className="navLinks">Service offered</Link>
    <Link to="#" className="navLinks">Booking </Link>
    </div>
   <div className="NavIcon" style={{width:"35px",height:"35px", boxShadow:"1px 1px 1px 1px black", borderRadius:"10px"}}> 
    <CiMenuKebab className="smIcon"/></div>
    </div>
    <h1  style={{justifyContent:"center",alignItems:"center",textAlign:"center",margin:"3px",color:"white", fontSize:"1.5rem"}}>WElCOME TO TAZAMA RAFIKI PET CARE</h1>
   
   <div style={{width:"80%",justifyContent:"center",alignItems:'center',borderRadius:"10px",margin:"auto"}}>
     <div className="container" >
      {slide.map((slide,index)=>{
        return ( <img 
        key={slide.id}
        src={slide.src} alt={slide.alt} className={`slide  ${index === currentIndex ? "active" : ""}`}/>
        )
      })}
      </div>
      </div>
    <div style={{background:'black',width:"100%",height:"2px", marginBottom:"2px"}}/>
    <p>
      Your pet's happiness, health, and well-being are our top priorities. At
      [Your Site Name], we provide exceptional care, trusted advice, and a
      loving touch for every furry, feathered, or scaly friend. 🐾
    </p>
   

    </main>
  )
}

export default Wrapper (Navbar,'home')