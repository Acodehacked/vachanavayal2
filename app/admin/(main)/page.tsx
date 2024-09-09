import ChartComponents from "@/components/admin/ChartComponents";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page(){
    const session = await getServerSession();
    if (session?.user == null) {
        redirect("/admin/login");
    }
    return <main className="flex flex-col px-5 pt-4 screen h-full"> 
        <h3 className="text-[43px] font-bold">Dashboard</h3>
        <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="bg-white p-3 shadow-xl rounded-sm">
                <h3>Total Users</h3>
                <h1 className="text-[30px] font-bold">100</h1>
            </div>
            <div className="bg-white p-3 shadow-xl rounded-sm">
                <h3>Total Users</h3>
                <h1 className="text-[30px] font-bold">100</h1>
            </div>
            <div className="bg-white p-3 shadow-xl rounded-sm">
                <h3>Total Users</h3>
                <h1 className="text-[30px] font-bold">100</h1>
            </div>
            <div className="bg-white p-3 md:col-span-2 shadow-xl rounded-sm">
                <h3>Total Users</h3>
            </div>
        </div>
    </main>
}