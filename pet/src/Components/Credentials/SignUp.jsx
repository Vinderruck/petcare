import React from 'react'
import {Form} from "react-bootstrap";
import "./Sign.css"
import { logo2 } from '../../assets';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex-col bg-white opacity-80 Loginform">
             <div className="logdiv" style={{marginTop:"2px"}}><img src={logo2} alt="logo" className="logo"/></div>
        <Form className="flex flex-col justify-center items-center bg-lime-500 w-[80%] formSign">
   
        <Form.Group className="flex flex-col gap-1 m-2 w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Email</Form.Label>

            <Form.Control placeholder="Enter Your Emal" className="justify-center w-full hover:cursor-pointer"/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[80%]">
            <Form.Label className="text-[1rem] montserrat">Location</Form.Label>

            <Form.Control placeholder="Enter Your Location" className="justify-center w-full hover:cursor-pointer"/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Create Password</Form.Label>

            <Form.Control  type="password" placeholder="Create Password" className="justify-center w-full hover:cursor-pointer"/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Confirm Password</Form.Label>

            <Form.Control  type="password" placeholder="Confirm Your Password" className="justify-center w-full hover:cursor-pointer"/>
        </Form.Group>
       <div className="justify-between items-center gap-2"> <Link to="#" >Admin LogIn</Link> <Link to="#">UserLog in</Link></div> 
        </Form>
    </div>
  )
}

export default SignUp