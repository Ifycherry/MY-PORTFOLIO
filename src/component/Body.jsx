
import React from 'react'
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import phone from "../picture.asset/phone.png"

export default function Body() {
  const [readmore, setReadmore] = useState(false)
  return (
    <>
  
    <div className='flex  items-center justify-around gap-80 bg-gray-950 text-xl font-bold overflow-hidden'>
      <div className='ml-12'>
      <h1 style = {{fontSize: '27px', fontweight: 600}}>
      <span className='font-bold text-blue-500'>
      <Typewriter
    words={['OKORO IFEANYI FRANCIS.']}
    loop = {1}
    cursorColor='#000'
    cursorStyle = "|"
    typeSpeed={100}
    autoStart = {true}
    />
      </span>
    <p className='text-yellow-300'>__</p>
    <h5 className='font-semibold text-2xl text-white '>Facebook | X | Email <br/>| Instagram | Whatsapp </h5>
    <button className='border-2 border-yellow-300 rounded-md overflow-hidden text-yellow-300 font-normal mt-4 w-36'>Contact Us</button>
    </h1>
    
    </div>
    <div className='text-white'>
    <img src={phone} className='invert brightness-0' alt="phone" />
    </div>
    <span>

      <h4 className='font-semibold text-white'>INTRODUCTION</h4>
      <h2 className='text-2xl font-medium text-white'>Full Stack Web <br/> Developer.</h2>
      
      <p class="line-clamp-1 mr-10 text-white">I'm a full-stack web developer with a strong</p> 
      { readmore && (
      <p className='text-white'> focus on building fast, user-friendly, and scalable<br/> web application i work with modern fronted tools like React and<br/> Tailwind CSS, and backend technologies such as Node.js,PHP(Laravel) plus<br/> databases like MongoDB and MYSQL. I enjoy turning ideas into reak products,<br/> solving problems with clean code, <br/>and continuously learning new technologies to improve my craft.</p> 
      )}
      <button className='text-white' onClick={() => setReadmore(!readmore)}>{readmore ? "Read less" : "Read more"}</button>
    </span>
    </div>

    </>
  )
}
