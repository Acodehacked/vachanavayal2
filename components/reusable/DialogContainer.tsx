import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
const DialogContainer = ({ children, open, setOpen, title ,size}: { children: React.ReactNode, open: boolean, setOpen: (open: boolean) => void, title: string, size?: 'sm' | 'lg' }) => {
    if(size == undefined){ size = 'sm' }
    return (
        <AnimatePresence>
            {open && <motion.div className="dialog bg-[rgba(0,0,0,0.5)] fixed overflow-y-scroll py-[60px] z-[999] top-0 bottom-0 right-0 left-0 flex justify-center items-center">
                {open && <motion.div
                    className={cn('bg-white p-2 rounded-sm w-full mx-4',size=='lg' ? 'max-w-[850px]':'',size=='sm'?'max-w-[450px]' : '')}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='flex justify-between p-2'>
                        <span>{title}</span>
                        <button onClick={() => {
                                setOpen(false)
                        }}><X /></button>
                    </div>
                    <hr />
                    <div className='min-h-[100px] pt-2 w-full flex flex-col items-start'>
                        {children}
                    </div>
                </motion.div>
                }
            </motion.div>}
        </AnimatePresence>
    )
}

export default DialogContainer