import Image from "next/image";

export default function Loading(){
    return <main className="w-full h-full min-h-[100vh] max-h-[100vh] flex justify-center items-center bg-white">
        <Image src={'/assets/images/app_logo.png'} width={100} height={100} alt="" />
    </main>
}