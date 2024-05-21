'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'

const HomeDefaultNavbar = () => {
    const [menu, setmenu] = useState(false);
    const slidebar = useRef<HTMLDivElement>(null);
    return <>
        <div className='w-full relative bg-white'>
            <div className='flex screen-lg justify-between
        mx-auto p-3 items-center'>
                <Image src={'/assets/images/app_logo.png'} alt="App logo" className='ms-3' width={50} height={50} />
                <div className='flex gap-2 items-center'>
                    <Link href={'/'} className='px-3 py-2 transition-all rounded-sm hover:bg-zinc-200 font-semibold'>Home</Link>
                    <div onClick={() => setmenu(true)} className='px-2 py-1 rounded-sm hover:bg-zinc-200 font-semibold text-zinc-700 transition-all'><BiMenu size={30} /></div>
                </div>
            </div>
        </div>
        <AnimatePresence>
            {menu && <motion.div onClick={(e)=>e.target == slidebar.current ? '' : setmenu(false)} 
            initial={{ opacity: 0 ,pointerEvents:'none'}} animate={{ opacity: 1,pointerEvents:'all' }} exit={{ opacity: 0,pointerEvents:'none' }} transition={{ stiffness: 1, duration: 0.1 }} className='bg-black/50 fixed z-[999] top-0 left-0 right-0 bottom-0 flex'>
                <AnimatePresence>
                    {menu && <motion.div ref={slidebar} initial={{ x: '-400px' }} animate={{ x: 0 }} exit={{ x: '-400px' }} transition={{ stiffness: 1, duration: 0.2 }} className='min-w-[400px] h-full bg-white'>
                        
                    </motion.div>}
                </AnimatePresence>
            </motion.div>}
        </AnimatePresence>
    </>
}

export default HomeDefaultNavbar