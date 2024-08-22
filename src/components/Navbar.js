import React, { useState } from "react";
import { Link } from "react-router-dom";
import navProfilePic from "../assets/images/navProfilePic.jpg";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p- flex flex-col ">
      <nav className="bg-white shadow-md rounded-2xl p-4 mx-3 my-3">
        <div className="container mx-auto grid grid-cols-4 items-center">
          <div className="text-2xl font-bold">LOGO</div>

          <div className="md:hidden flex justify-end col-span-3">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`hidden md:flex justify-end gap-5 text-[13px] items-center col-span-3 lg:text-[16px] `}
          >
            <Link
              to="/dashboard"
              className="text-gray-600 active:text-red-900 hover:text-blue-500"
            >
              Dashboard
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-blue-500 "
            >
              Projects
            </Link>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Skills
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Messages
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 ">
              Education History
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Experience
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Reviews
            </a>

            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            <IoChevronDownOutline />
          </div>
        </div>
        {/* Mobile */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2  pt-2 pb-3 space-y-2 flex flex-col">
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-500">
              Dashboard
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-blue-500"
            >
              Projects
            </Link>
            <Link to="#" className="text-gray-600 hover:text-blue-500 block">
              Skills
            </Link>
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Messages
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Education History
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Experience
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Reviews
            </a>
            <img
              src={navProfilePic}
              alt="User profile"
              className="rounded-full h-10 w-10 col-span-2"
            />
            <IoChevronDownOutline />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
