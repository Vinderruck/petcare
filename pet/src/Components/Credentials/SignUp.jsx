import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap";
import "./Sign.css"
import { facebook, google, logo2 } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate =useNavigate()

    const [Useremail, setUserEmail] = useState("")
    const [location, setlocation] = useState("");
    const [CreatePassword, setCreatePassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [Error, setError] = useState("")
    



//Loginn middle ware
const handleSignUp = (e) =>{
    e.preventDefault()
    if(CreatePassword !== ConfirmPassword){
        setError("Password Does not match")
        return false
    }


}

    //Navigate to dash Functionconst
    const  HandleNavigate= ()=>{
        navigate("/Dash")
    }
  return (
    <div className="flex-col bg-white opacity-80 Loginform">
              <div className="logsign" style={{marginTop:"2px",}}><img src={logo2} alt="logo" className="logo1"/></div>
        <Form className="flex flex-col justify-center items-center bg-lime-500 w-[90%] overflow-auto formSign">
        <h1  className="poppinsh2" style={{justifyContent:"center",alignItems:"center",textAlign:"center",margin:"3px",color:"black", fontSize:"1.5rem"}}>Sign up</h1>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Email</Form.Label>

            <Form.Control placeholder="Enter Your Email" className="justify-center rounded-md w-full hover:cursor-pointer"
            
            value={Useremail}
            name="UserEmail"

            onChange={(e)=>setUserEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat">Location</Form.Label>

            <Form.Control placeholder="Enter Your Location" className="justify-center rounded-md w-full hover:cursor-pointer"
            value={location}
            name='loaction'
            onChange={(e)=>setlocation(e.target.value)}/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Create Password</Form.Label>

            <Form.Control  type="password" placeholder="Create Password" className="justify-center rounded-md w-full hover:cursor-pointer"
            value={CreatePassword}
            name='createPassword'
            onChange={(e)=>setCreatePassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="flex flex-col gap-1 m-2 w-[100%] sm:w-[80%]">
            <Form.Label className="text-[1rem] montserrat"> Confirm Password</Form.Label>

            <Form.Control  type="password" placeholder="Confirm Your Password" className="justify-center rounded-md w-full hover:cursor-pointer"
            name='confirmPassword'
            onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </Form.Group>
      <Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}}  className="bg-lime-200 m-3 rounded-md w-[30%] text-[1rem] text-black montserrat" >Sign Up</Button>
       <div className="flex justify-between items-center gap-2"> <Link to="#"  className="mr-7">Admin </Link> <Link to="#" className="ml-7">User</Link></div> 
       <p>{Error}</p>
        </Form>
      
    </div>
  )
}

export default SignUp