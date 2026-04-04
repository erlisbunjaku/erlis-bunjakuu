  import { assets } from '@/assets/assets'
  import Image from 'next/image'
  import React from 'react'
  import { motion } from 'framer-motion'; 

  const Header = () => {
    return (
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex 
      flex-col items-center justify-center gap-4'>

  {/* Triangle line background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="trianglePattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40 L20 0 L40 40 Z"
                stroke="gray"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trianglePattern)" />
        </svg>
      </div>

          <motion.div 
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.8, type: 'spring' ,stiffness: 100}}>
              <Image src={assets.profile_img} alt='Me image' className='rounded-full w-32'/>
          </motion.div>
          <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Erlis Bunjaku <Image src={assets.hand_icon} alt='hand icon' className='w-6' /></motion.h3>
          <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, duration: 0.8 }} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full-stack Developer based in Kosovo.</motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='max-w-2xl mx-auto'>I am a Full-stack Developer from Vushtrri, Kosovo.
          </motion.p>

          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

              <a href="#about" 
              className='px-10 py-3 border rounded-full border-gray-500 flex
              items-center gap-2  hover:-translate-y-1 duration-500'>About Me 
              <Image src={assets.download_icon} alt='download image' className='w-4'/>
              </a>
          </motion.div>

      </div>
    )
  }

  export default Header