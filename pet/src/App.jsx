 
 
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Static/Navbar.jsx'
 
function App() {
 document.documentElement.classList.add("bg-lime-500")

  return (
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
     </Routes>
   </BrowserRouter>
    
  )
}

export default App
