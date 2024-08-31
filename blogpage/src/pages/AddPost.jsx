import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Checkbox, IconButton } from "@mui/material";
import { pink, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";


export const AddPost = () => {

  const [title, setTitle] = useState();
  const currentDate = new Date();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  let handleSubmit= async()=>{
    let image = await getBase64(file)
    let postData = {postTitle:title, postImage:image, postDate:currentDate, postAuthor:author, postDescription:description}
    console.log(postData) 
  }  



  useEffect(() => {
      console.log(title,currentDate,author,description)

  }, [title,currentDate,author,description])
    
  return (
    <>
      <div>
        <Navbar />

        <div className="bg-white flex justify-center items-center h-screen">
          <div className="w-96 p-6 text-white bg-slate-800 rounded-lg h-100 shadow-md ">
            <div className=" drop-shadow-md text-xl text-center text-[#ae6ac2] font-medium  mb-4 ">
              Add Post
            </div>
            <hr />
            <div className="mt-3">
              <label htmlFor="Title" className="block mb-1 ">
                {" "}
                Title{" "}
              </label>
              <input
                type="text"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                required
                maxLength="20"
                id="title"
                className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
              />
            </div>


            <div className="mt-3">
              <label htmlFor="Description" className="block mb-1 ">
                {" "}
                Description{" "}
              </label>
              <TextareaAutosize
                type="text"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                id=""
                className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="Image" className="block mb-1 ">
                <h2>Add Image:</h2>
                <input type="file"  onChange={handleChange} />
                <img src={file} />
              </label>
            </div>
            <div className="mt-3">
              <label htmlFor="Author" className="block mb-1 ">
                {" "}
                Author{" "}
              </label>
              <input
                type="text"
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                required
                maxLength="20"
                id=""
                className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="mt-5">
              <button onClick={handleSubmit} className="drop-shadow-lg p-2 bg-[#780187] text-white font-semibold w-full rounded-xl border-pink-700">
                Add Post
              </button>
            </div>
            <div className="flex justify-between mt-8 text-sm text-gray-400">
              <div className="">
                Already have an account?
                <button className="pl-1 underline">LOGIN</button>
              </div>
            </div>
            <hr className="mt-2 mb-4 border-1"></hr>

            <div className=" flex justify-center gap-3 ">
              <GoogleIcon sx={{ color: "#ae6ac2" }} />
              <FacebookIcon sx={{ color: "#ae6ac2" }} />
              <LinkedInIcon sx={{ color: "#ae6ac2" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
