import React from 'react'
import { Form,Button } from 'react-bootstrap'

const Gallary = () => {
  return (
    <div className="z-1 justify-center items-start bg-white mt-6 mr-auto ml-auto w-[90%] h-auto overflow-auto">
    <Form className="flex flex-col justify-center items-center w-full"> 
        <Form.Group className="flex flex-col justify-center items-center m-2 w-[80%] Form">
            <h2 className="text-[25px] text-center sm:text-[30px] poppinsh2">Pet Gallary</h2>
            <Form.Control  type="file" accept='image/*' className="w-full sm:w-[50%] text-center sm:text-start"/>
            </Form.Group>
           
           <Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}}  className="bg-lime-500 m-3 rounded-md w-[30%] text-[1rem] text-black montserrat" >Create</Button>
           <Form.Text>Create a new collection</Form.Text>
            </Form>
            <h2 className="text-[20px] text-center sm:text-[30px] poppinsh2">Uploaded Image</h2></div>
  )
}

export default Gallary
