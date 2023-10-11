import React, { useState } from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {
  SiRedux,
  SiTailwindcss,
  SiAdobeillustrator,
  SiFirebase,
  SiNextdotjs
} from "react-icons/si";
import { Link } from 'react-router-dom'

const Home = (props) => {

  const scrolltoabout=()=>{
  
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrolltotop=()=>{

    const top = document.getElementById('top');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrolltocontact=()=>{

    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const submitdata = async () => {
    if (name !== "" && email !== "" && message !== "") {
      setEmail("")
      setName("")
      setmessage("")
      alert("message send succesfully")
    }
    if (name === "" || email === "" || message === "") {
      alert("please enter your details & message")
    }
    if (name && email && message) {
      const responce = fetch(
        "https://portfolio-2c626-default-rtdb.firebaseio.com/usermessage.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (responce) {
      }
    } else {
    }
  };


  return (
    <>

<div className=" fixed w-full bg-[#202020] z-10 text-white">

<div className='text-white flex justify-between items-center navbar px-40 pt-4'>
      <Link to="/">
      <img className='logo h-16' src="./images/logo.png" alt="" />
      </Link>
      <div className='flex flex-row gap-12 uls'>
        <Link to="/">
        <div onClick={scrolltotop} className='item'>
        <li className='one'>Home</li>
        <li className='one'>Home</li>
        </div>
        </Link>
        <div onClick={scrolltoabout} className='item'>
        <li  className='one'>About</li>
        <li  className='one'>About</li>
        </div>
        <Link to="/Projects">
        <div className='item'>
        <li  className='one'>Project</li>
        <li  className='one'>Project</li>
        </div>
        </Link>
        <div onClick={scrolltocontact} className='item'>
        <li  className='one'>Contact</li>
        <li  className='one'>Contact</li>
        </div>
      </div>
    </div>

    </div>

      <div id="top" className="container flex h-screen w-full gap-40 flex-row bg-[#202020] py-12 px-16 items-center justify-evenly pt-40">
        <div>
          <div className="overflow">
          <h1 className="text-7xl text-white font-light name">I'M, ARYAN TYAGI</h1>
          </div>
          <div className="overflow">
          <h1 className="text-2xl text-white my-6 react">
            REACT WEB DEVELOPER & DESIGNER
          </h1>
          </div>
          <div className="overflow">

          <h1 className="text-xl text-white my-1 tagline">
            "Elevating Your Online Presence Through Innovative Web Development,
            <br /> Where Creativity Meets Functionality."
          </h1>
          </div>
        </div>
        <div className="imageone">
          <img src="./images/profile.png" alt="" />
        </div>
      </div>

      <div id="about" className="container other bg-white">
        <div className=" flex-wrap h-full w-full flex flex-row justify-center pt-24 gap-20 about">
          <div className="bg-black overflow-hidden box flex justify-center items-center">
          <img className=" scale-150 w-full bg-current" src="./images/myimg.jpeg" alt="" />
          </div>
          <div className="w-2/5 aboutdetails">
            <h1 className="text-4xl font-semibold">ABOUT</h1>
            <div className="w-1/2 h-[5px] bg-[#0e1317] mt-2 mb-6 rounded-full"></div>
            <p>
            Hello, I'm Aryan Tyagi, a passionate React web developer based in India. At just 20 years old, I'm on an exciting journey to create innovative web experiences. I'm currently pursuing a Bachelor of Technology (B.Tech) degree at Jabalpur Engineering College, where I'm honing my technical skills and expanding my knowledge in the world of computer science.<br /> <br /> 
            
            <span className="font-semibold">Web Development Expertise : </span>
            I specialize in React, and I'm fluent in crafting interactive and dynamic web applications. My proficiency in React allows me to turn ideas into functional and user-friendly digital solutions. I'm also well-versed in using Tailwind CSS to create elegant and responsive user interfaces.

            <br /><br />

            <span className="font-semibold">Design and Creativity : </span>
Beyond coding, I'm a creative soul. As a graphic designer, I enjoy bringing aesthetics to the digital realm. My design skills enable me to not only build robust web applications but also ensure they look visually appealing and user-friendly.

<br /><br />
            Let's work together to turn ideas into reality. Explore my portfolio to see some of my recent projects and get in touch to discuss how we can collaborate.
            </p>
            <br />
            <br />
            <div className="flex flex-row items-center gap-4">
              <h1 className="font-bold text-xl">Contact : </h1>
              <div className="contacticons flex flex-row text-xl text-zinc-700  gap-4">
              <a href="https://www.instagram.com/_aryannn.07_/"><BsInstagram className="hover:text-black hover:-translate-y-1 duration-150" /></a>
              <a href="https://www.linkedin.com/in/aryan-tyagi-230832255/"><BsLinkedin className="hover:text-black  hover:-translate-y-1 duration-150" /></a>
              <a href="https://github.com/Aryan3007"><BsGithub className="hover:text-black  hover:-translate-y-1 duration-150" /></a>
              <BsDiscord className="hover:text-black  hover:-translate-y-1 duration-150" />
            </div>
            </div>
          </div>
        </div>

        <div className=" h-72 skillup flex-wrap px-44 my-12 w-full flex flex-row justify-evenly items-center">
          <div className="underabout h-44 w-96 bg-white hover:bg-[#f9fafb] duration-200 overflow-hidden flex flex-row gap-3 justify-center items-center">
            <img className="h-full" src="./images/code.png" alt="" />
            <div>
              <h1 className="font-bold">CODING/DSA</h1>
              <p className="text-black text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                praesentium nam sed. Molestiae ex vero aperiam culpa id
                praesentium voluptate sed
              </p>
            </div>
          </div>

          <div className="h-44 w-96 bg-white hover:bg-[#f9fafb] duration-200 overflow-hidden flex flex-row gap-3 justify-center items-center">
            <img className="h-full" src="./images/react.png" alt="" />
            <div>
              <h1 className="font-bold">WEB DEVELOPMENT</h1>
              <p className="text-black text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                praesentium nam sed. Molestiae ex vero aperiam culpa id
                praesentium voluptate sed
              </p>
            </div>
          </div>

          <div className="h-44 w-96 bg-white hover:bg-[#f9fafb] duration-200 overflow-hidden flex flex-row gap-3 justify-center items-center">
            <img className="h-full" src="./images/graphic.png" alt="" />
            <div>
              <h1 className="font-bold">GRAPHIC DESIGNING</h1>
              <p className="text-black text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                praesentium nam sed. Molestiae ex vero aperiam culpa id
                praesentium voluptate sed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-32 skills container2 h-full pb-44 flex justify-center items-center bg-zinc-300 w-full">
        <div className=" justify-center flex flex-col items-center h-full w-full">
          <div className="skillhead w-[65%] flex justify-start flex-col items-left">
            <h1 className="text-4xl font-semibold">SKILLS SECTION</h1>
            <div className="skillunder w-1/3 h-[5px] bg-[#0e1317] mt-2 mb-12 rounded-full"></div>
          </div>

          <div className="port-container h-full w-full p-4 flex flex-wrap flex-row gap-8 justify-center">
            
            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-4 items-center">
                <IoLogoJavascript className="text-5xl text-yellow-500" />
                <h1 className="text-xl">JAVASCRIPT</h1>
                <p className="text-sm">(Advance)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-4 items-center">
                <IoLogoReact className="text-5xl text-[#60dafa]" />
                <h1 className="text-xl">REACT.JS</h1>
                <p className="text-sm">(Intermediate)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-4 items-center">
                <SiTailwindcss className="text-5xl text-[#60dafa]" />
                <h1 className="text-xl">TAILWIND.CSS</h1>
                <p className="text-sm">(Advance)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-4 items-center">
                <SiRedux className="text-5xl text-[#724bb5]" />
                <h1 className="text-xl">REDUX.JS</h1>
                <p className="text-sm">(Beginner)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-4 items-center">
                <SiNextdotjs className="text-5xl" />
                <h1 className="text-xl">NEXT.JS</h1>
                <p className="text-sm">(Beginner)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 gsap cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-4 items-center">
              <img src="./images/gsap.webp" className="h-12 w-12 rounded-lg" alt="" />
                <h1 className="text-xl">GSAP</h1>
                <p className="text-sm">(Advance)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>


            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-2 items-center">
                <SiFirebase className="text-5xl text-[#fe9a00]" />
                <h1 className="text-xl">FIREBASE</h1>
                <p className="text-sm">(Intermediate)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-2 items-center">
                <img className="h-12 w-12" src="./images/spline.webp" alt="" />
                <h1 className="text-xl">SPLINE-3D</h1>
                <p className="text-sm">(Intermediate)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>


            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-2 items-center">
                <SiAdobeillustrator className="text-5xl text-[#fe9a00]" />
                <h1 className="text-xl">ILLUSTRATOR</h1>
                <p className="text-sm">(Intermediate)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>

            <div className="h-52 cursor-default w-80 bg-[#202020] p-8 rounded-lg boxshadow">
              <div className="flex flex-row justify-start text-white gap-2 items-center">
               <img className="w-10 h-12" src="./images/cpp.webp" alt="" />
                <h1 className="text-xl">Cpp/DSA</h1>
                <p className="text-sm">(Intermediate)</p>
              </div>

              <hr className="my-3" />
              <p className="text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                eius cupiditate illo molestias.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      <div id="contact" className=" bg-white h-screen flex flex-col justify-center padding0 contactmob items-center w-full py-20 px-64">
        <div className="w-full flex flex-col justify-start">
          <h1 className="text-4xl font-semibold">CONTACT</h1>
          <div className="skillunder w-1/4 h-[5px] bg-[#0e1317] mt-2 mb-12 rounded-full"></div>
        </div>

        <div className="gap-4 h-[100%] w-[100%] contactbox flex justify-between ">
          <div className="w-1/2 padding0 cennn p-12">
            <p className="text-2xl font-semibold margin0 my-8">
              Feel free to contact me...
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
              optio exercitationem debitis id. Sint doloremque, quo suscipit
              assumenda quaerat beatae blanditiis illum facere perferendis
              provident! Quis eum ad nemo?
            </p>
            <div className="contacticons flex flex-row text-xl my-8 text-zinc-700  gap-4">
              <a href="https://www.instagram.com/_aryannn.07_/"><BsInstagram className="hover:text-black hover:-translate-y-1 duration-150" /></a>
              <a href="https://www.linkedin.com/in/aryan-tyagi-230832255/"><BsLinkedin className="hover:text-black  hover:-translate-y-1 duration-150" /></a>
              <a href="https://github.com/Aryan3007"><BsGithub className="hover:text-black  hover:-translate-y-1 duration-150" /></a>
              <BsDiscord className="hover:text-black  hover:-translate-y-1 duration-150" />
            </div>
          </div>

          <div  className="h-full inputfield w-1/2  p-12 py-20 flex flex-col items-center justify-center gap-4">
            <input
              required
              autoComplete="true"
              name="usename"
              type="text"
              placeholder="Your Name"
              value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              className="h-12 bg-[#d4d4d8] field1 p-4 w-[80%] rounded-lg"
            />
            <input
              required
              autoComplete="true"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              className="h-12 bg-[#d4d4d8] field1  p-4 w-[80%] rounded-lg"
            />
            <textarea
              required
              autoComplete="true"
              name="message"
              id=""
              cols="38"
              rows="3"
              placeholder="Enter your message"
              value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              className="p-4 bg-[#d4d4d8] field1 textarea rounded-lg"
            ></textarea>
            <div className="flex w-[80%] center justify-end">

            <button onClick={submitdata} className="px-2 bg-black text-white h-10 send">
              SEND MESSAGE
            </button>
            </div>
          </div>
        </div>
      </div>
                <div className="flex justify-end mt-12">

      <h1 className="text-center footer w-full h-full bg-[#202020] text-white py-6">@ all rights reserved to Aryan Tyagi</h1>
                </div>
    </>
  );
};

export default Home;
