import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>

    <section>
      <div className='flex flex-col w-screen rounded-sm p-10 bg-[#343A40] text-white'>
        <h1 className='font-timw text-4xl'>Title of a longer featured blog post</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio inventore labore dolorum quam ex porro, molestias asperiores perferendis quos nisi exercitationem atque beatae repellendus rem vero vel deleniti tenetur itaque.</p>
        <a>Continue Reading</a>
      </div>
    </section>


    <Footer/>
    </>
  )
}

export default Home
