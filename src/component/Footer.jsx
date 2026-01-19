
import React from 'react'
import logo from "../picture.asset/logo.jpeg";
import email from "../picture.asset/email.png";
import facebook from "../picture.asset/facebook.png";
import instagram from "../picture.asset/instagram.png";
import X from "../picture.asset/X.png";
export default function Footer() {
  return (
    <>
    

<footer class="bg-gray-900 ">
    <div className='text-center text-white'>
    <h3 class="mb-2 text-sm font-semibold text-heading uppercase">Contact Us</h3>
    <h1 class="mb-2 text-2xl font-bold ">Contact Us</h1>
    <p className='text-sm font-medium'>You can contact us anytime using the foolowing site below. We are always happy <br></br> to respond, collaborate and assist you when needed.Reach out to us, <br></br> and we will get back to you as soon as possible.</p>
    </div>
    <div class=" w-full  p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 flex  ">
              
                  <img src={logo} class="h-14 me-3 w-19 " alt="Logo" />
                  
                  <span class="text-heading self-center text-2xl font-semibold whitespace-nowrap mb-12 text-white">OKORO IFEANYI FRANCIS</span>
             
          </div>
          <div class="flex me-4 sm:justify-center sm:mt-0 items-center  ">
            <a href="https://www.facebook.com/okoro.francis.10" class="text-body hover:text-heading  w-32 h-14 border-2 rounded-md overflow-hidden  ">
                
                <img src={facebook} className='w-10 mt-1  m-auto ' alt="Facebook" />
                <span class="sr-only">Facebook page</span>
            </a>
            <a href="https://www.x.com/Ifeanyi12688379" class="text-body hover:text-heading ms-5 w-32 h-14 border-2 rounded-md overflow-hidden">
            
            <img src={X} className='w-10 mt-1 m-auto ' alt="X" />
            <span class="sr-only">X</span>
            </a>
            <a href="https://www.instagram.com/okorofrancisifeanyi" class="text-body hover:text-heading ms-5 w-32 h-14 border-2 rounded-md overflow-hidden">
            
            <img src={instagram} className='w-10 mt-1 m-auto' alt="instagram" />
            <span class="sr-only">Instagram</span>
            </a>
            <a href="https://www.mailto:okorov028@gmail.com" class="text-body hover:text-heading ms-5 w-32 h-14 border-2 rounded-md overflow-hidden">
                        <img src={email} className='w-10 mt-1 m-auto' alt="Email" />
            <span class="sr-only">Email</span>
            </a>
            </div>
                </div>
      <hr class="my-6 border-default sm:mx-auto lg:my-8 " />
      <div class="sm:flex sm:items-center sm:justify-between ">
          <span class="text-sm text-body sm:text-center ml-96 text-white">© 2023 <a class="hover:underline">OKORO IFEANYI FRANCIS™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    </>
  )
}
