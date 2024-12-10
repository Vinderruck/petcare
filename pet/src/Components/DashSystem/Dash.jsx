import React,{useState} from 'react'
import { Navbar } from './DasHComponent';

const Dash = () => {
    const [Componentset, setComponentset] = useState("Component1");



    const RenderedComponent ={
        Component1:<Navbar/>
    }
  return (
    <div>

        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Dash