import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export const AddPost = () => {
  const [title, setTitle] = useState();
  const currentDate = new Date();
  const [author, setAuthor] = useState();
  const [bio, setBio] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const getBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(image);
    });
  };

  let handleSubmit = async () => {
    let postImage = await getBase64(image);
    let postData = {
      postTitle: title,
      postImage: postImage,
      postDate: currentDate,
      postAuthor: author,
      postDescription: description,
      postBio: bio,
    };

    if (localStorage.getItem("postData") !== null) {
      let data = JSON.parse(localStorage.getItem("postData"));
      data.push(postData);
      localStorage.setItem("postData", JSON.stringify(data));
    } else {
      localStorage.setItem("postData", JSON.stringify([postData]));
    }
    console.log(postData);
    console.log(postData);
  };

  return (
    <>
      <div>
        <Navbar />

        <div className="bg-white flex flex-col justify-center items-center h-auto m-10 w-auto">
          <div className="w-96 p-6 text-white bg-gray-800 rounded-lg h-100 shadow-md ">
            <div className=" drop-shadow-md text-xl text-center font-serif text-white font-semibold">
              LARGE
            </div>
            <hr className="my-2" />
            <div className=" drop-shadow-md text-xl text-center text-[#b9b9b9] font-medium  mb-4 ">
              Upload Post
            </div>
            <div className="mt-3">
              <label htmlFor="Title" className="block mb-1 ">
                {" "}
                Post Title{" "}
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                maxLength="20"
                id="title"
                className="rounded text-black border-2 w-full px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="bio" className="block mb-1 ">
                {" "}
                Description{" "}
              </label>
              <TextareaAutosize
                type="text"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
                id=""
                className="rounded border-2 text-black w-full px-2 py-1 focus:border-gray-600"
              />
              <label htmlFor="Description" className="block mb-1 ">
                {" "}
                Detailed Post Text Content {" "}
              </label>
              <TextareaAutosize
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                id=""
                className="rounded border-2 text-black w-full px-2 py-1 focus:border-gray-600"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="Image" className="block mb-1 ">
                <h2>Add Image:</h2>
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <img src={preview} />
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
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                required
                maxLength="20"
                id=""
                className="rounded border-2 text-black w-full px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="my-6">
              <Link
                to={"/home"}
                onClick={handleSubmit}
                className="drop-shadow-lg p-2 bg-[#39b0ff] text-white w-fit rounded-xl border-pink-700"
              >
                Upload Post
              </Link>
            </div>

            <hr className="my-2 py-2 "></hr>
            <div className="font-light pb-3 text-center">
                Go back to
                <Link to={"/Home"} className="pl-1 hover:text-blue-300 underline">
                  Blog Homepage
                </Link>
              </div>

            <div className=" flex justify-center gap-3 ">
              <GoogleIcon sx={{ color: "white" }} />
              <FacebookIcon sx={{ color: "white" }} />
              <LinkedInIcon sx={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
