import React from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';

export const NavBar = ({mode, setMode}) => {


    const handleMode = () => {
        setMode(!mode)
    }

  return (
    <div className='flex justify-between items-baseline w-11/12 mt-3'>
        {/* logo */}
        <div className='flex items-baseline'>
            <p>
                <span className=' text-3xl font-semibold mr-[2px]'>S</span>andeep Kumar
            </p>
        </div>

        <div className='flex gap-3 items-center'>
            {/* mode  */}
            {
                mode ? (
                    <MdLightMode size={28} className=' cursor-pointer' onClick={handleMode}/>
                ) : (
                    <MdDarkMode size={28} className=' cursor-pointer' onClick={handleMode}/>
                )
            }
            {/* Links  */}
            <div className='hidden sm:flex gap-3 items-baseline'>
                <Link to='#projects' className='hover:text-blue-600 border border-gray-600 hover:border-blue-600 rounded-md px-2 transition-all '>
                    Projects
                </Link>
                <Link to='#skills' className='hover:text-blue-600 border border-gray-600 hover:border-blue-600 rounded-md px-2 transition-all '>
                    Skills
                </Link>
                <Link to='#contact' className='hover:text-blue-600 border border-gray-600 hover:border-blue-600 rounded-md px-2 transition-all '>
                    Contact Me
                </Link>
            </div>
        </div>

    </div>
  )
}
