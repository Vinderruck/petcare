import React from 'react'
import Wrapper from '../HOC/Wrapper'

const Service = () => {
  return (
    <div id="service" className="m-auto" style={{justifyContent:"center",margin:'auto ',alignItems:"center",display:"flex",  flexDirection:"column"}}>
    <h2  className="text-[1.7rem] text-center underline poppinsh2">Service</h2>
    <ol  style={{text:'center',listStyleType: "bullet" }}  className="text-[1.2rem] montserrat" >
      <li>Home Base Visit for Feeding</li>
      <li>Administering medicine</li>
      <li>Pet care for your long holiday</li>
      <li>Behavioral consultation</li>
      <li>Dog walking services</li>
      <li>Pet training sessions</li>
      <li>Diet planning for pets</li>
    </ol>
    </div>
  )
}

export default  Wrapper(Service,"service")