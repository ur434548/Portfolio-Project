import React from "react";
import loginpic from "../../assets/images/loginpic.png";

function LoginPage() {
  return (
    
    <div className="min-h-screen grid lg:grid-cols-2  p-8 bg-white rounded-lg overflow-hidden ">
     
      <div className="flex justify-center items-center bg-blue-100  rounded-lg">
        <img
          src={loginpic}
          alt="Login Page Pic"
          className="w-full max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>

      <div className="flex justify-center items-center ">
        <div className="max-w-sm w-full md:pt-3 space-y-6 bg-white p-4 rounded-lg ">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-600">
            Enter your email below to login to your account
          </p>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className=" text-sm font-medium text-gray-700">
              <div className="mt-2 flex justify-between">
                <span className="text-left">Passowrd</span>
                <div>
                  <a
                    href="#"
                    className="text-sm  text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </label>
            <input
              type="password"
              required
              className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
