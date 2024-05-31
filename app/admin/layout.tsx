import AdminNavbarItems from "@/components/admin/AdminNavbarItems";
import Snackbar from "@/components/ui/snackbar/snackbar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();
    return <main className="pt-[80px]">
        <div className="bg-white z-[9999] flex fixed top-0 left-0 right-0 items-center w-full transition-all">
            <div className="flex screen justify-between p-3 w-full">
                <div className="flex gap-3 items-center">
                    <Image src={'/assets/images/app_logo.png'} alt="Vachanavayal-2 Logo" width={40} height={40} />
                    <Image src={'/assets/images/app_icon.png'} alt="Vachanavayal-2 Logo" width={100} height={60} />
                </div>
                {session?.user != null ? <AdminNavbarItems session={session} /> : ''}
            </div>
        </div>

        {children}
        <Snackbar />
    </main>
}