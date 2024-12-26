import React, { useState } from 'react'
import {Form ,Button} from "react-bootstrap";
import "./Side.css"

const Booking = () => {

    const [Phone, setPhone] = useState(false);
    const [Email, setEmail] = useState(false)
    const [Home, setHome] = useState(false)
   
  return (
    <div className="z-1 justify-center items-start bg-white mt-6 mr-auto ml-auto w-[90%] h-auto overflow-auto">
    <Form className="flex flex-col justify-center items-center w-full overflow-auto"> 
        <Form.Group className="flex flex-col justify-center items-center m-2 w-[80%] Form">
            <h2 className="text-[25px] text-center sm:text-[30px] poppinsh2">Book Appointment</h2>
           <ul  className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Service
                <Form.Select type="text" placeholder="Select Service"  className="w-full sm:w-[50%] text-center sm:text-start" >
                <option selected disabled>Choose service</option>
                    <option>Pet Grooming</option>
                    <option>Pet Sitting</option>
                    <option>Dog Walking</option>
                    <option>Pet Boarding</option>
                    <option>Daycare</option>
                    <option>Pet Health Plans</option>
                    <option>Veterinary Care</option>
                
                </Form.Select>
            </Form.Label></ul>
            <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Date:
                <Form.Control type="date" placeholder=" date"  className="w-full sm:w-[50%] text-center sm:text-start"/>
            </Form.Label></ul>
            <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Time:
                <Form.Control type="time" placeholder="Enter the breed" className="w-full sm:w-[50%] text-center sm:text-start" />
            </Form.Label></ul>
            <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Appointmnet Type:
                <Form.Select  type="text" placeholder="Pet Age" className="w-full sm:w-[50%] text-center sm:text-start"
                onChange={(e) => {
                    const value = e.target.value;
                    if (value === "Home") {
                      setHome(true);
                      setEmail(false);
                      setPhone(false);
                    } else if (value === "email") {
                      setHome(false);
                      setEmail(true);
                      setPhone(false);
                    } else if (value === "phone") {
                      setHome(false);
                      setEmail(false);
                      setPhone(true);
                    }
                  }}>
                <option selected disabled>Choose Type</option>
                   <option value="Home">Home VIsit</option>
                   <option value="email">Email_consultation</option>
                   <option value="phone">phone_consultation</option>
                    </Form.Select>
            </Form.Label>
            </ul>
           
                
                { Home && ( <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Address:
                    <Form.Control type="text" placeholder="Your Address"  className="w-full sm:w-[50%] text-center sm:text-start"/> </Form.Label></ul>)}
                { Email && (<ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Email:
                  <Form.Control type="email" placeholder="Enter Email"  className="w-full sm:w-[50%] text-center sm:text-start"/> </Form.Label></ul>)}
                  { Phone && ( <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 montserrat">Whats Up Number:
                    <Form.Control type="tel" placeholder="Enter Whats up Number"   pattern="[+0-9]{10,15}"
    required  className="w-full sm:w-[50%] text-center sm:text-start"/> </Form.Label></ul>)} 
          
            
            
        </Form.Group>
        <Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}}  className="bg-lime-500 m-3 rounded-md w-[30%] text-[1rem] text-black montserrat" >Confirm</Button>
    </Form>
        </div>
  )
}

export default Booking
