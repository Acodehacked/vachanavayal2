'use client'

import React, { HTMLAttributes, HtmlHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


const AnimatedImage = ({width,height,delay=0,src,alt,duration=0.5,classname}:{width:number,height:number, delay?:number,src:string,alt:string,duration?:number,classname?:string}) => {
  return (
    <motion.div
        initial={{y:50,opacity:0}}
        animate={{y:50,opacity:0}}
        transition={{
            delay:delay,
            duration:duration
        }}
        whileInView={{y:0,opacity:1}}
    >
        <Image className={classname} width={width} height={height} src={src} alt={alt} />
    </motion.div>
  )
}

export default AnimatedImage