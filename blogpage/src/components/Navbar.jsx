import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex flex-col top-0 left-0 w-screen bg-white">
        <div className="flex relative h-24 justify-between items-center shadow-sm px-7 py-9">
          <button className="hidden md:block">Subscribe</button>
          <h1 className="font-serif font-extrabold text-4xl">Large</h1>
          <ul className="flex space-x-3 md:text">
            <li>
              <SearchIcon />
            </li>
            <li className="hidden md:flex text-sm gap-1">
              <Link
                to={"/Signup"}
                className="border border-black hover:bg-gray-300 rounded-sm py-1 px-2"
              >
                Sign up
              </Link>
              <Link
                to={"/AddPost"}
                className="border border-black bg-slate-300 hover:text-gray-300 hover:bg-gray-600 rounded-sm py-1 px-2"
              >
                Add Post
              </Link>
            </li>
            <li className="md:hidden">
              <button onClick={toggleNavbar}>
                <ListIcon
                  className="w-6 h-6"
                />
              </button>
            </li>
          </ul>
        </div>

        <hr className="w-screen border-1 border-gray-300" />

        <nav className={`py-2 ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row items-center justify-evenly">
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
              <li className="" key={element}>
                <a href="#" className="hover:text-blue-300 hover:bg-gray-100 block md:inline">
                  {element}
                </a>
              </li>
            ))}
            <li className="md:hidden flex space-x-2 md:justify-center w-fit">
              <Link
                to={"/Login"}
                className="block border border-black rounded-sm hover:bg-gray-300 py-1 px-2 my-2"
              >
                Subscribe
              </Link>
              <Link
                to={"/Signup"}
                className="block border border-black rounded-sm hover:bg-gray-300 py-1 px-2 my-2"
              >
                Sign up
              </Link>
              <Link
                to={"/AddPost"}
                className="block border border-black bg-slate-300 hover:text-gray-300 hover:bg-gray-600 rounded-sm py-1 px-2 my-2"
              >
                Add Post
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
