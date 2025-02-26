import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data); 
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee =  (e, id) => {
    e.preventDefault();
      EmployeeService.deleteEmployeeById(id)
      .then(() => {
        if (employees){
        setEmployees((prevElement) => prevElement.filter((employee) => employee.id !== id));
        }
      })
  }

  const updateEmployee =  (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  }

  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center my-5">
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-900 hover:bg-blue-800 font-mono
         text-white  px-10 py-1 text-1xl font-semibold rounded "
        >
          Add Employee
        </button>
      </div>
      <div className=" flex items-center justify-center">
        <table className="shadow">
          <thead className="bg-slate-500  text-white">
            <th className="px-9 py-2 tracking-widest">ID</th>
            <th className="px-9 py-2 tracking-widest">Name</th>
            <th className="px-9 py-2 tracking-widest">Phone</th>
            <th className="px-9 py-2 tracking-widest">Email</th>
            <th className="px-9 py-2 tracking-widest">Department</th>
            <th className="px-9 py-2 tracking-widest">ACTION</th>
          </thead>
          {!loading && (
          <tbody>
            {employees.map((employee) => (
            <tr className="hover:bg-blue-600 hover:text-white">
              <td className="text-center py-2 px-6 whitespace-nowrap">{employee.id}</td>
              <td className="text-center py-2 px-6 whitespace-nowrap">{employee.name}</td>
              <td className="text-center py-2 px-6 whitespace-nowrap">{employee.phone}</td>
              <td className="text-center py-2 px-6 whitespace-nowrap">{employee.email}</td>
              <td className="text-center py-2 px-10 whitespace-nowrap">{employee.depart}</td>
              <td>
                <a className=" hover:bg-red-600 bg-red-500 text-white font-mono rounded px-3 py-1 mx-2"
                  onClick={(e,id) => deleteEmployee(e, employee.id)}>DELETE
                </a>
                <a className="hover:bg-green-600 bg-green-500 text-white font-mono rounded px-3 py-1 mx-2"
                onClick={(e,id) => updateEmployee(e, employee.id)}>UPDATE
                </a>
              </td>
            </tr>
            ))}
          </tbody>
          )}
        </table>
      </div>
    </>
  );
};
export default EmployeeList;
