import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className='flex px-10 static bottom-0 left-0 h-32 w-screen p-4 justify-between text-center bg-[#F9F9F9] text-[#959595]'>
        <div className='content-center flex gap-10 '>
            <div> 
            <h1 className='text-5xl font-serif font-semibold'>Large</h1>
            <h4 className='text-xs mt-2 '>Copyright 2024©</h4>
            </div>
                <button className="border rounded-md">Subscribe</button>
        </div>
        <div className=''>
            <h1 className='  text-gray-400 font-bold'>Contact Us</h1>

            <ul className="mt-1 text-sm text-[#717171]">
              {[
                "Github",
                "Twitter",
                "Facebook",

              ].map((socials) => (
                <li key={socials}>
                  <a href="#" className="hover:text-blue-800">
                    {socials}
                  </a>
                </li>
              ))}
            </ul>
        </div>

    </footer>
    </>
  )
}
