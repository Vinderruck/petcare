import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {catdog, catplaying, catsitting, cattrearment, dogjump, dogpla, dogrunning, Dogtraining, dogtreament, logo2, walkingdog} from "../../assets/index";
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
    <Link to="#about" className="navLinks">About</Link>
    <Link to="#" className="navLinks">Service offered</Link>
    <Link to="#" className="navLinks">Booking </Link>
    </div>
   <div className="NavIcon" style={{width:"35px",height:"35px", boxShadow:"1px 1px 1px 1px black", borderRadius:"10px"}}> 
    <CiMenuKebab  onClick={()=>setopen(!open)} className="smIcon"/>
    {open &&(
      <div className="navsmright bg-white" >
         <Link to="#home" className="navLinks">Home</Link>
    <Link to="#about" className="navLinks">About</Link>
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
     <p className="text-[1.2rem] roboto-light-italic">
      Your pet's happiness, health, and well-being are our top priorities. At
      Tazama Rafiki pet care, we provide exceptional care, trusted advice, and a
      loving touch for every furry, feathered, or scaly friend. 🐾
    </p>
 <Button style={{margin:"auto",display:"flex",justifyContent:"center",boxShadow:"1px 1px 3px 1px black", padding:"5px",borderRadius:"10px"}}>Book Now</Button>
    </div> 
    </div> 
    <div style={{background:"white",width:"100%",height:"1px",justifyContent:"center", display:"flex",alignItems:"center", margin:"6px"}}/>
  
  <div id="about"> 
    <h1 style={{justifyContent:"center",alignItems:"center",textAlign:"center",margin:"3px",color:"white", fontSize:"1.5rem"}}>About Us</h1>
    <div className="gap-4 grid grid-cols-3 bg-slate-50 opacity-80 footer">
    <p className="text-[1.2rem] montserrat">
    At Tazama Rafiki, we understand that your pets are more than just animals — they're family.
     When you’re away on holiday, <br/>the last thing you want is to worry about your furry, feathered, 
     or scaly friends. Traditional kennels can often be stressful for pets, <br/>
     <div style={{background:"black",width:"100%",height:"1px",justifyContent:"center", display:"flex",alignItems:"center", margin:"6px"}}/>sleaving both you and them feeling uneasy. 
     That's why we offer a solution that lets your 
    pets stay in the comfort of their own home <br/>while receiving the care they need.

Whether you're going away for a few days or need longer-term care, Tazama 
Rafiki provides personalized, 
<div style={{background:"black",width:"100%",height:"1px",justifyContent:"center", display:"flex",alignItems:"center", margin:"6px"}}/>
<br/>home-based pet care services to ensure your
 pets are well-fed, walked, and attended to, just as you would. We understand 
 that sometimes<br/> it can be difficult to arrange for staff, especially when everyone 
 is heading off for their own holidays, but we’re here to make sure your pet’s
 <br/><div style={{background:"black",width:"100%",height:"1px",justifyContent:"center", display:"flex",alignItems:"center", margin:"6px"}}/> routine stays intact.

With Tazama Rafiki, you can rest easy knowing your pets will be in loving, 
responsible hands. Let us take care of the <br/>details so you can enjoy your holiday without any worries!
    </p></div>
    <div  className="flex flex-col justify-center">
    <h2  className="text-[1.7rem] text-center underline montserrat"> At Site</h2> 
      
    <div className="gap-4 grid grid-cols-3 bg-slate-50 opacity-80 footer">
      <div className="imagediv"><img src={cattrearment} className="Siteimage"/></div>
      <div className="imagediv"><img src={walkingdog} className="Siteimage"/></div>
      <div className="imagediv"><img src={dogpla} className="Siteimage"/></div>
      <div className="imagediv"><img src={dogrunning} className="Siteimage"/></div>
      </div>
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