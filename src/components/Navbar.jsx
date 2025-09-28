import React from "react";
import logo from "/images/logo.png";
import coin from "/images/dollar.png";

const Navbar = ({ availableBalance }) => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#131313B2]"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <button className="font-semibold text-[#131313] border border-[#1313131A] rounded-lg p-2">
                <img src={coin} alt="" /> <span>{availableBalance}</span> Coin
              </button>
            </li>
          </ul>
        </div>
        <img className="" src={logo} alt="" />
      </div>
      <div className="navbar-end hidden md:flex ">
        <ul className="menu menu-horizontal text-[#131313B2] px-1 items-center ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <button className="font-semibold text-[#131313] border border-[#1313131A] rounded-lg p-4">
              <img src={coin} alt="" /> <span>{availableBalance}</span> Coin
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
