import Snackbar from "@/components/ui/snackbar/snackbar";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <main>
        <div className="bg-zinc-50 flex items-center w-full p-3 ">
            <div className="screen flex gap-3 items-center">
                <Image src={'/assets/images/app_logo.png'} alt="Vachanavayal-2 Logo" width={40} height={40} />
                <Image src={'/assets/images/app_icon.png'} alt="Vachanavayal-2 Logo" width={100} height={60} />
            </div>
        </div>
        {children}
        <Snackbar />
    </main>
}