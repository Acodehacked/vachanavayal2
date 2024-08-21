import { getDb2 } from "@/db";
import { VideoBookSectionsTable, VideoBookTable } from "@/db/schema/publicData";
import { eq } from "drizzle-orm";
import { Mentors } from "./Mentors";

export default async function Page(){
    const {db,connection}  = await getDb2();
    const sections = await db.select().from(VideoBookSectionsTable).where(eq(VideoBookSectionsTable.type,'programme')).orderBy(VideoBookSectionsTable.id);
    connection.end();
    // const 
    return <main>
        <Mentors data={sections} />
    </main>
}