import Image from "next/image";

export default function Layout({children}:{children:React.ReactNode}){
    return <main>
        <div className="bg-zinc-50 w-full p-3">
            <Image src={'/assets/images/app_logo.png'} alt="Vachanavayal-2 Logo" width={60} height={60} />
        </div>
        {children}
    </main>
}