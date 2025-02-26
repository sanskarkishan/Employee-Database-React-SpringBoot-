import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = React.useState({
        id: "",
        name: "",
        phone: "",
        email: "",
        depart: ""
    }) 
    const handleChange = (e) => {   
        setEmployee({...employee, [e.target.name]: e.target.value})
    }
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            name: "",
            phone: "",
            email: "",
            depart: ""
        })
    }
    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((responce) => {
            console.log("Saved",responce);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <div className="flex items-center justify-center">
        <div className=" max-w-xl my-20 rounded shadow bg-slate-400 px-10 py-4">
        <h1 className="font-bold my-5 text-white text-xl">Add Employee</h1>
        <div className="flex flex-col space-y-4">
        <input value={employee.name} onChange={(e)=> handleChange(e)} name='name' className="rounded-full w-full py-2 p-4" type="text" placeholder="Enter Name" ></input>
        <input value={employee.phone} onChange={(e)=> handleChange(e)} name='phone' className="rounded-full w-full py-2 p-4" type="number" placeholder="Enter Phone" ></input>
        <input value={employee.email} onChange={(e)=> handleChange(e)} name='email' className="rounded-full w-full py-2 p-4" type="email" placeholder="Enter Email" ></input>
        <input value={employee.depart} onChange={(e)=> handleChange(e)} name='depart' className="rounded-full w-full py-2 p-4" type="text" placeholder="Enter Department" ></input>
        </div>
        <div className="flex items-center my-10 mx-10 ">
            <button onClick={saveEmployee} className="bg-white rounded hover:bg-green-600 hover:text-white px-9 py-2 ">SAVE</button>
            <button onClick={reset} className="bg-white rounded hover:bg-blue-600 hover:text-white px-9 py-2 mx-10">CLEAR</button>
            <button onClick={()=> navigate("/")} className="bg-white rounded hover:bg-red-600 hover:text-white px-7 py-2 ">CANCEL</button>
        </div>
    </div>
    </div>
    
  )
}

export default AddEmployee