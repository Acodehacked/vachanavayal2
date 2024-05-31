import { getDb2 } from "@/db"
import { VachanavayalBooksTable } from "@/db/schema/adminPanel";
import Books from "./books";

export default async function Page(){
    const {db,connection}  = await getDb2();
    const books = await db.select().from(VachanavayalBooksTable).orderBy(VachanavayalBooksTable.id);
    connection.end();
    return <main className="screen">
        <h3 className="text-[32px] font-semibold px-6">All Books</h3>
        <Books data={books} />
    </main>
}