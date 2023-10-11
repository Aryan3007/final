import React from 'react'
import { GiSonicShoes } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { BsFillCameraFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
const Projects = () => {
  return (
    <>
    <div className='flex overflow-hidden projectdiv flex-row text-white cursor-default whitespace-nowrap'>
      
      <div className='boxes1 overflow-hidden border-white h-screen w-1/4 gap-8 p-8 flex flex-row'>
        <div className='projectdetails'>

        <h1>01</h1>
        <div className='icon h-24 w-24 rounded-full border-red-700 border-2  my-12 overflow-hidden flex justify-center items-center'>
            <GiSonicShoes className='text-4xl'/>
        </div>

        <h1 className='text-4xl font-semibold mt-4'>NIKE <br /> SHOES</h1>
        <p>Tech Stack: React.js, Tailwind.css Firebase</p>
        <h1 className='text-xl font-semibold my-4'>E-Commerce website</h1>

        <a href="https://www.linkedin.com/posts/aryan-tyagi-230832255_webdesigner-webdeveloper-javascriptdeveloper-activity-7108780458531799040-SvEC?utm_source=share&utm_medium=member_desktop"><h1 className='my-4 watchvideo text-rose-600'>Watch video on Linkedin</h1></a>
        <h1 className='my-4'>View Source code</h1>
        </div>

         <div className='images h-[90%] gap-3 flex justify-center flex-col'>
        <img className='w-full' src="/images/img.png" alt="" />
        <img className='w-full' src="/images/img2.png" alt="" />
         </div>
      </div>

      
      <div className='boxes1 overflow-hidden border-white h-screen w-1/4 gap-8 p-8 flex flex-row'>
        <div className='projectdetails'>

        <h1>02</h1>
        <div className='icon h-24 w-24 rounded-full border-red-700 border-2  my-12 overflow-hidden flex justify-center items-center'>
            <ImHeadphones className='text-4xl'/>
        </div>

        <h1 className='text-4xl font-semibold mt-4'>SONY <br />HEADPHONES</h1>
        <p>Tech Stack: React.js, Tailwind.css Firebase</p>
        <h1 className='text-xl font-semibold my-4'>Product design website</h1>

        <a href="https://www.linkedin.com/posts/aryan-tyagi-230832255_webdevelopment-sony-website-activity-7086931790493364224-uAuc?utm_source=share&utm_medium=member_desktop"><h1 className='my-4 watchvideo text-rose-600'>Watch video on Linkedin</h1></a>
        <h1 className='my-4'>View Source code</h1>
        </div>

        <div className='images h-[90%] gap-3 flex justify-center flex-col'>
        <img className='w-full' src="/images/sony1.png" alt="" />
        <img className='w-full' src="/images/sony2.png" alt="" />
         </div>
      </div>

      
      <div className='boxes1 overflow-hidden border-white h-screen w-1/4 gap-8 p-8 flex flex-row'>
        <div className='projectdetails'>

        <h1>03</h1>
        <div className='icon h-24 w-24 rounded-full border-red-700 border-2  my-12 overflow-hidden flex justify-center items-center'>
            <BsFillCameraFill className='text-4xl'/>
        </div>

        <h1 className='text-4xl font-semibold mt-4'>NATURE <br />SHOWCASE</h1>
        <p>Tech Stack: React.js, Tailwind.css Firebase</p>
        <h1 className='text-xl font-semibold my-4'>Showcase for Photography skills</h1>

        <a href="https://www.linkedin.com/posts/aryan-tyagi-230832255_webdevelopment-designing-html-activity-7089855921790623744-rWyT?utm_source=share&utm_medium=member_desktop"><h1 className='my-4 watchvideo text-rose-600'>Watch video on Linkedin</h1></a>
        <h1 className='my-4'>View Source code</h1>
        </div>

        <div className='images h-[90%] gap-3 flex justify-center flex-col'>
        <img className='w-full' src="/images/nature1.png" alt="" />
        <img className='w-full' src="/images/nature2.png" alt="" />
         </div>
      </div>

      
      <div className='boxes1 overflow-hidden border-white h-screen w-1/4 gap-8 p-8 flex flex-row'>
        <div className='projectdetails'>

        <h1>04</h1>
        <div className='icon h-24 w-24 rounded-full border-red-700 border-2  my-12 overflow-hidden flex justify-center items-center'>
            <BsFillPersonFill className='text-4xl'/>
        </div>

        <h1 className='text-4xl font-semibold mt-4'>PERSONAL <br />PORTFOLIO</h1>
        <p>Tech Stack: React.js, Tailwind.css Firebase Spline-3D</p>
        <h1 className='text-xl font-semibold my-4'>Personal Portfolio website</h1>

        <h1 className='my-4 watchvideo text-rose-600'>Watch video on Linkedin</h1>
        <h1 className='my-4'>View Source code</h1>
        </div>

        <div className='images h-[90%] gap-3 flex justify-center flex-col'>
        <img className='w-full' src="/images/port1.png" alt="" />
        <img className='w-full' src="/images/port2.png" alt="" />
         </div>
      </div>


    </div>
    </>
  )
}

export default Projects
