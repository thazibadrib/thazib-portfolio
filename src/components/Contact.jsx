import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/32001df2-f92f-4def-84a1-100d27f57175" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b- border-red-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email - tbadrib@gmail.com</p>
            </div>
            <input className='bg-[#e5ebce] p-2' type="text" placeholder='Name' name="name" />
            <input type="email" placeholder='Email' name="email" className='my-4 p-2 bg-[#e5ebce]'/>
            <textarea name="message" rows="10" className='bg-[#e5ebce]' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#232769] hover:border-[#232769] px-4 py-3 my-4 mx-auto flex items-center rounded-md hover:shadow-lg'>Let's Connect</button>
        </form>

    </div>
  )
}

export default Contact