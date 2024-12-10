import React,{useState} from 'react'
import { Home, Navbar } from './DasHComponent';

const Dash = () => {
    const [Componentset, setComponentset] = useState("Component1");



    const RenderedComponent ={
        Component1:<Home/>
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
            <Navbar/>
        </div>
        <div style={{marginTop:"6rem",marginLeft:"auto",marginRight:'auto',width:"100%",justifyContent:"center",alignItems:"center,"}}>
            {Rerender()}
        </div>
    </div>
  )
}

export default Dash