import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import SmallPost from "../components/SmallPost";
import ii from "../assets/ii.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="flex flex-col w-screen rounded-md m-1  bg-[#343A40] text-white">
        <div className="container text-left  w-1/2 pl-20 py-20 ">
          <h1 className="font-serif  italic font-bold text-6xl">
            Title of a longer featured blog post
          </h1>
          <p className="mt-4 font-light text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            inventore labore dolorum quam ex porro, molestias asperiores
            perferendis quos nisi exercitationem atque beatae repellendus rem
            vero vel deleniti tenetur itaque.
          </p>
          <a
            href="#"
            className="mt-4 font-medium inline-block  hover:text-blue-300"
          >
            Continue Reading...
          </a>
        </div>
      </section>

      <section className="flex mt-8 gap-5">
        <SmallPost
          category="World"
          title="Featured Post"
          date="12 Nov"
          bio="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          image={ii}
        />
        <SmallPost
          category="World"
          title="Featured Post"
          date="12 Nov"
          bio="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          image={ii}
        />
      </section>

      <section className="flex mt-6 columns-2">
        <div className="w-3/4">
          <h1 className="italic font-serif font-bold text-[3vw]">
            From the Firehouse
          </h1>
          <hr className="w-[90%] border-1 mt-4 border-gray-300 "></hr>
        </div>

        <div className="w-1/3">
          <div className="bg-[#F8F9FA] rounded-md m-2 p-5">
            <h1 className="italic font-serif font-bold text-[3vw]">About</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium consequatur ullam laudantium nobis porro voluptatum
              molestias fugiat est eum.{" "}
            </p>
          </div>

          <div className="m-2 p-5">
            <h1 className="italic font-serif font-bold text-[3vw]">Archives</h1>
            <ul className="mt-1 font-medium text-[#017BFF]">
              {[
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
              ].map((archive) => (
                <li key={archive}>
                  <a href="#" className="hover:text-blue-500">
                    {archive}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
