import { getDb2 } from "@/db"
import { VachanavayalBooksTable } from "@/db/schema/adminPanel";
import Books from "../books";
import { Languages } from "lucide-react";
import NotFound from "@/app/not-found";
import { eq, param } from "drizzle-orm";

export default async function Page({ params }: { params: { language: string } }){
    if(params.language != 'Bible' && params.language != 'Others'){
        return NotFound();
    }
    const {db,connection}  = await getDb2();
    const books = params.language == 'Others' ? await db.select().from(VachanavayalBooksTable).where(eq(VachanavayalBooksTable.type,"OTHERS")).orderBy(VachanavayalBooksTable.order_no) : await db.select().from(VachanavayalBooksTable).where(eq(VachanavayalBooksTable.type,"BIBLE")).orderBy(VachanavayalBooksTable.id);
    connection.end();
    return <main className="screen">
        <h3 className="text-[32px] font-semibold px-6 flex items-center gap-2">All Books <span className="bg-primary px-3 py-1 rounded-sm text-white text-[15px]">{params.language}</span></h3>
        <Books data={books} />
    </main>
}