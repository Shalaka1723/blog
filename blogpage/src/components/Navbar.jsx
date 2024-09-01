import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const[isOpen,setIsOpen]=useState(false);

  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className=" flex flex-col top-0 left-0 w-screen bg-white ">
        <div className="flex relative h-24 justify-between  items-center shadow-sm px-7 py-9 ">
          <button className="">Subscribe</button>
          <Link to={"/AddPost"} className="">Add Post</Link>
          <h1 className="font-serif font-extrabold text-4xl">Large</h1>
          <ul className="flex space-x-3">
            <li>
              <SearchIcon />
            </li>
            <li>
              <Link
                to={"/Signup"}
                className="border border-black rounded-sm py-1 px-2"
              >
                Sign up{" "}
              </Link>
            </li>
          </ul>
        </div>

        <hr className="w-screen border-1 border-gray-300 " />

        <nav className="py-2">
          <ul className="flex justify-evenly">
            {[
              " World",
              "U.S.",
              "Technology",
              "Design",
              "Culture",
              "Business",
              "Politics",
              "Opinion",
              "Science",
              "Health",
              "Style",
              "Travel",
            ].map((element) => (
              <li className="active" key={element}>
                <a href="#" className="hover:text-blue-500">
                  {element}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
