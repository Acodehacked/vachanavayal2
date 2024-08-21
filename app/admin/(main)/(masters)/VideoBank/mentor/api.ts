'use server'

import { getDb2 } from "@/db";
import { VideoBookSectionsTable } from "@/db/schema/publicData";
import { and, eq } from "drizzle-orm";

export const getAllData = async () => {
    const { db, connection } = await getDb2();
    const sections = await db.select().from(VideoBookSectionsTable).where(eq(VideoBookSectionsTable.type,'programme')).orderBy(VideoBookSectionsTable.id);
    connection.end();
    return sections;
}