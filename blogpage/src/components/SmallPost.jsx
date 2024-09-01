import React from "react";

const SmallPost = ({ category, title, bio, date, image }) => {
  return (
    <>
      <div className="border border-gray-300 m-1 shadow-md flex columns-2 rounded-sm h-80 w-1/2">
        <section className="p-6">
          <h1 className="font-bold text-md">{category}</h1>
          <h1 className="font-semibold font-serif text-4xl">{title}</h1>
          <h1 className="font-semibold text-[#959595] text-md">{date}</h1>
          <p className="font-semibold py-2 text-lg">{bio}</p>
          <a
            href="#"
            className=" font-medium text-lg py-2 inline-block text-[#017BFF]  hover:text-blue-800"
          >
            Continue Reading
          </a>
        </section>
        <div className="w-[80%]">
          <img
            className=""
            style={{
              height: "100%",
              objectFit: "cover",
            }}
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SmallPost;
