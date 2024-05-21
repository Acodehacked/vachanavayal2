'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const StaggerHoverButton = ({text,link,active,classname}:{text:string,link:string,active?:boolean,classname?:string}) => {
    const [hover, sethover] = useState(false)
    const container = {
        notActivated: {
          y: 0
        },
        activated: {
          y: -40,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 1
          }
        }
      };
      const container2 = {
        activated: {
          y: 0
        },
        notActivated: {
          y: 40,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 1
          }
        }
      };
  return (
    <Link onMouseEnter={()=>{
        sethover(true)
    }}  
    onMouseLeave={()=>{
        sethover(false)
    }} 
    className={cn("h-[40px] text-[20px] hover:bg-slate-50 overflow-hidden",classname)} href={link}>
        <motion.div className="flex h-[40px]" variants={container}
               >
            {text.split('').map((value,i)=>{
                return <motion.div 
                key={i}
                className="flex"
                transition={{
                    type:'spring',
                    delay:i*0.01}}
                variants={container}
                initial="notActivated"
                animate={ hover ? "activated" : "notActivated" }
                >{value.replace('-',' ')}</motion.div>
            })}
        </motion.div>
        <motion.div className="flex h-[40px]" variants={container}
               >
            {text.split('').map((value,i)=>{
                return <motion.div 
                key={i}
                className="flex text-primary"
                transition={{
                    type:'spring',
                    delay:i*0.01}}
                variants={container}
                initial="notActivated"
                animate={ hover ? "activated" : "notActivated" }
                >{value.replace('-',' ')}</motion.div>
            })}
        </motion.div>
        
    </Link>
  )
}

export default StaggerHoverButton