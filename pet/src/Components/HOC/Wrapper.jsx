import React from 'react'
import {motion} from 'framer-motion';
import { FaFacebook , FaInstagramSquare,FaWhatsappSquare} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
 

const Wrapper = (Component,IdName) => function HOC () {
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/share/p/14LxZAXhRP/";
  };
  const handleWhatsUp =( )=>{
    window.location.href="https://whatsapp.com/dl/"
  }
  const handleMailClick = () =>{
    window.location.href = "mailto:Jackathambi210@gmail.com";
  }
  return (
  <motion.div animate={{}} initial='hidden' whileInView='show'   className= "relative top-0 right-0 left-0 z-0 wrapp">
 <span className='hash-span' id={IdName}></span>

<Component />
<div className="Sociamediawrapp">
  <Link to="#" onClick={handleFacebookClick}>< FaFacebook  className="bg-lime-500 wrappIcons" /></Link>

< FaInstagramSquare className="bg-lime-500 wrappIcons" />
<Link to="#" onClick={handleWhatsUp}><FaWhatsappSquare className="bg-lime-500 wrappIcons" /></Link>
<Link to="#" onClick={ handleMailClick}><MdEmail className="bg-lime-500 wrappIcons" /></Link>
</div>
  </motion.div>
  )
}

export default Wrapper