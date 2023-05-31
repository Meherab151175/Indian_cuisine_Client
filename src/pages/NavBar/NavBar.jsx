import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FaBars, FaUserCircle } from "react-icons/fa";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user,logOut} = useContext(AuthContext)
  console.log(user)

  const [imageURL, setImageURL] = useState('');

  useEffect(() => {

    if (user && user.photoURL) {
      setImageURL(user.photoURL);
    }
  }, [user?.photoURL]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      setImageURL('')
    })
    .catch((err)=>{

    })
  }

  return (
    <nav className="bg-gray-900 text-white py-4 px-20 sticky top-0">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex space-x-16 items-center">
          <img className="h-8 w-8 mr-2" src={logo} alt="Logo" />
          <i className="font-semibold text-lg">indian cuisine</i>

          <div className="md:hidden flex items-center mt-4 md:mt-0">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <NavLink
            
            className="block mb-2 md:mb-0 md:mr-4 font-medium hover:font-semibold active:text-orange-600 "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="block mb-2 md:mb-0 md:mr-4 font-medium hover:font-semibold active:text-orange-600"
            to="/blog"
          >
            Blog
          </NavLink>
          {!user ? <NavLink
            className="block mb-2 md:mb-0 md:mr-4 font-medium hover:font-semibold"
            to="/login"
          >
            Login
          </NavLink> : <span className="block mb-2 md:mb-0 md:mr-4 font-medium hover:font-semibold" onClick={handleLogOut}>LogOut</span>
         }
          {!user && <NavLink

            className="block mb-2 md:mb-0 md:mr-4 font-medium hover:font-semibold"
            to="/register"
          >
            Register
          </NavLink>}
          <div className="group inline-block relative">
            <button className="focus:outline-none flex items-center">
            {imageURL ? <img className="h-8 w-8 mr-2" src={imageURL} alt="User Avatar" />:
              <span className="hidden md:inline-block">Profile</span>}
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 bg-white text-gray-700 p-2 rounded-md shadow">
              <p className="text-sm">{user?.name}</p>
              <p className="text-xs">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
