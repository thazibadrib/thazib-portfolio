import React from 'react'
import HTML from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Css from '../assets/css.png';
import Tailwind from '../assets/tailwind.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300 '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-red-300 '>Skills</p>
                <p className='py-4 '>Technologies that I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={HTML} alt="HTML Icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={Css} alt="CSS Icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={Javascript} alt="Javascript Icon" />
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={ReactImg} alt="React Icon" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={Tailwind} alt="Tailwind Icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={Firebase} alt="Firebase Icon" />
                <p className='my-4'>Firebase</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={Node} alt="Node Icon" />
                <p className='my-4'>Node</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  '>
                <img className='w-20 mx-auto ' src={Github} alt="Github Icon" />
                <p className='my-4'>Github</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;