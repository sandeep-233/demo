import React, { useState } from 'react'
import { MdExpandLess, MdKeyboardArrowDown } from "react-icons/md";

import { ProjectCard } from './ProjectCard'
import image1 from '../../assets/projects/eduSupport.png'
import image2 from '../../assets/projects/bookStore.png'
import image3 from '../../assets/projects/college managemant.png'

import { OtherProjectCard } from './OtherProjectCard'
import otherProject1 from '../../assets/projects/other Projects/razorpayClone.png'
import otherProject2 from '../../assets/projects/other Projects/spaceSite.png'
import otherProject3 from '../../assets/projects/other Projects/timeManagementComponent.png'
import otherProject4 from '../../assets/projects/other Projects/assesmentComponent.png'
import otherProject5 from '../../assets/projects/other Projects/devDetective.png'

import tailwind from '../../assets/stack/Tailwind.png'
import react from '../../assets/stack/React.png'
import nodejs from '../../assets/stack/NodeJs.svg'
import mongodb from '../../assets/stack/MongoDB.svg'
import express from '../../assets/stack/Express.png'
import html from '../../assets/stack/HTML.png'
import css from '../../assets/stack/CSS.png'
import javascript from '../../assets/stack/Javascript.svg'
import firebase from '../../assets/stack/Firebase.png'


export const Project = () => {

  const [showMore, setShowMore] = useState(false);
  let display = "hidden";
  if(showMore) {
    display = 'flex'
  }


  return (
    <div id='projects' className=' w-11/12 mt-6 flex flex-col items-center gap-3'>
        <h1 className=' font-semibold text-4xl flex items-center justify-evenly mb-3 w-full'>
            <span className=' border border-gray-500 w-[40%] flex'></span> Projects <span className=' border w-[40%] border-gray-500 flex'></span>
        </h1>
        {/* main projects  */}
        <div className='w-full flex flex-col md:flex-row md:justify-between items-center gap-3'>
            <ProjectCard
             image={image1} 
             title='EduSupport' 
             desc='It is a fully functional Ed-tech platform that allows users to create,
             consume, and rate educational content. The platform is built using the
             MERN stack, which includes React.js, Node.js, MongoDB, and Express.js.'
             link1='https://github.com/sandeep-233/Edu-support' 
             link2='https://edu-support-nine.vercel.app/' 
             stacks= {[mongodb, express, react, nodejs, tailwind] }
            />
            <ProjectCard
             image={image3} 
             title='College Management Web-Application' 
             desc='The College Management Web-application is a comprehensive platform 
             built using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
             This application facilitates seamless communication and management for a college environment, 
             catering to the needs of admins, faculty, students, and alumni.'
             link1='https://github.com/sandeep-233/college-management' 
             link2='https://college-management-pi.vercel.app/' 
             stacks= {[mongodb, express, react, nodejs, tailwind]}
            />
        </div>

        {/* show more button  */}
        <div
          onClick={() => setShowMore(!showMore)}
          className=' w-full flex items-center justify-center font-serif glassmorphism hover:text-orange-500 transition-all cursor-pointer' 
        >
          {
            showMore ? 
            <p className='flex items-center gap-3'>Show less<MdExpandLess /></p> 
            : <p className='flex items-center gap-3'>Show more<MdKeyboardArrowDown /></p>
          }
        </div>

        {/* other projects  */}
        <div className={ `${display} flex-wrap justify-evenly glassmorphism p-3 gap-6 h-[55vh] overflow-y-auto w-full` } >
          <OtherProjectCard
            Image={image2}
            link1={'https://github.com/sandeep-233/book-store'}
            link2={'#'}
            title={'BookStore'}
            stacks= {[mongodb, express, react, nodejs, firebase, tailwind, ] }
          />
          <OtherProjectCard
            Image={otherProject1}
            link1={'https://github.com/sandeep-233/razorpay-clone'}
            link2={'https://razorpay-clone-deployment.netlify.app/'}
            title={'Razorpay Clone'}
            stacks= {[html, css, tailwind, javascript] }
          />
          <OtherProjectCard
            Image={otherProject2}
            link={'https://github.com/sandeep-233/space-tourism-multipage-website.github.io'}
            link2={'https://space-tourism-multipage-website-github-io.vercel.app/'}
            title={'Space Tourism'}
            stacks= {[html, css, tailwind] }
          />
          <OtherProjectCard
            Image={otherProject3}
            link={'https://github.com/sandeep-233/Task-management'}
            link2={'https://task-management-eight-iota.vercel.app/'}
            title={'Time-Management Component'}
            stacks= {[react, nodejs, tailwind, html, css] }
          />
          <OtherProjectCard
            Image={otherProject4}
            link={'https://github.com/sandeep-233/My-assessment-component.github.io'}
            link2={'https://assessment-component.vercel.app/'}
            title={'Assesment component'}
            stacks= {[react, nodejs, tailwind, html, css] }
          />
          <OtherProjectCard
            Image={otherProject5}
            link={'https://github.com/sandeep-233/dev-detective'}
            link2={'https://dev-detective-theta.vercel.app/'}
            title={'Dev-detective'}
            stacks= {[html, css, javascript] }
          />
        </div>
    </div>
  )
}
