import React,{useState,} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {catdog, catown, catplaying, catsitting, cattrearment, dogjump, dogpla, dogrunning, Dogtraining, dogtreament, logo2, walkingdog} from "../../assets/index";
import Wrapper from '../HOC/Wrapper';
import './home.css'
import { useEffect } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import {Button} from "react-bootstrap";
import Service from './Service';
import AboutUs from './AboutUs';
 
const Navbar = () => {
const [currentIndex, setcurrentIndex] = useState(0)
const [open, setopen] = useState(false)
const navigate =useNavigate();


//function that holds navigation to sign up

const SignUp =() =>{
  navigate('/Signup')
}
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
 

  // const slide=[
  //   {id:1, src:catdog,alt:'catdog'},
  //   // {id:1, src:catplaying,alt:'catdog'},
  //   // {id:1, src:catsitting,alt:'catdog'},
  //   // {id:1, src:Dogtraining,alt:'catdog'},
   
  //   {slide.map((slide,index)=>{
  //     return ( <img 
  //     key={slide.id}
  //     src={slide.src} alt={slide.alt} className={`slide  ${index === currentIndex ? "active" : ""}`}/>
  //     )
  //   })}
    
    
  // ]


  // const nextslide =()=>{
  //   setcurrentIndex((prevIndex) => (prevIndex + 1) % slide.length)
  // }
  // const preIndex = ()=>{
  //   setcurrentIndex((prevIndex)=> prevIndex === 0 ? slide.length -1 : prevIndex - 1) 
  // }


  // useEffect(() => {
  //    const time =setInterval(nextslide,3000)
  //    return ()=>clearInterval(time)
  // }, [])
  // style={{width:"100%",margin:"auto", padding:"1rem",borderRadius:"10px", height:"auto"}}
  return (
    <main className='w-full'>
    <div className="bg-white opacity-80 w-full Navbar">
        <div className="logdiv" style={{marginTop:"2px"}}><img src={logo2} alt="logo" className="logo"/></div>
    <div className="NavbarRight">
   <ul className="flex justify-center items-center">
    <li ><a href="#home" className="navLinks">Home</a></li>
      <li ><a href="#about" className="navLinks">About</a></li>
    <li className="navLinks"><a href="#service"> Service offered</a></li>
    </ul> 
    </div>
   <div className="NavIcon" style={{width:"35px",height:"35px", boxShadow:"1px 1px 1px 1px black", borderRadius:"10px"}}> 
    <CiMenuKebab  onClick={()=>setopen(!open)} className="smIcon"/>
    {open &&(
      <div className="navsmright bg-white p-3" >
     <ul className="flex flex-col justify-center items-start"> <li ><a href="#home" className="navLinks">Home</a></li>
    <li ><a href="#about" className="navLinks">About</a></li>
    <li  ><a href="#service"> Service offered</a></li>
    </ul>
      </div>
    )}</div>
    </div>
    <h1 className="poppinsh2" style={{justifyContent:"center",alignItems:"center",textAlign:"center",margin:"3px",color:"white", fontSize:"1.5rem"}}>WElCOME TO TAZAMA RAFIKI PET CARE</h1>
   <div  style={{width:"100%",margin:"auto", padding:"1rem",borderRadius:"10px", height:"auto"}}>
   <div className="gap-4 grid grid-cols-3 bg-slate-50 opacity-80 footer" style={{width:"80%",justifyContent:"center",alignItems:'center',borderRadius:"10px",margin:"auto"}}>
    
   <div className="imagediv2"><img src={catdog} alt="cat dog" className="slide"/></div>
   <div className="imagediv2"><img src={catown} alt="cat" className="slide"/></div>
   <div className="imagediv2"><img src={Dogtraining} alt="cat" className="slide"/></div>
    
   </div>
   
  
  <div className="flex flex-col justify-center items-center bg-slate-50 opacity-80 mt-2 p-3">
     <p className="text-[1.2rem] roboto-light-italic">
      Your pet's happiness, health, and well-being are our top priorities. At
      Tazama Rafiki pet care, we provide exceptional care, trusted advice, and a
      loving touch for every furry, feathered, or scaly friend. 🐾
    </p>
    <Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}} onClick={SignUp}  className="bg-lime-500 m-3 rounded-md w-[30%] text-[1rem] text-black montserrat" >Book Now</Button>
    </div> 
    </div> 
    <div style={{background:"white",width:"100%",height:"1px",justifyContent:"center", display:"flex",alignItems:"center", margin:"6px"}}/>
  
  

<AboutUs/>
  <Service/>
    <div  className="flex flex-col justify-center">
    <h2  className="text-[1.7rem] text-center underline poppinsh2"> At Site</h2> 
      
    <div className="gap-4 grid grid-cols-3 bg-slate-50 opacity-80 footer">
      <div className="imagediv"><img src={cattrearment} className="Siteimage" loading='lazy'/></div>
      <div className="imagediv"><img src={walkingdog} className="Siteimage" loading='lazy'/></div>
      <div className="imagediv"><img src={dogpla} className="Siteimage" loading='lazy'/></div>
      <div className="imagediv"><img src={dogrunning} className="Siteimage" loading='lazy'/></div>
      </div>
    </div>
  
  
   <div className="gap-4 grid grid-cols-3 bg-slate-50 opacity-80 footer">
    <div className="footerdivs">
      <h2 className="text-[1.5rem] lobster-two-bold">Need help?</h2>
     <p className="text-[1.2rem] montserrat">Appointment Booking: "Schedule a service here."</p>  
<p className="text-[1.2rem] montserrat">Need urgent help? Call our emergency line:<br/>  +254723344630</p>
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
      <p className="text-[1.2rem] montserrat">We are available to Reply to you <br/>text instantly
      <br/>so fell free to text us ....</p>
    </div>
   </div>

    </main>
  )
}

export default Wrapper (Navbar,'home')