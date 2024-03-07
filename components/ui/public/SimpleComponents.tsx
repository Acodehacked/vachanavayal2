import Link from "next/link";
import React from "react";

export function NavCard({link,children,icon}:{link?:string,children:React.ReactNode,icon:React.ReactNode}){
    return <Link  href={''+link} className='flex items-center gap-0 p-2 w-full '>
      <div className="flex ring-1 ring-zinc-200 py-2 px-5 w-full rounded-xl items-center gap-2 bg-zinc-50 hover:bg-zinc-200">
        {icon}
      <h1 className="text-[18px] font-medium">{children}</h1>
      </div>
    </Link>
  }

export default{
  NavCard
}