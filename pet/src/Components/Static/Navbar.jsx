import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {catdog, catplaying, catsitting, dogjump, Dogtraining, dogtreament, logo2} from "../../assets/index";
import Wrapper from '../HOC/Wrapper';
import './home.css'
import { useEffect } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import {Button} from "react-bootstrap"
 
const Navbar = () => {
const [currentIndex, setcurrentIndex] = useState(0)
const [open, setopen] = useState(false)


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
        <div className="logdiv" style={{marginTop:"2px"}}><img src={logo2} alt="logo" className="logo"/></div>
    <div className="NavbarRight">
      <Link to="#home" className="navLinks">Home</Link>
    <Link to="#" className="navLinks">About</Link>
    <Link to="#" className="navLinks">Service offered</Link>
    <Link to="#" className="navLinks">Booking </Link>
    </div>
   <div className="NavIcon" style={{width:"35px",height:"35px", boxShadow:"1px 1px 1px 1px black", borderRadius:"10px"}}> 
    <CiMenuKebab  onClick={()=>setopen(!open)} className="smIcon"/>
    {open &&(
      <div className="navsmright bg-white" >
         <Link to="#home" className="navLinks">Home</Link>
    <Link to="#" className="navLinks">About</Link>
    <Link to="#" className="navLinks">Service offered</Link>
    <Link to="#" className="navLinks">Booking </Link>
      </div>
    )}</div>
    </div>
    <h1  style={{justifyContent:"center",alignItems:"center",textAlign:"center",margin:"3px",color:"white", fontSize:"1.5rem"}}>WElCOME TO TAZAMA RAFIKI PET CARE</h1>
   
   <div style={{width:"80%",justifyContent:"center",alignItems:'center',borderRadius:"10px",margin:"auto"}}>
    
      {slide.map((slide,index)=>{
        return ( <img 
        key={slide.id}
        src={slide.src} alt={slide.alt} className={`slide  ${index === currentIndex ? "active" : ""}`}/>
        )
      })}
   
 
  
  <div className="bg-slate-50 opacity-80" style={{width:"100%",margin:"auto", padding:"1rem",borderRadius:"10px", height:"auto"}}>
     <p className="roboto-light-italic">
      Your pet's happiness, health, and well-being are our top priorities. At
      Tazama Rafiki pet care, we provide exceptional care, trusted advice, and a
      loving touch for every furry, feathered, or scaly friend. 🐾
    </p>
 <Button style={{margin:"auto",display:"flex",justifyContent:"center",boxShadow:"1px 1px 3px 1px black", padding:"5px",borderRadius:"10px"}}>Book Now</Button>
    </div> 
    </div> 
    <div style={{background:"white",width:"100%",height:"1px",justifyContent:"center", display:"flex",alignItems:"center", margin:"6px"}}/>
   <div className="gap-4 grid grid-cols-3 bg-slate-50 opacity-80 footer">
    <div className="footerdivs">
      <h2 className="text-[1.5rem] lobster-two-bold">Need help?</h2>
     <p className="text-[1.2rem] montserrat">Appointment Booking: "Schedule a service here."</p>  
<p className="text-[1.2rem] montserrat">Need urgent help? Call our emergency line:<br/>  +25400000000"</p>
<p className="text-[1.2rem] montserrat"> Pet Care Tips for happy and healthy pets!"</p>
    </div>
    <div className="footerdivs">
      <h2  className="text-[1.5rem] lobster-two-bold">Our Service</h2>
      <p className="text-[1.2rem] montserrat">Home BaseVisit for feeding</p>
      <p className="text-[1.2rem] montserrat">Administerring medicine</p>
      <p className="text-[1.2rem] montserrat">More</p>
    </div>
    <div  className="footerdivs">
      <h2  className="text-[1.5rem] lobster-two-bold">Contact Us</h2>
      <p className="text-[1.2rem] montserrat">We are avalable on :
        <ul><li>Facebook</li>
        <li>Whats up</li>
        <li>Instagram</li>
        <li>Email</li></ul>
        Just click the icons on screen
      </p>
    </div>
    <div  className="footerdivs">
      <h2  className="text-[1.5rem] lobster-two-bold" style={{marginTop:"1rem"}}>Connect $ Chat</h2>
      <p className="text-[1.2rem] montserrat">We are available to Reply on you <br/>text instantly
      <br/>so fell free to text us ....</p>
    </div>
   </div>

    </main>
  )
}

export default Wrapper (Navbar,'home')