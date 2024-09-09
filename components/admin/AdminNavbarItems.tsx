'use client'
import { AdminNavbar } from '@/constants'
import { AnimatePresence, motion } from 'framer-motion'
import { BookIcon, ChevronDown, ChevronRight, Link2Off } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { BiLinkExternal, BiMenu, BiX } from 'react-icons/bi'
import 'boxicons/css/boxicons.css';
import { cn } from '@/lib/utils'
import { useOnClickOutside } from 'usehooks-ts'
import Image from 'next/image'

const AdminNavbarItems = ({ session }: { session: Session | null }) => {
    const menuref = useRef<HTMLDivElement>(null);
    const [selectedItem, setselectedItem] = useState(-1);
    const [menuopen, setmenuOpen] = useState(false);
    useOnClickOutside(menuref, () => {
        setmenuOpen(false)
    });
    
    const path = usePathname();
    return (
        <div className="flex w-full max-w-[300px] max-h-screen flex-col h-full bg-white items-center gap-4">
            <div>
                <div className="flex screen justify-between p-3 w-full">
                    <div className="flex gap-3 items-center">
                        <Image src={'/assets/images/app_logo.png'} alt="Vachanavayal-2 Logo" width={40} height={40} />
                        <Image className='md:flex hidden' src={'/assets/images/app_icon.png'} alt="Vachanavayal-2 Logo" width={100} height={60} />
                    </div>
                </div>
            </div>
            <div className={cn('flex w-full min-w-[250px] flex-col items-center md:relative md:bg-transparent bg-white md:shadow-none max-h-[calc(100%-20vh)] overflow-y-scroll overflow-x-visible h-full shadow-2xl transition-all duration-200 fixed top-0 md:right-0 bottom-0 z-[999]', menuopen ? 'right-0 px-5 py-3' : 'right-[-100%]')}>
                {menuopen && <div className=' md:hidden flex items-center w-full justify-between px-3 h-[50px]'>
                    <h2>Menu</h2>
                    <BiX size={35} onClick={() => setmenuOpen(false)} />
                </div>}
                {
                    AdminNavbar.map((item, index) => {
                        return <motion.div onClick={()=>{
                            if(index == selectedItem){
                                setselectedItem(-1);
                            }else{
                                setselectedItem(index);
                            }
                        }} whileTap={{scale:0.99}} key={index} className=' flex flex-col gap-2 items-center relative cursor-pointer font-medium  group/top w-full p-2'>
                            <div className='flex gap-2 w-full items-center group-hover/top:bg-zinc-100 rounded-xl px-4 justify-between mx-2 py-2 border-[0.01rem] border-zinc-300'>
                                <div className='flex gap-2 items-center'>
                                    <i className='bx bx-book-alt  text-[15px] text-zinc-700' />
                                    {item.title}
                                </div>
                                {item.sub.length > 0 && <ChevronDown size={14} />}
                            </div>
                            {item.sub.length > 0 && <motion.div initial={{height:0, opacity: 0,pointerEvents:'none'}} animate={index == selectedItem ? {height:'auto',opacity:1,pointerEvents:'all'} : {}} className={cn(`bg-zinc-800 rounded-md text-white transition-none`,index == selectedItem ? 'p-2' : 'p-0 mt-[-10px]')}>
                                {item.sub.map((subitem, index) => {
                                    return <Link className='flex group/sub flex-col relative w-full justify-between ps-3 pe-3 py-2 gap-2 items-center rounded-md hover:bg-zinc-900' href={'/admin' + subitem.link} key={index}>
                                        <div className='flex gap-2 me-3 justify-between w-full items-center'>
                                            <div className='flex gap-2 me-3 md:w-auto w-full items-center'>
                                                <i className='bx bx-book-alt  text-[15px] ' />
                                                <span className='text-[14px]'>{subitem.title}</span>
                                            </div>
                                            {subitem.sub.length > 0 && <ChevronRight className='text-zinc-400' size={14} />}
                                        </div>
                                        {subitem.sub.length > 0 && <div className='relative opacity-0 w-full right-0 z-[999] group-hover/sub:pointer-events-auto pointer-events-none transition-all group-hover/sub:opacity-100 h-0 group-hover/sub:h-auto bg-zinc-800  rounded-md group-hover/sub:p-1 text-white font-light text-[12px] '>
                                            {subitem.sub.length > 0 && subitem.sub.map((subsubitem, index) => {
                                                return <Link className='flex relative w-full justify-between py-2 gap-2 items-center rounded-md hover:bg-zinc-900' href={'/admin' + subsubitem.link} key={index}>
                                                    <div className='flex gap-2 me-3 items-center'>
                                                        <i className='bx bx-link-alt  text-[15px]' />
                                                        <span className='text-[12px]'>{subsubitem.title}</span>
                                                    </div>
                                                    {/* {subitem.sub.length > 0 && <ChevronRight className='text-zinc-400' size={14} /> } */}
                                                </Link>
                                            })}
                                        </div>}
                                    </Link>
                                })}
                            </motion.div>}
                        </motion.div>
                    })
                }
            </div>
            <BiMenu onClick={() => setmenuOpen(true)} className='md:hidden flex' size={30} />
        </div>
    )
}

export default AdminNavbarItems
