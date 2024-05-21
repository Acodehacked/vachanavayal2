import { cn } from "@/lib/utils";

const Tab = ({ children, active ,type,dark }: { children: React.ReactNode, active?: boolean ,type?: "sm"| 'lg', dark?:boolean }) => (<div className={cn("px-3 py-1 rounded-xl cursor-pointer select-none border-[0.03rem] border-primary text-primary", active ? 'bg-primary text-white' : 'hover:bg-zinc-300',type=='sm'?'text-[12px]': '',dark && active ? 'bg-foreground text-white border-foreground':'', dark && !active ? 'border-foreground text-foreground' : '')}>
    {children}
</div>)

export default Tab;