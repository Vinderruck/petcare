import React from 'react';
import {Form ,Button} from "react-bootstrap";
import "./Side.css"

const PetProfile = () => {
  return (
    <div className="z-1 justify-center items-start bg-white opacity-80 mt-4 mr-auto ml-auto w-[90%]">
<Form className="flex flex-col justify-center items-center"> 
    <Form.Group className="flex flex-col justify-center items-center">
        <h2 className="text-[30px] text-center poppinsh2">Pet Details</h2>
       <ul > <Form.Label className="flex justify-between items-center gap-2">Pet Name:
            <Form.Control type="text" placeholder="Your Pet's Name"/>
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Pet Type:
            <Form.Control type="text" placeholder="Pet type" />
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Breed:
            <Form.Control type="text" placeholder="Enter the breed" />
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Age/DOB:
            <Form.Control  type="text" placeholder="Pet Age"/>
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Color
            <Form.Control type="text" placeholder="Pet color"/>
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Gender
            <Form.Control  type="text" placeholder="Enter Gender"/>
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Weight
            <Form.Control type="text" placeholder="Enter pet weight"/>
        </Form.Label></ul>
        <ul> <Form.Label className="flex justify-between items-center gap-2">Size
            <Form.Control type="text" placeholder="Pet Size"/>
        </Form.Label></ul>
        
    </Form.Group>
</Form>
    </div>
  )
}

export default PetProfile