import React from 'react'
import { FaGithub } from "react-icons/fa";
import { GoLink } from "react-icons/go";

export const OtherProjectCard = ({Image, link1, link2, title, stacks}) => {
  return (
    <div className=' relative w-[20rem] rounded-md border border-gray-300 overflow-hidden'>
        <img src={Image} alt="" className=' w-full'/>
        <div className=' absolute bottom-0 w-full flex flex-col gap-2 glassmorphism1 pt-2 pb-2 pl-4'>
            <p className=' text-xl font-semibold'>
                {title}
            </p>
            <div className=' flex gap-5'>
                <a href={link1} className=' w-fit flex items-center gap-1 text-sm cursor-pointer hover:text-orange-600 transition-all ease-in'>
                    <FaGithub />GitHub
                </a>
                <a href={link2} className=' w-fit flex items-center gap-1 text-sm cursor-pointer hover:text-orange-600 transition-all ease-in'>
                    <GoLink />Live
                </a>
            </div>
            <div className='flex flex-wrap items-center justify-start gap-3'>
                {
                    stacks.map((stack, index) => (
                        <img src={stack} alt="" width={18} key={index} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
