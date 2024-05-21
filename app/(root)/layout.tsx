import HomeDefaultNavbar from "@/components/home/HomeDefaultNavbar";

export default function Layout({children}:{children:React.ReactNode}){
    return <main>
        <HomeDefaultNavbar />
        {children}
    </main>
}