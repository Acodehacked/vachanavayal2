import AdminNavbarItems from "@/components/admin/AdminNavbarItems";
import Snackbar from "@/components/ui/snackbar/snackbar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AdminTopBar } from "@/components/admin/AdminTopbar";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();
    return <main className="h-full justify-stretch ">

        <div className="flex min-h-screen h-full ">
            <div className="">
                {session?.user != null ? <AdminNavbarItems session={session} /> : ''}
            </div>
            <div className="w-full max-h-screen min-h-screen h-full overflow-y-scroll">
                <AdminTopBar session={session} />
                <div className="p-2">
                    {children}
                </div>
            </div>
        </div>

        <Snackbar />
    </main>
}