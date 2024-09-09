'use client';

import { signOut } from "next-auth/react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from "usehooks-ts";
import { Session } from "next-auth";

const AdminTopBar = ({session}:{session:Session | undefined | null}) => {
    const profileref = useRef<HTMLDivElement>(null)

    const [profilemenuOpen, setprofilemenuOpen] = useState(false);
    useOnClickOutside(profileref, () => {
        setprofilemenuOpen(false)
    });
    return <div className="flex justify-between mx-3 my-2 py-2 px-4 bg-white rounded-md shadow-lg shadow-zinc-300">
        <input type="text" placeholder="search here.. " className="max-w-[300px] w-full p-2 text-zinc-800 outline-none border-0" />
        <div className="relative">
            <div onClick={() => setprofilemenuOpen(!profilemenuOpen)} className='w-[35px] flex justify-center items-center h-[35px] rounded-full bg-primary font-bold text-white text-[20px] relative select-none p-0'>
                <span>V</span>
            </div>
            <AnimatePresence>
                {
                    profilemenuOpen && <motion.div ref={profileref} initial={{ scale: 0.4, opacity: 0 }} transition={{ stiffness: 1, duration: 0.2 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.3, opacity: 0 }} className="bg-white min-w-[300px] max-w-[400px] shadow-2xl absolute flex flex-col items-end origin-top-right rounded-xl w-full p-1 right-0 top-[120%] z-[999] min-h-[100px] gap-1">
                        <div className='px-4 flex flex-col w-full items-end py-3 bg-zinc-50 rounded-xl'>
                            <span className='font-bold text-[20px] text-zinc-800 p-0 m-0'>{session?.user?.name}</span>
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
    </div>;
}

export { AdminTopBar }