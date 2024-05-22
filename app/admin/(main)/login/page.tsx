import { AdminLoginSection } from "@/components/auth/AdminLoginSection";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getServerSession();
    if (session != null) {
        redirect("/admin");
    }
    return <main className="flex justify-center items-center min-h-[90vh]">
        <div className="w-full">
            <AdminLoginSection />
        </div>
    </main>
}