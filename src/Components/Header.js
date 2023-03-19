import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full px-2 fixed top-0 z-10 bg-gray-50 w-full">
      <div className="flex items-ceter h-full justify-between">
        {/* Logo  */}
        <Link to={"/"}>
          <div className="h-12">
            <img
              src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
              alt="Logo"
              className="h-full my-2"
            />
          </div>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
            <Link to={"men"}>MEN</Link>
            <Link to={"women"}>WOMEN</Link>
            <Link to={"kids"}>KIDS</Link>
          </nav>
        </div>

        {/* Search Section  */}
        <form>
          <div className="text-2xl text-slate-400 relative my-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-20 md:mx-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" block w-full p-3 pl-9 md:mx-20 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for products brands and more."
            />
          </div>
        </form>

        <div className="flex items-center m-5 gap-4 md:gap-7">
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-2 -right-1 text-white bg-red-500 rounded-full h-4 w-4 m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
