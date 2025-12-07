
import logo from "../picture.asset/logo.jpeg";
import facebook from "../picture.asset/facebook.png";
import instagram from "../picture.asset/instagram.png";
import X from "../picture.asset/X.png";
//import email from "../picture.asset/email.png";
import phone from "../picture.asset/phone.png";

export default function footer() {
  return (
    <>
    

<footer class="bg-neutral-primary-soft mt-12 bg-gray-900 border-blue-600" >
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
        <div class="md:flex md:justify-between ml-20 mt-12">
          <div class="mb-6 md:mb-0 ">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={logo} class="h-20 w-20 me-3 " alt="logo" />
                  <span class="text-heading self-center  text-lg font-semibold whitespace-nowrap">OKORO IFEANYI FRANCIS, <br/> full stack developer</span>
              </a>
          </div>
          <div class=" gap-8 sm:gap-6  ">
          {/* <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1 "> */}
              <div className="mr-60">
                  <h4 class="mb-6  font-bold text-lg text-heading ">Contact Us</h4>
                  <h2 class="mb-6 text-2xl font-bold text-heading">Way To Contact Me</h2>
                  <p class="mb-6 text-2xl font-bold text-heading">If you'd like to work with me or discuss <br/> your project idea, i'd love to connect! <br/> You can contact me here:</p> 
              </div>

              </div>
         </div>
         <div className="flex gap-20 justify-center mt-10 ">
                <a className=" w-36  h-13 border border-teal-700 bg-teal-700 rounded-md text-center" href="https://www.facebook.com/okoro.francis.10" target="_blank" rel="noopener noreferrer"><img className="w-10 ml-11"src={facebook} alt="facebook" /></a>
                <a className=" w-36 h-13 border border-teal-700 bg-teal-700 rounded-md text-center" href="https://www.X.com/ifeanyi12688379"><img className="w-10 ml-11" src={X} alt="X" /></a>
                <a className=" w-36 h-13 border border-teal-700 bg-teal-700 rounded-md text-center" href="https://www.instagram.com/okorofrancisifeanyi"><img className="w-10 ml-11" src={instagram} alt="instagram" /></a>
                {/* <a className="w-36 h-13 border border-teal-700 bg-teal-700 rounded-md text-center" href="mail to: okoro2020v@gmail.com"><img className="w-10 ml-11" src={email} alt="email" /></a> */}
                <a className=" w-36 h-13 border border-teal-700 bg-teal-700 rounded-md text-center" href="tel:+2349092117813"><img className="w-10 ml-11" src={phone} alt="phone" /></a>
                </div>

      <hr class="my-6 border-default sm:mx-auto lg:my-8 " />
      <div class="sm:flex sm:items-center sm:justify-between ">
          <span class="text-sm text-body sm:text-center ml-96"><a href="$" class="hover:underline-none ml-28">© 2023 Okoro Ifeanyi Francis™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

    </>
  )
}
