'use client'
import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import './snackbar.css'
import SnackbarContext from '../../../lib/Snackbar-context'
import { cn } from '@/lib/utils'
import { IoIosClose } from 'react-icons/io'
import { Timer } from 'lucide-react'
function Snackbar() {
    const SnackbarCtx = useContext(SnackbarContext);
    return <motion.div className={cn('fixed top-[100px] right-[10px] max-w-[400px] flex justify-between items-center rounded-lg w-full z-[99999] m-2 transition-all shadown-xl bg-white text-foreground p-3', SnackbarCtx.isDisplayed ? 'right-[10px] opacity-100 scale-100 shadow-xl' : 'right-[-450px] opacity-0 scale-0')}>
        <div className='flex gap-3 items-center'>
            <div className="p-2 rounded-full bg-green-500">
                <Timer className="text-white" size={20} />
            </div>
            <div className='text-foreground text-[17px]'>{SnackbarCtx?.msg}</div>
        </div>
        <div className='text-[30px] text-foreground' onClick={SnackbarCtx.onClose}><IoIosClose /></div>
    </motion.div>
}
export default Snackbar;