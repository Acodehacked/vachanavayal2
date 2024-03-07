'use client'
import { ChevronDown, Coins, User, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavCard } from '@/components/ui/public/SimpleComponents'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Button } from '../button'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import { PiPasswordFill, PiUserFill } from 'react-icons/pi'
import { CiUser } from 'react-icons/ci'
import { FaRegUserCircle } from 'react-icons/fa'


const HomeNavbar = () => {
  const [userMenu, setuserMenu] = useState(false)
  const [closeAnim, setcloseAnim] = useState(false)
  return (
    <nav className='w-full bg-white'>
      <div className='p-2 border-b-1 border-zinc-800 justify-between flex max-w-screen-lg items-center mx-auto w-100'>
        <div className='flex gap-2 items-center'>
          <Image src={'/assets/images/app_logo.png'} width={50} height={50} alt='logo' />
          <div className='flex flex-col'>
            <Image src={'/assets/images/app_icon.png'} width={140} height={120} alt='logo' />
          </div>
        </div>
        <div className='flex gap-2 '>
          <div onClick={() => {
            setuserMenu((prev) => {
              return !prev;
            })
          }} className='flex cursor-pointer items-center hover:bg-zinc-100 rounded-xl p-2 relative'>
            <User className='p-1' />
            <h1 className='font-poppins select-none'>Jacob Kattady</h1>
            <ChevronDown size={14} className='text-[10px]' />
          </div>
          <motion.div className='z-[100]  fixed bottom-[0] top-0 left-0 bg-secondary shadow-xl right-0 p-5'
            initial={{
              opacity: 0,
              scale: 1.1,
              pointerEvents: 'none'
            }}
            animate={userMenu ? {
              opacity: 1,
              scale: 1,
              pointerEvents: 'all',
            } : {
              opacity: 0,
              scale: 1.1,
              pointerEvents: 'none'
            }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}>
            <motion.div onClick={() => { setuserMenu(!userMenu) }} animate={userMenu ? {
              opacity: 1,
              x: 0,
              pointerEvents: 'all'
            } : {
              opacity: 0,
              x: -10,
              pointerEvents: 'none'
            }} className='screen-sm w-full flex justify-between'>
              <Image src={'/assets/images/app_icon.png'} style={{ objectFit: 'contain' }} width={140} height={80} alt='logo' objectFit='contain' />
              <motion.div className='rounded-full bg-red-300  h-[40px] overflow-hidden'
                onMouseEnter={() => { setcloseAnim(true) }}
                onMouseLeave={() => { setcloseAnim(false) }}
              >
                <motion.div transition={
                  { damping: 50, }
                } animate={closeAnim ? { marginTop: '-40px' } : { marginTop: '0px' }}>
                  <div className='p-2 flex h-[40px] items-center select-none  bg-slate-900'>
                    <span className='text-white px-2'>Close</span>
                    <X color='white' />
                  </div>
                  <div className='p-2 h-[40px flex items-center select-none bg-red-900'>
                    <span className='text-white px-2'>Close</span>
                    <X color='white' />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <NavContents />

          </motion.div>
          <div className='bg-yellow-500 px-3 py-1 items-center rounded-xl flex gap-3 text-white'>
            <Coins size={20} />
            <h1 className='font-bold'>100</h1>
          </div>
        </div>
      </div>
      <div className='bg-sky-100 screen-lg'>
      </div>
    </nav>
  )
}

const NavContents = () => {
  return <div className='screen-sm h-full overflow-x-hidden overflow-y-scroll max-h-[calc(100dvh-100px)] pt-5 no-scrollbar px-2'>
    <div className='bg-sky-900 flex items-center text-white gap-3 p-5 rounded-xl mb-3'>
      <FaRegUserCircle   size={50} color='white' />
      <div className='flex flex-col'>
        <h1 className='text-[24px] font-bold'>Fr. Jacob </h1>
        <h4>Kattady Puthenpurackal</h4>
      </div>
    </div>
    <div className=' ring-1 ring-yellow-600 bg-slate-50 p-1 rounded-xl flex justify-between'>
      <div className='flex flex-col items-start p-3 select-none'>
        <h1 className='text-[30px] font-semibold text-yellow-700'>Unlock full Access</h1>
        <span>Buy all features</span>
        <Button variant={'gold'} className='mt-2'>Buy Now</Button>
      </div>
      <MdOutlineWorkspacePremium className='rotate-[-30deg] text-yellow-500' size={90} />
    </div>

    <div className='pt-5 pb-3'>
      <h1>User Settings</h1>
      <div className='flex sm:flex-row flex-col'>
      <NavCard icon={<FiEdit size={15} className='text-zinc-500' />}>Edit Profile</NavCard>
      <NavCard icon={<PiPasswordFill  size={15} className='text-zinc-500' />}>Change Password</NavCard>
      </div>
    </div>
  </div>
}

export default HomeNavbar