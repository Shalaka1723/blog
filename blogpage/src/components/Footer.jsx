import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className='flex px-20 static bottom-0 left-0 h-32 w-screen p-4 justify-between  text-center bg-[#c8c8c8] text-[#515151]'>
        <div className='content-center flex gap-10 '>
            <div> 
            <h1 className='text-5xl font-serif font-semibold'>Large</h1>
            <h4 className='text-xs mt-1 '>Copyright 2024©</h4>
            </div>
        </div>
        <div className='flex gap-16'>
          <div>

            <h1 className='  text-gray-600 font-semibold  '>Contact Us</h1>
            <ul className="mt-1 text-sm text-[#727272]">
              {[
                "Github",
                "Twitter",
                "Facebook",
                
              ].map((element) => (
                <li key={element}>
                  <a href="#" className="hover:text-blue-800">
                    {element}
                  </a>
                </li>
              ))}
            </ul>
              </div>
            <div>
                <h1 className="text-gray-600 font-semibold pb-3">Subscribe to our Newsletter</h1>
                <input type='email' placeholder='abc@email.com' className='rounded-full px-2 py-1 text-center text-sm  '/>
            </div>
        </div>

    </footer>
    </>
  )
}
