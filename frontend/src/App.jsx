
import './App.css'
import Signup from './components/Signup'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
function App() {
 
  return (
    <>
    <Routes>
      <Route path="/signup"  element={<Signup/>}></Route>
      <Route path="/login"  element={<Login/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
