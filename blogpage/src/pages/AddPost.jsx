import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const currentDate = new Date();
  const [author, setAuthor] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const getBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(image);
    });
  };
  

  let handleSubmit = async () => {
    if (!title || !author || !description) {
      alert("Please fill in all required fields.");
      return;
    }
    let postImage = image ? await getBase64(image) : null;
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
    navigate("/Home");
  };

  return (
    <>
      <div>

        <Navbar />



        {/* Form to upload posts to the Homepage section */}

        <div className="bg-white flex flex-col justify-center items-center h-auto m-4 sm:m-10 w-auto">
          <form className="w-full sm:w-2/5 p-6 sm:px-10 text-white bg-gray-800 rounded-lg h-100 shadow-md ">
            <div className="drop-shadow-md text-xl text-center font-serif text-white font-semibold">
              LARGE
            </div>
            <hr className="my-2" />
            <div className="drop-shadow-md text-xl text-center text-[#b9b9b9] font-medium mb-4">
              Upload Post
            </div>
            <div className="mt-3">
              <label htmlFor="Title" className="block mb-1">
                Post Title
              </label>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                id="title"
                className="rounded text-black border-2 w-full px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="bio" className="block mb-1">
                Description
              </label>
              <TextareaAutosize
                type="text"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
                id="bio"
                className="rounded border-2 text-black w-full px-2 py-1 focus:border-gray-600"
              />
              <label htmlFor="Description" className="block mb-1 mt-3">
                Detailed Post Text Content
              </label>
              <TextareaAutosize
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                id="description"
                className="rounded border-2 text-black w-full px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="Image" className="block mb-1">
                <h2>Add Image:</h2>
                <input                   
                  type="file"
                  accept="image/*"     //image field only to accept image files  
                  onChange={(e) => {
                    console.log(e)
                    setImage(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                {preview && <img src={preview} alt="Preview" className="mt-2 w-full rounded" />}
              </label>
            </div>

            <div className="mt-3">
              <label htmlFor="Author" className="block mb-1">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                required
                maxLength="20"
                id="author"
                className="rounded border-2 text-black w-full px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="my-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="drop-shadow-lg p-2 bg-[#39b0ff] text-white w-full sm:w-auto rounded-xl border-pink-700"
              >
                Upload Post
              </button>
            </div>

            <hr className="my-2 py-2" />
            <div className="font-light pb-3 text-center">
              Go back to
              <Link to="/" className="pl-1 hover:text-blue-300 underline">
                Blog Homepage
              </Link>
            </div>

            <div className="flex justify-center gap-3">
              <GoogleIcon sx={{ color: "white" }} />
              <FacebookIcon sx={{ color: "white" }} />
              <LinkedInIcon sx={{ color: "white" }} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
