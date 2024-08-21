import { getDb2 } from "@/db";
import { VideoBookSectionsTable, VideoBookTable } from "@/db/schema/publicData";
import { VideoBookSection } from "./section";
import { Suspense } from "react";
import { BiLoaderCircle } from "react-icons/bi";

export const dynamic = 'force-dynamic';
export default async function Page() {
    const { db, connection } = await getDb2();
    const sections = await db.select().from(VideoBookSectionsTable).orderBy(VideoBookSectionsTable.id);
    connection.end();
    // const 
    return <main>
        <Suspense fallback={<Loading />}>
            <VideoBookSection data={sections} />
        </Suspense>
    </main>
}

const Loading = () =>{
    return <div>
        <BiLoaderCircle size={50} />
    </div>
}