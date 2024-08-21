'use server'

import { getDb, getDb2 } from "@/db"
import { VideoBookSectionsTable } from "@/db/schema/publicData";
import { eq } from "drizzle-orm";

export const GetallData = async () =>{
    const  {db,connection} = await getDb2();
    const s =  await db.select().from(VideoBookSectionsTable);
    connection.end();
    return s;
}

export const NumberofEpisodes = async (id:number) =>{
    const  {db,connection} = await getDb2();
    const s =  await db.select().from(VideoBookSectionsTable).where(eq(VideoBookSectionsTable.parent,id));
    connection.end();
    return s.length;
}