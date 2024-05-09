import React from "react";

import { Link } from "react-router-dom";

import profil from "@/assets/img/profil.jpeg";

const NavBars = () => {
  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="hover:bg-red-500 hover:text-white" to="/">
                Characters
              </Link>
            </li>
            <li>
              <Link className="hover:bg-red-500 hover:text-white" to="/comics">
                Comics
              </Link>
            </li>
            <li>
              <Link className="hover:bg-red-500 hover:text-white" to="/fav">
                My list
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="btn text-xl bg-red-500 text-white hover:bg-red-400"
          to="/"
        >
          Marvel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="hover:bg-red-500 hover:text-white" to="/">
              Characters
            </Link>
          </li>
          <li>
            <Link className="hover:bg-red-500 hover:text-white" to="/comics">
              Comics
            </Link>
          </li>
          <li>
            <Link className="hover:bg-red-500 hover:text-white" to="/fav">
              My list
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={profil} alt="" />
            </div>
          </div>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between hover:bg-red-500 hover:text-white">
                Profile
              </a>
            </li>

            <li>
              <a className="hover:bg-red-500 hover:text-white">Logout</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default NavBars;
