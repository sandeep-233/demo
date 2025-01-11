import React from 'react'

import gfg from '../assets/coding platform/gfg.png'
import hackerRank from '../assets/coding platform/hackerrank.png'
import leetcode from '../assets/coding platform/leetcode.png'

import bootstrap from '../assets/stack/Bootstrap.svg'
import chartJs from '../assets/stack/ChartJs.svg'
import express from '../assets/stack/Express.png'
import firebase from '../assets/stack/Firebase.png'
import git from '../assets/stack/Git.svg'
import gitHub from '../assets/stack/Github.svg'
import html from '../assets/stack/HTML.png'
import css from '../assets/stack/CSS.png'
import javascript from '../assets/stack/Javascript.svg'
import mongodb from '../assets/stack/MongoDB.svg'
import nodeJs from '../assets/stack/NodeJs.svg'
import react from '../assets/stack/React.png'
import redux from '../assets/stack/Redux.svg'
import tailwind from '../assets/stack/Tailwind.png'
import vercel from '../assets/stack/Vercel.svg'
import blob from '../assets/userAsset/blob vector.png'


export const MeAndStack = () => {
  return (
    <div id='skills' className=' w-10/12 mt-4'>

        <div className="flex flex-col md:flex-row w-full items-center justify-between">
            {/* <div className="skill-fade-text">Skills</div> */}

            <div className=" w-full md:w-[48%] flex flex-col justify-between gap-2">
                <h2 className=" w-full text-center md:text-start text-orange-600 text-3xl">
                    <span className=" text-4xl font-semibold">M</span>e and
                    <br />
                    MyTech Stack
                </h2>

                <div className="flex flex-col gap-2 text-sm">
                    <p>
                    I am a 2024 graduate student at University College of Engineering and
                    Technology, Hazaribagh, specializing in web development with a
                    strong focus on the MERN stack. I am also proficient in C++, a
                    primary programming language. With a passion for creating dynamic
                    and user-friendly web applications, I have honed my skills through
                    coursework and personal projects, demonstrating the ability to
                    design and develop responsive, efficient, and visually appealing
                    websites. I am committed to continuous learning and innovation in
                    the field of web development and programming, eager to contribute
                    my expertise to future projects and teams.
                    </p>
                    <p>
                    I am a hard worker and I am always willing to learn new things. I
                    am also a team player and I am always willing to help others.
                    </p>
                    <p>
                    I am excited to start my career in the tech industry and I am
                    confident that I have the skills and knowledge to be successful.
                    </p>

                    {/* <!-- coding platform  --> */}
                    <p className=" flex flex-wrap gap-2 items-center">
                        <a href="https://leetcode.com/sandeepkv233/" className='flex items-center gap-1 hover:scale-95 transition-all'>
                            <img src={leetcode} alt="" className=' w-[1.3em]'/> 
                            <span className=' text-sm text-orange-400'>Leetcode</span>
                        </a>
                        <a href="https://auth.geeksforgeeks.org/user/sandeepkv233" className='flex items-center gap-1 hover:scale-95 transition-all'>
                            <img src={gfg} alt="" className=' w-[1.3em]'/>
                            <span className=' text-sm text-orange-400'>GeeksforGeeks</span>
                        </a>
                        <a href="https://www.hackerrank.com/sandeepkv233" className='flex items-center gap-1 hover:scale-95 transition-all'>
                            <img src={hackerRank} alt="" className=' w-[1.3em]'/>
                            <span className=' text-sm text-orange-400'>Hackerrank</span>
                        </a>
                    </p>
                </div>
            </div>

            {/* <!-- skills section  --> */}
            <div className=" w-full md:w-[40%] h-[55vh] p-8 relative flex flex-wrap gap-4 justify-center items-center">
                <img
                    src={blob}
                    className="blob-style"
                    alt=""
                />

                <img src={html} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={css} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={javascript} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={react} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={nodeJs} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={tailwind} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={express} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={git} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={gitHub} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={mongodb} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={chartJs} alt=""className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={redux} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={vercel} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={firebase} alt="" className="w-12 z-10 hover:scale-110 transition-all" />
                <img src={bootstrap} alt="" className="w-12 z-10 hover:scale-110 transition-all" />

            </div>
        </div>

    </div>
  )
}
