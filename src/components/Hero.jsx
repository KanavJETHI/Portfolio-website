import React from 'react'
import { Download } from 'lucide-react';
import Profile from '../assets/kanav.jpg'
import { motion } from 'framer-motion';
import "../Css/Hero.css"
import CIcon from '@coreui/icons-react';
import { cibLeetcode, cibGithub, cibLinkedin } from '@coreui/icons';
// import { CButton } from '@coreui/react';


const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
        {/* stars */}
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-5 md:gap-40 justify-between'>
        <div className='md:space-y-8 px-4'>
            <motion.h1 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.2}}
            className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Kanav Jethi</p></motion.h1>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.2}}
            className='md:text-2xl text-lg mb-4'>Software Engineer | MERN Stack Enthusiast</motion.p>
            <motion.p 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.2}}
            className='lg:w-[600px] mb-8  text-sm text-gray-300'>I'm a Software Engineer and Full Stack Developer passionate about turning complex problems into elegant, user-friendly applications and bringing innovative ideas to life online.</motion.p>

            <a href='https://drive.google.com/file/d/1lvHA51H127XnBlYPs44DC1rUUtw9kDCn/view?usp=sharing' target='_blank' className='block'>
              <motion.button 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.2}}
            className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] mt-2 '><Download className='w-5 h-5'/> Download CV</motion.button>
            </a>

           
            <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
                <a href="https://leetcode.com/u/KANAVjethi/" target="_blank" rel="noopener noreferrer">
                    <CIcon className='w-7 h-6 bg-white rounded-full mt-0.5 hover:text-blue-400' icon={cibLeetcode} />
                </a>
                <a href="https://github.com/KanavJETHI" target="_blank" rel="noopener noreferrer">
                    <CIcon className='w-7 h-6 bg-white rounded-full mt-0.5 hover:text-blue-400' icon={cibGithub} />
                </a>
                <a href="https://www.linkedin.com/in/kanav-jethi/" target="_blank" rel="noopener noreferrer">
                    <CIcon className='w-7 h-6 bg-white rounded-full mt-0.5 hover:text-blue-400' icon={cibLinkedin} />
                </a>

            </div>
        </div>
        <div className='relative group'>
  <motion.img 
    initial={{opacity:0, scale:0.5}}
    whileInView={{opacity:1, scale:1}} 
    transition={{duration:1.2, delay:0.2}}
    src={Profile} 
    alt="Profile" 
    className='
      w-[300px] h-[300px]  md:w-[500px] md:h-[500px] rounded-full object-cover border border-blue-400 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 object-top'
  />
</div>
      </div>
    </section>
  )
}

export default Hero
