import React from "react";

function Post({ title, author, bio, date, description, image }) {
  return (
    <>
      <div className=" m-1 flex flex-col w-full mx-2  ">
        <section className="-6">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold font-serif text-3xl">{title}</h1>
              <h1 className="font-semibold text-gray-300 text-xs">
                {" "}
                {date} by {author}{" "}
              </h1>
            </div>
            <div>
              <img
                className="object-right-top w-32 h-auto"
                src={image}
                alt=""
              />
            </div>
          </div>
          <p className="font-semibold py-2 text-md">{bio}</p>
          <hr className="w-full border-1 my-4 border-gray-300 "></hr>
          <p className="font-semibold py-2 text-md">{description}</p>

          {/* <p className="font-semibold py-2 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, similique sit vero facilis eius dignissimos eligendi cum. Veniam fugit tenetur alias, fugiat recusandae iste magnam quos asperiores error sint.</p>
          <h1 className="font-semibold font-serif text-2xl">Heading</h1>
          <p className="font-semibold py-2 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam incidunt provident assumenda! is dolorum expedita commodi quaerat quas laudantium ipsa aspernatur.</p>
          <h1 className="font-semibold font-serif text-2xl">Sub-heading</h1>
          <p className="font-semibold py-2 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam incidunt provident assumenda! is dolorum expedita commodi quaerat quas laudantium ipsa aspernatur.</p>
          <h1 className="font-semibold font-serif text-2xl">Sub-heading</h1>
          <p className="font-semibold py-2 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam incidunt provident assumenda! is dolorum expedita commodi quaerat quas laudantium ipsa aspernatur.</p>
          <ul className="list-disc text-md pl-8">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab tempore laboriosam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab tempore laboriosam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab tempore laboriosam.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul className="list-decimal text-md pl-8">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab tempore laboriosam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab tempore laboriosam.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab tempore laboriosam.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        </section>
      </div>
    </>
  );
}

export default Post;
