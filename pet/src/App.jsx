 
 
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Static/Navbar.jsx'
import SignUp from './Components/Credentials/SignUp.jsx'
import Dash from './Components/DashSystem/Dash.jsx'
 
function App() {
 document.documentElement.classList.add("bg-lime-500")

  return (
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path="/dash" element={<Dash/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
     </Routes>
   </BrowserRouter>
    
  )
}

export default App
