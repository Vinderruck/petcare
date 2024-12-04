import React from 'react'
import {motion} from 'framer-motion';
import { FaFacebook , FaInstagramSquare,FaWhatsappSquare} from "react-icons/fa";
 

const Wrapper = (Component,IdName) => function HOC () {
  return (
  <motion.div animate={{}} initial='hidden' whileInView='show'   className= "relative top-0 right-0 left-0 z-0 wrapp">
 <span className='hash-span' id={IdName}></span>

<Component />
<div className="Sociamediawrapp">
  < FaFacebook  className="bg-lime-500 wrappIcons" />

< FaInstagramSquare className="bg-lime-500 wrappIcons" />
<FaWhatsappSquare className="bg-lime-500 wrappIcons" /></div>
  </motion.div>
  )
}

export default Wrapper