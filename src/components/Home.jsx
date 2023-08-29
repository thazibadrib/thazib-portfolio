import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  '>
        <p className='text-[#c9b6d6] sm:text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#96e3f2] '>Thazib Adrib</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#22b6d4] '>I am a web developer.</h2>
        <p className=' text-lg font-semibold py-4 max-w-[700px] text-[#69345f]'>I focus on creating unique and fully responsive web applications for my clients</p>
        <div>
            <button className='text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-slate-600 hover:border-slate-600 '>My Projects
            <span className='group-hover:rotate-90 duration-300'>
               <HiArrowNarrowRight className='ml-3'/> 
            </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home