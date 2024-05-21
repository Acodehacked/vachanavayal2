import { HomeDefaultFooter, HomeDefaultNavbar } from "@/components/ui/public";

export default function Layout({children}:{children:React.ReactNode}){
    return <main>
        <HomeDefaultNavbar />
        {children}
        <HomeDefaultFooter />
    </main>
}