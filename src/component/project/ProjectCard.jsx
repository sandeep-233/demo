import React from 'react'
import { FaGithub, FaLink } from "react-icons/fa";

export const ProjectCard = ({image, title, desc, link1, link2, stacks}) => {
  return (
    <div className= 'w-full md:w-[48%] relative rounded-lg overflow-hidden border border-gray-400 group'>
        <img src={image} alt="project" className=' w-full h-full' />
        <div className=' absolute flex flex-col gap-3 justify-start sm:justify-center bottom-0 w-0 h-0 overflow-y-scroll sm:overflow-hidden group-hover:h-full projectBg group-hover:w-full p-3 transition-all ease-in-out text-white'>
            <h2 className=' text-3xl underline font-semibold '>
                <a href={link2} className='hover:text-orange-600 transition-all'>
                    {title}
                </a>
            </h2>
            <div className='flex gap-3 items-center'>
                <a href={link1}><FaGithub className=' hover:text-orange-600 transition-all'/></a>
                <a href={link2}><FaLink className=' hover:text-orange-600 transition-all'/></a>
            </div>
            <p className='flex text-sm'>
                {desc}
            </p>

            <div className=' italic underline sm:font-normal text-gray-100 text-sm sm:text-base'>
                <p className='mb-2'>
                    Stacks Used:
                </p>
                <div className='flex flex-wrap items-center justify-start gap-3'>
                {
                    stacks.map((stack, index) => (
                        <img src={stack} alt="" key={index} width={28} />
                    ))
                }
                </div>
            </div>
            
        </div>
    </div>
  )
}
