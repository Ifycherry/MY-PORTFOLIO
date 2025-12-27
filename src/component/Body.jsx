
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import phone from "../picture.asset/phone.png"

export default function Body() {
  return (
    <>
  
    <div className='flex  items-center justify-around gap-80 '>
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
    <p className='text-yellow-300'>____</p>
    <h5 className='font-semibold text-2xl '>Facebook | X | Email| Instagram | Whatsapp </h5>
    <button className='border-4 border-yellow-300 rounded-md overflow-hidden text-yellow-300 font-normal mt-4'>Contact Us</button>
    </h1>
    
    </div>
    <div>
    <img src={phone} alt="phone" />
    </div>
    <span>

      <h4 className='font-semibold'>INTRODUCTION</h4>
      <h2 className='text-2xl font-medium'>Full Stack Web <br/> Developer.</h2>
      <p class="line-clamp-1 mr-10 ">I'm a full-stack web developer with a strong focus on <br/> building fast, user-friendly, and scalable web application<br/> i work with modern fronted tools like React and Tailwind CSS, and backend <br/> technologies such as Node.js,PHP(Laravel) plus databases like MongoDB and MYSQL. <br/>I enjoy turning ideas into reak products, solving problems <br/> with clean code, and continuously learning <br/> new technologies to improve my craft.</p> 
    </span>
    </div>

    </>
  )
}
