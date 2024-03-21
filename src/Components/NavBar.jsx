import React from "react";
import Frame5Image from '../assets/Frame_5.png';
import "./NavBar.css";


const NavBar = () => {
  return (
    <div className="container mx-auto lg:mb-8">
      <div className="navbar bg-base-100 justify-between">
        <div className="">
          <p className="text-xl font-bold">Chef's Hub</p>
        </div>
        <div className="hidden md:flex list-none space-x-8 mid">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </div>
        <div className="flex-none gap-2">
          <div className="hidden md:flex form-control relative">
            <label className="input input-bordered flex items-center gap-2 search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="">
                <img alt="" src={Frame5Image}/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
