import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import userImg from '../assets/userAsset/profile-pic.png';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from '../assets/userAsset/sandeep-cv.pdf'
import Spline from '@splinetool/react-spline';


export const HeroSection = () => {

  const onButtonClick = () => {
    // const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = resume;
    link.download = "sandeepCv.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='about' className=" flex flex-col sm:flex-row justify-between w-[95%] sm:w-11/12 mt-4 items-center text-center sm:text-start">

      <div className="flex flex-col gap-3 w-full items-center sm:items-start sm:w-[60%]">
        <div className=" text-[2em] z-10">Greetings!</div>

        <div className="flex flex-col sm:flex-row gap-2 z-10">
          <p className='text-[1.8em]'>I am a </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Student',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Learner',
              1000,
              'Full Stack Developer',
              1000,
              'Programmer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.8em', display: 'inline-block' }}
            repeat={Infinity}
            className=' text-blue-600'
          />
        </div>

        <div className="z-10">
          Web developer and programmer with experience in MERN stack and
          C++. Proven ability to design, develop, and deliver high-quality
          web applications. Expertise in all aspects of the web development
          process, from front-end design to back-end development. Strong
          problem-solving and analytical skills. Ability to work
          independently and as part of a team.
        </div>

        <div className='flex gap-4 items-center justify-start text-white z-10'>
          <div className="py-1 px-2 rounded-md bg-orange-600 w-fit cursor-pointer drop-shadow-xl hover:scale-95 transition-all" id="btn">
            <a href="mailto:sandeepkv233@gmail.com">
              Hire me
            </a>
          </div>

          <button 
          className="py-1 px-2 rounded-md bg-blue-600 w-fit cursor-pointer drop-shadow-xl hover:scale-95 transition-all"
          onClick={onButtonClick}
          >
            Resume
          </button>

        </div>
        
        <div className=' absolute h-[50%] w-[100%] left-0 top-0'>
          <Spline scene="https://prod.spline.design/zl9PLlOp7qPBjXI6/scene.splinecode"/>
        </div>
        

      </div>

      {/* porfile card */}
      <div className='mt-3 sm:mt-0 z-10'>
        <div className=" max-w-fit glassmorphism rounded-sm relative">
          <div className="flex sm:flex-col items-center p-4">
            <img src={userImg}
             alt="sandeep"
             className='h-[86px] w-[86px] mb-3 rounded-full shadow-lg'
            />
            
            <div className=' flex flex-col items-center p-4'>
              <h5 className="mb-1 text-base font-medium text-white">Sandeep Kumar</h5>
              <span className=" hidden sm:block text-sm text-white">Developer</span>
              <div className="mt-4 flex flex-wrap space-x-3 items-center lg:mt-6">
                {/* LInkedIn  */}
                <a href="https://www.linkedin.com/in/sandeep-kumar-bb3b2619b/" className=' transition-all hover:scale-95'>
                  <FaLinkedin size={24} className=' text-white hover:text-blue-500 transition-all' />
                </a>
                {/* GitHub  */}
                <a href="https://github.com/sandeep-233" className=' transition-all hover:scale-95'>
                  <FaGithubSquare size={24} className=' text-white hover:text-blue-500 transition-all' />
                </a>
                {/* X or Twitter  */}
                <a href="https://twitter.com/SANDEEP00796257" className=' transition-all hover:scale-95'>
                  <FaSquareXTwitter size={24} className=' text-white hover:text-blue-500 transition-all' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
