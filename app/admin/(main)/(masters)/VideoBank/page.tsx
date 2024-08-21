import { getDb2 } from "@/db";
import { VideoBookSectionsTable, VideoBookTable } from "@/db/schema/publicData";
import VideoBook from "./videos";

export default async function Page(){
    const {db,connection}  = await getDb2();
    const books = await db.select().from(VideoBookTable).orderBy(VideoBookTable.id);
    const sections = await db.select().from(VideoBookSectionsTable).orderBy(VideoBookSectionsTable.id);
    connection.end();
    // const 
    return <main>
        <VideoBook sections={sections} data={books} />
    </main>
}