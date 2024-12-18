import React,{Component, useState} from 'react'
import { Home, Navbar } from './DasHComponent';
import { PetProfile } from './Sidebar';

const Dash = () => {
    const [Componentset, setComponentset] = useState("Component1");



    const RenderedComponent ={
        Component1:<Home/>,
        Component2:<PetProfile/>
    }
    const handleRender =(ComponentName)=>{
        setComponentset(ComponentName)
    }


    const Rerender= ()=>{
        return RenderedComponent[Componentset]
    }
  return (
    <div style={{justifyContent:"center",display:"flex",flexDirection:"column"}}>
        <div>
            <Navbar onLinkClick={handleRender}/>
        </div>
        <div style={{marginTop:"6rem",marginLeft:"auto",marginRight:'auto',width:"100%",justifyContent:"center",alignItems:"center,"}}>
            {Rerender()}
        </div>
    </div>
  )
}

export default Dash