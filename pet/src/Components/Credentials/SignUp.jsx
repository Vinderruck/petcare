import React from 'react'
import {Form,Button} from "react-bootstrap";
import "./Sign.css"
import { facebook, google, logo2 } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

const navigate =useNavigate()


    //Navigate to dash Functionconst
    const  HandleNavigate= ()=>{
        navigate("/Dash")
    }
  return (
    <div className="flex-col bg-white opacity-80 Loginform">
             <div className="logsign" style={{marginTop:"2px"}}><img src={logo2} alt="logo" className="logo1"/></div>
        <Form className="flex flex-col justify-center items-center bg-lime-500 w-[80%] overflow-auto formSign">
   <div>
    <div className="flex justify-center items-center gap-1 m-2 w-full text-[1rem] montserrat socialLog"> <img src={google} className='p-1 w-[35px] h-[35px]'/>Continue with Google</div>
    <div className="flex justify-center items-center gap-1 m-2 w-full text-[1rem] montserrat socialLog"> <img src={facebook} className='p-2 w-[35px] h-[35px]'/>Continue with facebook</div>
   </div>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Email</Form.Label>

            <Form.Control placeholder="Enter Your Emal" className="justify-center rounded-md w-full hover:cursor-pointer"/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat">Location</Form.Label>

            <Form.Control placeholder="Enter Your Location" className="justify-center rounded-md w-full hover:cursor-pointer"/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Create Password</Form.Label>

            <Form.Control  type="password" placeholder="Create Password" className="justify-center rounded-md w-full hover:cursor-pointer"/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Confirm Password</Form.Label>

            <Form.Control  type="password" placeholder="Confirm Your Password" className="justify-center rounded-md w-full hover:cursor-pointer"/>
        </Form.Group>
        <Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}}  className="bg-white opacity-80 text-[1rem] montserrat" onClick={HandleNavigate} >Sign Up</Button>
       <div className="flex justify-between items-center gap-2"> <Link to="#"  className="mr-7">Admin </Link> <Link to="#" className="ml-7">User</Link></div> 
        </Form>
    </div>
  )
}

export default SignUp