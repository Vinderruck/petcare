 import React from 'react';
 import Wrapper from '../HOC/Wrapper';
 
 const AboutUs = () => {
   return (
    <div > 
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
    </p></div></div>
   )
 }
 
 export default Wrapper (AboutUs,"about")