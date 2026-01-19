

import React from 'react'
import { useState } from 'react'

export default function Body1() {
  const [readmore, setReadmore] = useState(false)
  return (
    <>
    <div className='flex flex-col min-h-96  md:flex-row justify-around  text-center bg-gray-950 gap-4 '>
      <div className=''>
      <h1 className='text-4xl font-extrabold text-white'>About <span className='text-red-400'>Me</span></h1>
      <div className=' mt-2 text-white text-center  '>
      <p>I build responsive, performant front-end<br/>
      interfaces that users love.
      </p>
      </div>
      </div>
      <div className='ml-3 text-center '>
        <p className='line-clamp-none text-sm font-medium text-white '>Hi, I'm a Full Stack Developer who enjoys turning ideas into real, working<br/> products. I build fast, secure, and user - friendly applications using modern <br/>technologies like HTML, CSS, Javascript, Bootstrap, Tailwind CSS, React,React<br/> Native, PHP, Laravel,Node.js, database such as MySQL, SQLite,<br/> MongoDB, Firebase, Git & GitHub and Research.</p>
          { readmore && (
        <p className='text-yellow-100'>
          Am currently working with Roncloud Technologies, I love solving problems, <br/>improving performance, and writing clean, maintainable code. When I'm not<br/> coding, I'm learning new tools and sharing knowledge with others.<br/> I'm always open to collaborating on exciting projects and opportunities.
        </p>
          )}
          <button className='text-orange-600' onClick={() => setReadmore(!readmore)}>{readmore ? "Read less" : "Read more"}</button>
        <div className=' justify-center mt-8 gap-10 text-center mr-9 h-auto '>
        <span className='flex justify-center gap-2 mt-5 '>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1  text-yellow-50 '>HTML</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1  text-yellow-50 '>CSS</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-20 h-8  p-1  text-yellow-50 '>Javascript</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-20 h-8  p-1  text-yellow-50 '>Bootstrap</p>
        </span>
        <span className='flex   justify-center gap-1 mt-5'>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-28 h-8  p-1  text-yellow-50 ml-4 '>Tailwind CSS</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-20 h-8  p-1 text-yellow-50  '>React</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-28 h-8  p-1 text-yellow-50  '>React Native</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-20 h-8  p-1 text-yellow-50 '>PHP</p>
        </span>
        <span className='flex   justify-center gap-3 mt-5'>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1 text-yellow-50 '>Laravel</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1 text-yellow-50 '>Node.js</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1 text-yellow-50 '>MySQL</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1 text-yellow-50 '>SQLite</p>
        </span>
        <span className='flex   justify-center gap-1 mt-5'>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-28 h-8  p-1 text-yellow-50 '>MongoDB</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1 text-yellow-50 '>Firebase</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-28 h-8  p-1 text-yellow-50 '>Git & GitHub</p>
        <p className='border-2 rounded-lg border-red-400 bg-red-300 overflow-hidden w-16 h-8  p-1 text-yellow-50 '>Research</p>
        </span>
        </div>
      </div>
      {/* <div id="fullWidthTabContent" class="border-t border-default">
        <div class="hidden p-4 rounded-base md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-heading sm:grid-cols-3 xl:grid-cols-6 sm:p-8"> */}
            <div className='flex flex-wrap  gap-6  justify-center mt-6 h-auto max-h-[300px] object-cover'>
                <div class="flex flex-col border-2 w-32 h-24  text-white">
                    <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">73M+</dt>
                    <dd class="text-body">Developers</dd>
                </div>
                <div class="flex flex-col border-2 w-32 h-24 text-white">
                    <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">100M+</dt>
                    <dd class="text-body">Public repositories</dd>
                </div>
                <div class="flex flex-col border-2 w-32 h-24 text-white">
                    <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">1000s</dt>
                    <dd class="text-body">Open source projects</dd>
                </div> 
                 <div class="flex flex-col border-2 w-32 h-24 mb-64 text-white">
                    <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">1000s</dt>
                    <dd class="text-body">Open source projects</dd>
                </div>
                </div>
              
            {/* </dl>
        </div>
        </div> */}
    </div>

    </>
  )
}
