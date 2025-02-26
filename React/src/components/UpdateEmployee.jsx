import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [employee, setEmployee] = React.useState({
        id: id,
        name: "",
        phone: "",
        email: "",
        depart: ""
    }) 
    const handleChange = (e) => {   
        setEmployee({...employee, [e.target.name]: e.target.value})
    }
    
    useEffect(() => {
        const fetchData = async () => {
          
          try {
            const response = await EmployeeService.getEmployeeById(employee.id);
            setEmployee(response.data); 
          } catch (error) {
            console.log(error);
          }
          
        };
        fetchData();
      }, []);

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id).then((responce) => {
            console.log("Saved",responce);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <div className="flex items-center justify-center">
        <div className="mx-44 max-w-xl my-20 rounded shadow bg-slate-400 px-10 py-4">
        <h1 className="font-bold my-5 text-white text-xl">Update Employee</h1>
        <div className="flex flex-col space-y-4">
        <input value={employee.name} onChange={(e)=> handleChange(e)} name='name' className="rounded-full w-full py-2 p-4" type="text" placeholder="Enter Name" ></input>
        <input value={employee.phone} onChange={(e)=> handleChange(e)} name='phone' className="rounded-full w-full py-2 p-4" type="number" placeholder="Enter Phone" ></input>
        <input value={employee.email} onChange={(e)=> handleChange(e)} name='email' className="rounded-full w-full py-2 p-4" type="email" placeholder="Enter Email" ></input>
        <input value={employee.depart} onChange={(e)=> handleChange(e)} name='depart' className="rounded-full w-full py-2 p-4" type="text" placeholder="Enter Department" ></input>
        </div>
        <div className="flex justify-between my-5 mx-5 ">
            <button onClick={updateEmployee} className="bg-white rounded hover:bg-green-600 hover:text-white px-7 py-2 mx-14">UPDATE</button>
            
            <button onClick={()=> navigate("/")} className="bg-white rounded hover:bg-red-600 hover:text-white px-7 py-2 mx-20">CANCEL</button>
        </div>
        
    </div>
    </div>
  )
}

export default UpdateEmployee