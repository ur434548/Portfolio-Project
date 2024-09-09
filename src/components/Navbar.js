import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navProfilePic from "../assets/images/navProfilePic.jpg";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const getLocation = (path) => {
    setActivePage(path);
  };
  return (
    <div className="p- flex flex-col ">
      <nav className="bg-white shadow-md rounded-2xl p-4 mx-3 my-3">
        <div className="container mx-auto grid grid-cols-4 items-center">
          <div className="text-2xl font-bold">LOGO</div>

          <div className="md:hidden flex justify-end col-span-3">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
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
            className={`hidden md:flex justify-end gap-4 text-[13px] items-center col-span-3 lg:text-[16px] `}
          >
            <Link
              to="/Dashboard"
              onClick={() => getLocation("/Dashboard")}
              className={
                activePage === "/Dashboard" ? "text-blue-600" : "text-gray-700"
              }
            >
              Dashboard
            </Link>
            <Link
              to="/Projects"
              onClick={() => getLocation("/Projects")}
              className={
                activePage === "/Projects" ? "text-blue-600" : "text-gray-700"
              }
            >
              Projects
            </Link>
            <Link
              to="/Skills"
              onClick={() => getLocation("/Skills")}
              className={
                activePage === "/Skills" ? "text-blue-600" : "text-gray-700"
              }
            >
              Skills
            </Link>
            <Link
              to="/Messages"
              onClick={() => getLocation("/Messages")}
              className={
                activePage === "/Messages" ? "text-blue-600" : "text-gray-700"
              }
            >
              Messages
            </Link>
            <Link
              to="/EducationHistory"
              onClick={() => getLocation("/Education History")}
              className={
                activePage === "/Education History"
                  ? "text-blue-600"
                  : "text-gray-700"
              }
            >
              Education History
            </Link>
            <Link
              to="/Experience"
              onClick={() => getLocation("/Experience")}
              className={
                activePage === "/Experience" ? "text-blue-600" : "text-gray-700"
              }
            >
              Experience
            </Link>
            <Link
              to="/Reviews"
              onClick={() => getLocation("/Reviews")}
              className={
                activePage === "/Reviews" ? "text-blue-600" : "text-gray-700"
              }
            >
              Reviews
            </Link>
            <div className="flex gap-2 flex-row items-center content-center">
              <img
                src={navProfilePic}
                alt="User profile"
                className="rounded-full h-10 w-10 col-span-1"
              />
              <IoChevronDownOutline />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2  pt-2 pb-3 space-y-2 flex flex-col">
            <Link
              to="/Dashboard"
              onClick={() => getLocation("/Dashboard")}
              className={
                activePage === "/Dashboard" ? "text-blue-600" : "text-gray-700"
              }
            >
              Dashboard
            </Link>
            <Link
              to="/Projects"
              onClick={() => getLocation("/Projects")}
              className={
                activePage === "/Projects" ? "text-blue-600" : "text-gray-700"
              }
            >
              Projects
            </Link>
            <Link
              to="/Skills"
              onClick={() => getLocation("/Skills")}
              className={
                activePage === "/Skills" ? "text-blue-600" : "text-gray-700"
              }
            >
              Skills
            </Link>
            <Link
              to="/Messages"
              onClick={() => getLocation("/Messages")}
              className={
                activePage === "/Messages" ? "text-blue-600" : "text-gray-700"
              }
            >
              Messages
            </Link>
            <Link
              to="/EducationHistory"
              onClick={() => getLocation("/Education History")}
              className={
                activePage === "/Education History"
                  ? "text-blue-600"
                  : "text-gray-700"
              }
            >
              Education History
            </Link>
            <Link
              to="/Experience"
              onClick={() => getLocation("/Experience")}
              className={
                activePage === "/Experience" ? "text-blue-600" : "text-gray-700"
              }
            >
              Experience
            </Link>
            <Link
              to="/Reviews"
              onClick={() => getLocation("/Reviews")}
              className={
                activePage === "/Reviews" ? "text-blue-600" : "text-gray-700"
              }
            >
              Reviews
            </Link>

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
