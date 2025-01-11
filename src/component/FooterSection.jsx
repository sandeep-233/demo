import React from 'react'
import { Footer } from 'flowbite-react';
import { IoLogoLinkedin, IoMdMailUnread } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const FooterSection = () => {
  return (
    <div className=' w-11/12 mt-16 mb-8'>
      <Footer className='glassmorphism pt-12 pb-12 pl-4 pr-4 flex flex-col items-start gap-4 justify-between' >
        <Footer.Link href='#home'>
            <h3 className='flex items-baseline'>
                <span className=' text-3xl font-semibold mr-[2px]'>S</span>andeep Kumar
            </h3>
        </Footer.Link>

        <Footer.Divider />

        <div className=' flex items-center gap-3 justify-between w-full mt-3'>
            <Footer.Copyright href="#" by=" Sandeep Kumar   " year={2022} />

            <Footer.LinkGroup className='flex flex-wrap gap-3 items-center text-lg'>
                <Footer.Link href="#about" className=' hover:text-orange-600 hover:scale-95  transition-all'>About</Footer.Link>
                <Footer.Link href="#projects" className=' hover:text-orange-600 hover:scale-95  transition-all'>Projects</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/sandeep-kumar-bb3b2619b/" className=' hover:text-orange-600 hover:scale-95  transition-all'>
                    <IoLogoLinkedin />
                </Footer.Link>
                <Footer.Link href="https://instagram.com/sandeep02.0?igshid=OGQ5ZDc2ODk2ZA==" className=' hover:text-orange-600 hover:scale-95  transition-all'>
                    <RiInstagramFill />
                </Footer.Link>
                <Footer.Link href="mailto:sandeepkv233@gmail.com" className=' hover:text-orange-600 hover:scale-95 transition-all'>
                    <IoMdMailUnread />
                </Footer.Link>
            </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  )
}
