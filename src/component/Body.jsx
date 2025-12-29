
import React from 'react'
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profile from "../picture.asset/profile.png"

export default function Body() {
  const [readmore, setReadmore] = useState(false)
  return (
    <>
  
    <div className='flex flex-col md:flex-row items-center justify-around gap-60 bg-gray-950  overflow-hidden w-full min-h-screen mt-1'>
      <div className='ml-12 min-h-[40px]'>
      <h1 style = {{fontSize: '27px', fontweight: 600, minWidth: "300px"}}>
      <span className='font-bold text-blue-500'>
      <Typewriter
    // word={['OKORO IFEANYI FRANCIS.']}
    words ={[
      "OKORO IFEANYI FRANCIS.",
      "Full Stack Software Developer",
      "Frontend . Backend . Mobile"
    ]}
    loop = {true}
    startDelay = {100}
    cursorColor='#000'
    cursor
    cursorStyle = "|"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1000}
    // multiTextDelay = {1000}
    // autoStart = {true}
    // multiTextLoop = {true}
    />
      </span>
    <p className='text-yellow-300'>__</p>
    <h5 className='font-semibold text-2xl text-white '>Facebook | X | Email <br/>| Instagram | Whatsapp </h5>
    <button className='border-2 border-yellow-300 rounded-md overflow-hidden text-yellow-300 font-normal mt-4 w-36'>Contact Us</button>
      </h1>
    
    
    </div>
    <div className=''>
      {/* <div className='w-80 h-80 border-2 border-gray-900 rounded-full bg-gray-700 relative mb-40'></div> */}
    <img src={profile} className='h-96 w-96  border-2 rounded-full border-gray-300 bg-gray-200 mr-32'  alt="profile" />
    </div>
    <span className='text-center mr-6'>

      <h4 className='font-semibold text-white'>INTRODUCTION</h4>
      <h2 className='text-2xl font-medium text-white'>Full Stack Web <br/> Developer.</h2>
      
      <p class="line-clamp-1 mr-10 text-white">I'm a full-stack web developer with a strong</p> 
      { readmore && (
      <p className='text-white'> focus on building fast, user-friendly, and scalable<br/> web application i work with modern fronted tools like React and<br/> Tailwind CSS, and backend technologies such as Node.js,PHP(Laravel) plus<br/> databases like MongoDB and MYSQL. I enjoy turning ideas into reak products,<br/> solving problems with clean code, <br/>and continuously learning new technologies to improve my craft.</p> 
      )}
      <button className='text-orange-600' onClick={() => setReadmore(!readmore)}>{readmore ? "Read less" : "Read more"}</button>
    </span>
    </div>

    </>
  )
}
