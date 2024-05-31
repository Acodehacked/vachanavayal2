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

const AdminNavbarItems = ({ session }: { session: Session | null }) => {
    const [profilemenuOpen, setprofilemenuOpen] = useState(false);
    const profileref = useRef<HTMLDivElement>(null)
    const menuref = useRef<HTMLDivElement>(null)
    const [menuopen, setmenuOpen] = useState(false);
    useOnClickOutside(menuref, ()=>{
        setmenuOpen(false)
    });
    useOnClickOutside(profileref, ()=>{
        setprofilemenuOpen(false)
    });
    const path = usePathname();
    return (
        <div className="flex items-center gap-4">
            <div className={cn('flex md:flex-row flex-col md:gap-2 md:items-center justify-start md:relative md:bg-transparent bg-white md:shadow-none shadow-2xl transition-all duration-200 fixed top-0 md:right-0 bottom-0 z-[999]', menuopen ? 'right-0 px-5 py-3' : 'right-[-100%]')}>
                {menuopen && <div className='min-w-[300px] md:hidden flex items-center justify-between px-3 h-[50px]'>
                    <h2>Admin</h2>
                    <BiX size={35} onClick={() => setmenuOpen(false)} />
                </div>}
                {
                    AdminNavbar.map((item, index) => {
                        return <div key={index} className=' flex flex-col gap-2 items-center relative cursor-pointer font-medium  group/top md:w-auto w-full'>
                            <div className='flex gap-2 md:w-auto w-full items-center group-hover/top:bg-zinc-100 rounded-xl px-3 py-2'>
                                <i className='bx bx-book-alt  text-[15px] text-zinc-700' />
                                {item.title}
                                {item.sub.length > 0 && <ChevronDown size={14} />}
                            </div>
                            {item.sub.length > 0 && <div className='md:absolute relative opacity-0  md:shadow-2xl right-0 z-[999] md:top-[80%] md:group-hover/top:top-full group-hover/top:pointer-events-auto pointer-events-none transition-all group-hover/top:opacity-100 md:group-hover/top:h-auto h-0 md:h-auto group-hover/top:h-auto md:bg-white bg-zinc-800  rounded-md group-hover/top:p-1 md:w-max w-full max-w-[400px] md:text-zinc-900 text-white font-semibold '>
                                {item.sub.map((subitem, index) => {
                                    return <Link className='flex group/sub flex-col relative w-full justify-between ps-3 pe-3 py-2 gap-2 items-center rounded-md md:hover:bg-zinc-100 hover:bg-zinc-900' href={'/admin'+subitem.link} key={index}>
                                        <div className='flex gap-2 me-3 justify-between w-full items-center'>
                                            <div className='flex gap-2 me-3 md:w-auto w-full items-center'>
                                                <i className='bx bx-book-alt  text-[15px] ' />
                                                <span className='text-[14px]'>{subitem.title}</span>
                                            </div>
                                            {subitem.sub.length > 0 && <ChevronRight className='text-zinc-400' size={14} />}
                                        </div>
                                        {subitem.sub.length > 0 && <div className='md:absolute relative opacity-0  md:shadow-2xl right-0 md:right-full z-[999] md:top-[-50%] md:group-hover/sub:top-0 group-hover/sub:pointer-events-auto pointer-events-none transition-all group-hover/sub:opacity-100 md:group-hover/sub:h-auto h-0 md:h-auto group-hover/sub:h-auto md:bg-white bg-zinc-800  rounded-md group-hover/sub:p-1 md:w-max w-full max-w-[400px] md:text-zinc-900 text-white font-semibold '>
                                            {subitem.sub.length > 0 && subitem.sub.map((subsubitem, index) => {
                                                return <Link className='flex relative w-full justify-between ps-3 pe-3 py-2 gap-2 items-center rounded-md hover:bg-zinc-900 md:hover:bg-zinc-100' href={'/admin'+subsubitem.link} key={index}>
                                                    <div className='flex gap-2 me-3 items-center'>
                                                        <i className='bx bx-link-alt  text-[15px]' />
                                                        <span className='text-[14px]'>{subsubitem.title}</span>
                                                    </div>
                                                    {/* {subitem.sub.length > 0 && <ChevronRight className='text-zinc-400' size={14} /> } */}
                                                </Link>
                                            })}
                                        </div>}
                                    </Link>
                                })}
                            </div>}
                        </div>
                    })
                }
            </div>
            <div className="relative">
                <div onClick={() => setprofilemenuOpen(!profilemenuOpen)} className='w-[35px] flex justify-center items-center h-[35px] rounded-full bg-primary font-bold text-white text-[20px] relative select-none p-0'>
                    <span>V</span>
                </div>
                <AnimatePresence>
                    {
                        profilemenuOpen && <motion.div ref={profileref} initial={{ scale: 0.4, opacity: 0 }} transition={{ stiffness: 1, duration: 0.2 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.3, opacity: 0 }} className="bg-white min-w-[300px] max-w-[400px] shadow-2xl absolute flex flex-col items-end origin-top-right rounded-xl w-full p-1 right-0 top-[120%] z-[999] min-h-[100px] gap-1">
                            <div className='px-4 flex flex-col w-full items-end py-3 bg-zinc-50 rounded-xl'>
                                <span className='font-bold text-[20px] text-zinc-800 p-0 m-0'>Abin Antony</span>
                                <span className='text-[13px] font-medium text-zinc-400 m-0 p-0'>Admin &middot; abina5448@gmail.com</span>
                            </div>
                            <div className='w-auto px-4 me-2 flex flex-col items-end py-1  rounded-xl'>
                                <span className='text-[13px] text-zinc-600 m-0 p-0'>Change Password</span>
                            </div>
                            <div onClick={() => signOut()} className='px-4 flex me-2 flex-col items-end py-1 mb-2 bg-zinc-900 rounded-xl cursor-pointer'>
                                <span className='text-[13px] text-zinc-100 m-0 p-0'>Logout</span>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <BiMenu onClick={() => setmenuOpen(true)} className='md:hidden flex' size={30} />
        </div>
    )
}

export default AdminNavbarItems
