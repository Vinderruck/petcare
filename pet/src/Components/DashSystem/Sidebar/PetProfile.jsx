import React from 'react';
import {Form ,Button} from "react-bootstrap";
import "./Side.css"

const PetProfile = () => {
  return (
    <div className="z-1 justify-center items-start bg-white mt-6 mr-auto ml-auto w-[90%] h-auto">
<Form className="flex flex-col justify-center items-center w-full"> 
    <Form.Group className="flex flex-col justify-center items-center m-2 w-[80%] Form">
        <h2 className="text-[30px] text-center poppinsh2">Pet Details</h2>
       <ul  className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3">Pet Name:
            <Form.Control type="text" placeholder="Your Pet's Name"  className="w-full sm:w-[50%] text-center sm:text-start"/>
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3">Pet Type:
            <Form.Control type="text" placeholder="Pet type"  className="w-full sm:w-[50%] text-center sm:text-start"/>
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3">Breed:
            <Form.Control type="text" placeholder="Enter the breed" className="w-full sm:w-[50%] text-center sm:text-start" />
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3">Age/DOB:
            <Form.Control  type="text" placeholder="Pet Age" className="w-full sm:w-[50%] text-center sm:text-start"/>
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3">Color
            <Form.Control type="text" placeholder="Pet color" className="w-full sm:w-[50%] text-center sm:text-start"/>
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 p-2">Gender
            <Form.Control  type="text" placeholder="Enter Gender" className="w-full sm:w-[50%] text-center sm:text-start"/>
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3">Weight
            <Form.Control type="text" placeholder="Enter pet weight" className="w-full sm:w-[50%] text-center sm:text-start"/>
        </Form.Label></ul>
        <ul className="w-full"> <Form.Label className="flex sm:flex-row flex-col justify-between items-center gap-2 m-3 p-3" > Size 
            <Form.Control type="text" placeholder="Pet Size"className="w-full sm:w-[50%] text-center sm:text-start"/>
            </Form.Label> </ul>
        
    </Form.Group>
    <Button className="bg-lime-500 m-3 rounded-md w-[30%] text-[1.5rem]">Save</Button>
</Form>
    </div>
  )
}

export default PetProfile