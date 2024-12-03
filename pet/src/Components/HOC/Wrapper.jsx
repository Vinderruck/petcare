import React from 'react'
import {motion} from 'framer-motion';

const Wrapper = (Component,IdName) => function HOC () {
  return (
  <motion.div animate={{}} initial='hidden' whileInView='show'   className= "relative top-0 right-0 left-0 z-0 wrapp">
 <span className='hash-span' id={IdName}>&nbsp;</span>

<Component/>
  </motion.div>
  )
}

export default Wrapper