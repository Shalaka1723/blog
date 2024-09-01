import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Checkbox, IconButton } from "@mui/material";
import { pink, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
export default function Singup() {
  return (
    <>
      <div className="bg-gray-600 flex justify-center items-center h-screen">
        <div className="w-96 p-6 bg-white rounded-lg h-100 shadow-md ">
          <div className=" text-xl font-serif text-gray-600 font-bold text-center my-2">
            LARGE
          </div>
          <hr />
          <div className=" drop-shadow-md text-xl text-center text-[#8d8d8e] font-medium  mb-4 ">
            SIGN UP
          </div>
          <div className="mt-3">
            <label htmlFor="Email" className="block mb-1 ">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
          </div>

          <div className="mt-3">
            <label htmlFor="Password" className="block mb-1 ">
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="password"
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
          </div>

          <div className="mt-5">
            <Link
              to={"/"}
              className="drop-shadow-lg p-2 bg-[#515151] text-white font-semibold rounded-xl "
            >
              SIGN UP
            </Link>
          </div>

          <div className="flex justify-between mt-8 text-sm text-gray-400">
            
          <div className="text-xs">
              <div>
                Already have an account?
                <Link to={"/Login"} className="pl-1 underline">
                  LOGIN
                </Link>
              </div>

              <div className="">
                Go back to
                <Link to={"/Home"} className="pl-1 underline">
                  Blog Homepage
                </Link>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-4 border-1"></hr>

          <div className=" flex justify-center gap-3 ">
            <GoogleIcon sx={{ color: "#8d8d8e" }} />
            <FacebookIcon sx={{ color: "#8d8d8e" }} />
            <LinkedInIcon sx={{ color: "#8d8d8e" }} />
          </div>
        </div>
      </div>
    </>
  );
}
