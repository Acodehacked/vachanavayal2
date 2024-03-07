import Image from 'next/image'
import React from 'react'

const HomeFooter = () => {
  return (
    <div className='bg-slate-100'>
      <div className='max-w-screen-lg mx-auto p-3 flex md:flex-row flex-col justify-between items-center'>
        <div className='flex items-center text-slate-900'>
          <Image src={'/assets/images/app_logo.png'} width={50} className='p-3 h-[80px] w-[80px] aspect-square
          ' height={50} alt='logo' />
          <div className='flex flex-col'>
            <h1 className='text-[20px]'>Vachanavayal-2</h1>
            <h3>Powered By Vachanavayal</h3>
          </div>
        </div>
        <div className='text-[13px] gap-3 flex text-slate-900'>
          <span>Developer</span>
          &middot;
          <span>Terms & Conditions</span>
          &middot;
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter