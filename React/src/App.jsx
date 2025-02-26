import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';




function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route index element={<EmployeeList/>}/>
      <Route path="/" element={<EmployeeList/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/updateEmployee/:id" element={<UpdateEmployee/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
