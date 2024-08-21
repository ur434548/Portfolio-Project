import React, { useState } from "react";
import navProfilePic from "../assets/images/navProfilePic.jpg";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p- flex flex-col ">
      <nav className="bg-white shadow-lg rounded-2xl p-4 mx-3 my-3">
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
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Projects
            </a>
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
          <div className="px-2  pt-2 pb-3 space-y-1">
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Dashboard
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Projects
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 block">
              Skills
            </a>
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
      <div className="bg-white p-2 mx-3 my-1 shadow-lg rounded-2xl h-auto">
        <div className="container grid  gap-3 md:grid-cols-2 lg:grid-cols-4 mx-auto ">
          <div className="md:col-span-1 lg:col-span-3 p-1 rounded-2xl bg-white ">
            <div className="grid-rows-3 rounded-lg">
              <div className="bg-cyan-300  p-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas iste iusto nobis alias facere cum, tempore optio veniam
                aperiam id quos, repellendus quibusdam illum excepturi atque
                consequatur earum provident porro?
              </div>
              <div className="bg-red-600  p-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                pariatur ut architecto, dolores est odit non, fugit, inventore
                accusantium iste ab quo illo aut exercitationem culpa.
                Distinctio fuga facere ab?
              </div>
              <div className="bg-red-300 p-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                pariatur necessitatibus, quam error eligendi voluptates esse
                omnis nemo eaque quasi? Cum facilis earum, iusto tempora
                excepturi at aliquam voluptatum doloribus.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6">
              <div className="bg-slate-500 p-8 rounded-2xl">1</div>
              <div className="bg-slate-500 p-8 rounded-2xl">2</div>
              <div className="bg-slate-500 p-8 rounded-2xl">3</div>
              <div className="bg-slate-500 p-8 rounded-2xl">4</div>
            </div>

            <div className="grid-rows-4">
              <div className="bg-cyan-200 p-6 m-1">1</div>
              <div className="bg-cyan-300 p-6 m-1">2</div>
              <div className="bg-cyan-400 p-6 m-1 ">3</div>
              <div className="bg-cyan-500 p-6 m-1">4</div>
            </div>
          </div>

          {/* col */}

          <div className="md:col-span-1 lg:col-span-1 rounded-2xl md:space-y-32 bg-slate-700">
            <div className="grid lg:grid-rows-2 gap-4 h-full">
              <div className="text-white p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, sed ut! Accusantium omnis beatae fugiat hic aperiam
                saepe? Saepe quam fuga id beatae cupiditate, repudiandae amet ad
                enim nam delectus.
              </div>
              <div className="text-white py-20 p-2 flex justify-center  h-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, sed ut! Accusantium omnis beatae fugiat hic aperiam
                saepe? Saepe quam fuga id beatae cupiditate, repudiandae amet ad
                enim nam delectus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
