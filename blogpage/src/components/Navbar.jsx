import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export const Navbar = () => {
  return (
    <>
        <div className='flex relative  h-24 justify-between items-center shadow-lg bg-white px-7 py-9 '>
        <button className=''>Subscribe</button>
        <h1 className=' font-bold text-3xl'>Large</h1>

        <ul className='flex space-x-3'>
          <li><SearchIcon/></li>
          <li>
            <button className='border border-black rounded-sm py-1 px-2' >Sign up </button>
          </li>
          {/* <li>{cartOpen && <Cart/>}</li>
          <li><Link to={"/Login"} className=' '>LOGIN </Link></li>
          <li><Link to={"/Signup"} className=' '>SIGNUP </Link></li> */}
   
        </ul>


    </div>
        <hr className="w-screen border-1 py-1 border-gray-300 " />
        {/* <ul className='flex'>
            <li>World</li>
            <li>World</li>
            <li>World</li>
        </ul> */}
    </>
  )
}
