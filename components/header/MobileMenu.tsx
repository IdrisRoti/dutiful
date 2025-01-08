"use client"

import Link from 'next/link'
import { useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'
import { BiMenu, BiX } from 'react-icons/bi'

import { navlinks } from './NavMenu'
import CustomButton from '../CustomButton'

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div onClick={() => setShowMenu(true)} className='md:hidden cursor-pointer'><BiMenu className='text-textPurple size-10' /></div>

      <AnimatePresence>
        {
          showMenu && (
            <motion.div
              initial={{opacity: 0}} 
              animate={{opacity: 1}} 
              exit={{opacity: 0}}
              transition={{duration: .7, ease: "easeInOut"}}
              className='absolute top-0 left-0 w-screen h-screen bg-primary text-white z-[110] flex flex-col justify-between md:hidden'>
              <div className="">
                {
                  navlinks.map(({id, label, href}) => {

                      return (
                          <Link 
                              onClick={() => setShowMenu(false)}
                              className="p-4 uppercase font-light tracking-widest flex items-center text-lg transition"
                              href={href}
                              key={id}>
                                  {label}
                          </Link>
                      )
                  })
              }
              </div>
              <div className='flex items-center gap-2 pb-20 px-4'>
                  <Link onClick={() => setShowMenu(false)} className='w-full' href='/login'>
                    <button className='h-[3.625rem] px-14 font-medium rounded-md hover:bg-white/10 transition w-full'>Login</button>
                  </Link>
                  <Link onClick={() => setShowMenu(false)} className='w-full' href='/signup'>
                    <CustomButton className='w-full px-0 bg-white text-primary hover:bg-white/80 hover:text-primary' variant='outlined'>Sign up</CustomButton>
                  </Link>
              </div>
              <button onClick={() => setShowMenu(false)} className='size-10 grid place-items-center absolute top-4 right-4'><BiX className='text-white size-8' /></button>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  )
}

export default MobileMenu