import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import NavBar from "../NavBar/NavBar";
const Login = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  
  const {loginUser} = useContext(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    loginUser(email,password)
    .then(res =>{
      const user = res.user;
      console.log(user);
      navigate(from,{replace:true})
      // <Navigate state={{ from: location }} replace></Navigate>
      form.reset()
    })
    .catch(err=>{
      console.error(err.message)
    })
  }
  
  return (
    <div className=" ">
    <NavBar />
      <form onSubmit={handleLogin} className=" flex   items-center justify-center p-10">
        <div className="w-[600px] border-solid shadow-xl p-4">
        <div className="relative z-0 w-full mb-6  group">
          <input
            type="email"
            name="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
          <p className="my-3 text-slate-600"><small>New to this site ? Please </small><Link className="text-sky-500" to='/register'>registration</Link></p>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
