import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export const Navbar = () => {
  return (
    <>
    <header>

      <div className="flex relative h-24 justify-between  items-center shadow-sm px-7 py-9 ">
        <button className="">Subscribe</button>
        <h1 className=" font-bold text-3xl">Large</h1>

        <ul className="flex space-x-3">
          <li>
            <SearchIcon />
          </li>
          <li>
            <button className="border border-black rounded-sm py-1 px-2">
              Sign up{" "}
            </button>
          </li>
        </ul>
      </div>

      <hr className="w-screen border-1 border-gray-300 " />
      
      <nav className="py-2">

      <ul className="flex justify-evenly ">
        <li><a href="">
            World </a></li>
        <li><a href="">
            U.S.</a></li>
        <li><a href="">
            Technology</a></li>
        <li><a href="">
            Design</a></li>
        <li><a href="">
            Culture</a></li>
        <li><a href="">
            Business</a></li>
        <li><a href="">
            Politics</a></li>
        <li><a href="">
            Opinion</a></li>
        <li><a href="">
            Science</a></li>
        <li><a href="">
            Health</a></li>
        <li><a href="">
            Style</a></li>
        <li><a href="">
            Travel</a></li>
      </ul>

      </nav>
    </header>
    </>
  );
};
