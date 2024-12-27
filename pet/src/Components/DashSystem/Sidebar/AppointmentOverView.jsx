import React from 'react'
import { Form,Button,Table } from 'react-bootstrap'

const AppointmentOverView = () => {
  return (
    <div className="z-1 justify-center items-start bg-white mt-6 mr-auto ml-auto w-[90%] h-auto overflow-auto">
    <Form className="flex flex-col justify-center items-center w-full overflow-auto"> 
        <Form.Group className="flex flex-col justify-center items-center m-2 w-[80%] Form">
        <h2 className="text-[25px] text-center sm:text-[30px] poppinsh2">Appointments</h2>

        <Table bordered hover striped className="m-auto w-[80%]">
            <thead className='m-auto text-center'>
                <tr><th> #</th> 
                <th>Name</th>
                <th>Email</th>
                <th>Acton</th></tr>
            </thead>
            <tbody  className='m-auto text-center'>
                <tr>
                    <td>1</td>
                    <td>Jackson</td>
                    <td>Jackson@gmail.com</td>
                    <td><Button style={{boxShadow:"1px 1px 2px 1px black",borderRadius:"10px", padding:"2px"}}  className="bg-lime-500 m-3 rounded-md w-[30%] text-[1rem] text-black montserrat" >Approve</Button>
 </td>
                </tr>
            </tbody>
           
          </Table>
            </Form.Group>
            </Form></div>
  )
}

export default AppointmentOverView