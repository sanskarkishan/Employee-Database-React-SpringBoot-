import React from "react";


const Navbar = () => {
  return (
    <div className="flex bg-slate-900 text-white p-4 justify-between px-8">
        <h1 className="text-3xl font-bold ">Employee Database Server 👩‍💻</h1>
        <div className="flex space-x-4">
        <a className="hover:text-blue-400" href="/">HOME </a>
        <a className="hover:text-blue-400" href="/">PROFILE </a>
        <a className="hover:text-blue-400" href="/">LOGOUT</a>
        </div>
      </div>
  );
}
export default Navbar;
