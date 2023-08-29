import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-100'>
        <div className='flex flex-col justify-center items-center w-full h-full  '>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pl-4 pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-300 '>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className=' sm:text-right text-4xl font-bold '>
                        <p>Hi. I am Thazib, nice to meet you. Thank you for visting my page. </p>
                    </div>
                    <div>
                        <p>I have always been eager to learn new technologies and apply them through building intersting projects that can help solve real world problems. I have speacialized in building applications for clients ranging from individuals to businesses.Please take a tour of the site to learn further about my skills. </p>
                    </div>

                </div>
        </div>

    </div>
  )
}

export default About