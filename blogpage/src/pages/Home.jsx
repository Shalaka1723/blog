import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import SmallPost from "../components/SmallPost";
import exercise from "../assets/exercise.jpg";
import denmark from "../assets/denmark.jpg";
import ii from "../assets/ii.jpg";
import Post from "../components/Post";



const smallPostData = [
  {
    category: "World",
    title: "Denmark is the cleanest country in the world",
    date: "12 Jan 2024",
    bio: "Full of charm, culture, and coffee, Denmark has a lot going for it. Now it’s become one of the world’s environmental pioneers, ranked as the cleanest country in the world by the Environmental Performance Index (EPI) for 2021. ",
    image: denmark,
  },
  {
    category: "Health",
    title: "Exercise boosts your memory & thinking skills",
    date: "2 May 2024",
    bio: "Exercise benefits health in so many ways. It preserves muscle strength; keeps your heart strong; maintains a healthy body weight; and staves off chronic diseases such as diabetes.",
    image: exercise,
  },
];

const archiveData = [
  "March 2014",
  "February 2014",
  "January 2014",
  "December 2013",
  "November 2013",
  "October 2013",
  "September 2013",
  "August 2013",
  "July 2013",
  "June 2013",
  "May 2013",
  "April 2013",
]

// DUMMY DATA FOR MAIN POSTS

// const postData = [
//   {
//     image: ii,
//     title: "Sample blog post",
//     date: "January 1, 2014",
//     author: "Mark",
//     bio: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
//     description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
//   },
//   {
//     image: ii,
//     title: "Second blog post",
//     date: "February 1, 2014",
//     author: "Amy",
//     bio: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
//     description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
//   },
//   {
//     image: ii,
//     title: "Third blog post",
//     date: "June 1, 2014",
//     author: "Kori",
//     bio: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
//     description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
//   },
// ];
// console.log(postData)

const Home = () => {                                            //fetching post data from local storage
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("postData"));
    setData(data);
  }, []);

  return (
    <>
    <div className=' '>
      <Navbar />

      <section className="flex flex-col mt-3 justify-self-center mx-auto w-[99%] overflow-x-hidden rounded-md bg-[#343A40] text-white">
        <div className="container w-2/3 text-left px-4 md:px-20 py-10 md:py-20">
          <h1 className="font-serif italic font-bold text-3xl md:text-6xl">
            Title of a longer featured blog post
          </h1>
          <p className="mt-4 font-light text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            inventore labore dolorum quam ex porro, molestias asperiores
            perferendis quos nisi exercitationem atque beatae repellendus rem
            vero vel deleniti tenetur itaque.
          </p>
          <a
            href="#"
            className="mt-4 font-medium inline-block hover:text-blue-300"
          >
            Continue Reading...
          </a>
        </div>
      </section>

      <section className="md:flex mt-8 gap-5 px-4 overflow-hidden">
        {smallPostData.map((data, index) => {
          return (
            <SmallPost
              key={index}
              category={data.category}
              title={data.title}
              date={data.date}
              bio={data.bio}
              image={data.image}
            />
          );
        })}
      </section>

      <section className="flex flex-col md:flex-row mt-6 mx-2 gap-8 overflow-hidden">
        <div className="w-full md:w-3/4">
          <h1 className="italic font-serif font-bold text-4xl">
            From the Firehouse
          </h1>
          <hr className="w-full border-1 my-4 border-gray-300" />

          <article>
            
           {data? (data.map((data, index) => {
              return (
                <Post
                  key={index}
                  title={data.postTitle}
                  date={data.postDate}
                  author={data.postAuthor}
                  bio={data.postBio}
                  description={data.postDescription}
                  image={data.postImage}
                />
              )
            })
            )
            : null}
          </article>

          <div className="flex gap-1">
            <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded-full">
              Older
            </button>
            <button className="border border-gray-400 text-gray-400 px-2 py-1 rounded-full">
              Newer
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="bg-[#F8F9FA] rounded-md m-2 p-5">
            <h1 className="italic font-serif font-bold text-4xl">About</h1>
            <p className="text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium consequatur ullam laudantium nobis porro voluptatum
              molestias fugiat est eum.
            </p>
          </div>

          <div className="m-2 p-5">
            <h1 className="italic font-serif font-bold text-4xl">Archives</h1>
            <ul className="mt-1 font-medium text-[#017BFF]">
              {archiveData.map((element) => (
                <li key={element}>
                  <a href="#" className="hover:text-blue-800">
                    {element}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="m-2 p-5">
            <h1 className="italic font-serif font-bold text-3xl md:text-[3vw]">
              Elsewhere
            </h1>
            <ul className="mt-1 font-medium text-[#017BFF]">
              {["Github", "Twitter", "Facebook"].map((socials) => (
                <li key={socials}>
                  <a href="#" className="hover:text-blue-800">
                    {socials}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Home;
