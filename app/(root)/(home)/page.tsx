
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
    return <main className="mx-auto flex flex-col">
        <div className="w-full flex md:flex-row flex-col max-w-screen-lg mx-auto">
        <section className="md:w-full md:max-w-[400px]">
            <h1 className="m-0   screen-sm mx-auto p-4 text-[35px] my-0 font-bold text-slate-500">
                Hi, User
            </h1>
            <div className="screen-sm px-3">
                <div className="p-3 bg-slate-200 flex-col items-start rounded-xl flex justify-between gap-2">
                    <h3>Pending Account verification</h3>
                    <div>
                        <Button variant={'success'} className='bg'>Complete Now</Button>
                    </div>
                </div>

            </div>
        </section>
        <section className="px-3 mx-auto md:mx-0 screen-sm">
            <div className="my-3 font-semibold">
                Vachanavayal Quiz Section

            </div>
            <div className="grid gap-5 grid-col-1 sm:grid-cols-2">
                <div className="sm:col-span-2 bg-sky-500 rounded-xl flex hover:scale-[1.02]  transition-all shadow-inner group justify-between">
                    <div className=" drop-shadow-lg flex flex-col justify-center p-4 text-white">
                        <h1 className="text-[30px] [line-height:30px] m-0 p-0 font-bold">Logos Club</h1>
                        <p className="p-0 m-0">English edition</p></div>
                    <div className="relative h-[100px] overflow-hidden w-[200px] z-[1]"><Image src={'/assets/images/logos_club.png'} width={150} height={150} className='rounded-xl absolute w-[120px] drop-shadow-lg bottom-[-20px] right-[20px] z-[10] transition-transform
                    group-hover:rotate-[10deg] rotate-[20deg]' alt="Bibliya" /></div>
                </div>
                <div className="bg-green-500 rounded-xl flex hover:scale-105  transition-all shadow-inner group justify-between">
                    <div className="drop-shadow-lg p-4 text-white"><h1 className="text-[30px] m-0 p-0 font-bold">Bibliya</h1>
                        <p className="p-0 m-0">English edition</p></div>
                    <div className="relative overflow-hidden w-[200px] z-[1]"><Image src={'/assets/images/bible_quiz.png'} width={150} height={150} className='rounded-xl absolute w-[120px] drop-shadow-lg bottom-[-20px] right-[20px] z-[10] transition-transform
                    group-hover:rotate-[10deg] rotate-[20deg]' alt="Bibliya" /></div>
                </div>
                <div className="bg-red-500 rounded-xl flex hover:scale-105  transition-all shadow-inner group justify-between">
                    <div className="drop-shadow-lg p-4 text-white"><h1 className="text-[30px] m-0 p-0 font-bold [line-height:30px]">Variety Quiz</h1>
                        <p className="p-0 m-0">English edition</p></div>
                    <div className="relative overflow-hidden w-[200px] z-[1]"><Image src={'/assets/images/variety_quiz.png'} width={150} height={150} className='rounded-xl absolute w-[120px] drop-shadow-lg bottom-[-20px] right-[20px] z-[10] transition-transform
                    group-hover:rotate-[10deg] rotate-[20deg]' alt="Bibliya" /></div>
                </div>
                <div className="bg-orange-500 rounded-xl flex hover:scale-105  transition-all shadow-inner group justify-between">
                    <div className="drop-shadow-lg p-4 text-white"><h1 className="text-[30px] [line-height:30px] m-0 p-0 font-bold">Video
                        Book</h1>
                        <p className="p-0 m-0">English edition</p></div>
                    <div className="relative overflow-hidden w-[200px] z-[1]"><Image src={'/assets/images/videobook.png'} width={150} height={150} className='rounded-xl absolute w-[120px] drop-shadow-lg bottom-[-20px] right-[20px] z-[10] transition-transform
                    group-hover:rotate-[10deg] rotate-[20deg]' alt="Bibliya" /></div>
                </div>
                <div className="bg-green-500 rounded-xl flex hover:scale-105  transition-all shadow-inner group justify-between">
                    <div className="drop-shadow-lg p-4 text-white"><h1 className="text-[30px] m-0 p-0 font-bold">Bibliya</h1>
                        <p className="p-0 m-0">English edition</p></div>
                    <div className="relative overflow-hidden w-[200px] z-[1]"><Image src={'/assets/images/bible_quiz.png'} width={150} height={150} className='rounded-xl absolute w-[120px] drop-shadow-lg bottom-[-20px] right-[20px] z-[10] transition-transform
                    group-hover:rotate-[10deg] rotate-[20deg]' alt="Bibliya" /></div>
                </div>

            </div>
        </section>
        </div>
        <section className="max-w-screen-lg p-3 mx-auto w-full mb-4 mt-10 ">
            <div className="rounded-xl  bg-sky-900 w-full text-white flex md:flex-row flex-col">
                <div className="w-full p-4 md:h-[300px] h-[200px] flex flex-col md:ps-10 justify-center">
                    <h1 className="text-[40px] font-bold mt-3">Vachanavayal-2 App</h1>
                    <span className="text-[20px] mt-5">Bible & Subject type Quiz App</span>
                    <h3 className="">Now Available in English & Malayalam</h3>
                    <Image alt="" src={'/assets/images/google-play.png'} height={400} width={200} className="animate-pulse rounded-lg mt-3" />
                </div>    
                <div className="md:h-[300px] h-[200px] relative max-w-[400px] w-full overflow-hidden">
                <Image alt="" className="absolute top-[2rem] right-[2rem] " src={'/assets/images/mockup.png'} height={1000} width={800} />
                </div>
            </div>
        </section>
    </main>
} 