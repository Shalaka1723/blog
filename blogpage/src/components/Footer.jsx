import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col sm:flex-row px-4 sm:px-20 py-6 sm:py-4 justify-between text-center bg-[#c8c8c8] text-[#515151] w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 mb-4 sm:mb-0">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-serif font-semibold">Large</h1>
            <h4 className="text-xs mt-1">Copyright 2024©</h4>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
          <div className="text-center sm:text-left">
            <h1 className="text-gray-600 font-semibold">Contact Us</h1>
            <ul className="mt-1 text-sm text-[#727272]">
              {["Github", "Twitter", "Facebook"].map((element) => (
                <li key={element}>
                  <a href="#" className="hover:text-blue-800">
                    {element}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-gray-600 font-semibold pb-3">
              Subscribe to our Newsletter
            </h1>
            <input
              type="email"
              placeholder="abc@email.com"
              className="rounded-full px-2 py-1 text-center text-sm w-full sm:w-auto"
            />
          </div>
        </div>
      </footer>
    </>
  );
};
