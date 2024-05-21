import { Input } from "@/components/ui/input";

export default function Page() {
    return <main className="flex justify-center items-center min-h-[90vh]">
        <div>
            <h2>Admin Login</h2>
            <div className="max-w-[400px] bg-white rounded-xl w-full px-4 py-5 mx-3">
                <Input placeholder="Enter Username" className="outline-none" />
                <Input placeholder="Enter Password" className="outline-none" />
            </div>
        </div>
    </main>
}