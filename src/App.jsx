import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Auth from "./pages/auth/Auth"
import Tracker from "./pages/expense-track/Tracker"

function App() {

  return (
    
    <Router>
    <Routes>
   <Route path="/"  element={<Auth/>}/>
   <Route path="/tracker" element={<Tracker/>}/>
  </Routes>
    </Router>
  )
}

export default App
