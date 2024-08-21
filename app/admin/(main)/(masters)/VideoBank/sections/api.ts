'use server'

import { getDb2 } from "@/db";
import { VideoBookSectionsTable } from "@/db/schema/publicData";
import { and, eq } from "drizzle-orm";

export const getAllData = async () => {
    const { db, connection } = await getDb2();
    const sections = await db.select().from(VideoBookSectionsTable).orderBy(VideoBookSectionsTable.id);
    connection.end();
    return sections;
}

export const AddNewSubject = async ({
    parent,
    title,
    type
}: {
    parent: number,
    title: string,
    type: 'subject' | 'topic' | 'programme'
}) => {
    try {
        const { db, connection } = await getDb2();
        const result = await db.select().from(VideoBookSectionsTable).where(and(eq(VideoBookSectionsTable.title, title),eq(VideoBookSectionsTable.type, type)));
        if (result.length == 0) {
            await db.insert(VideoBookSectionsTable).values({
                type: `${type}`,
                title: `${title}`,
                parent: parent ?? 0
            });
        } else {
            connection.end();
            return false;
        }
        connection.end();
        return true;
    } catch (e) {
        return false;
    }
    // const sections = await db.select().from(VideoBookSectionsTable).orderBy(VideoBookSectionsTable.id);
}

export const EditSubject = async ({
    id,
    text
}: {
    id: number,
    text:string
}) => {
    try {
        const { db, connection } = await getDb2();
        const result = await db.update(VideoBookSectionsTable).set({
            title:text
        }).where(eq(VideoBookSectionsTable.id, id));
        connection.end();
        return true;
    } catch (e) {
        return false;
    }
    // const sections = await db.select().from(VideoBookSectionsTable).orderBy(VideoBookSectionsTable.id);
}

export const DeleteSection = async ({
    id
}: {
    id: number
}) => {
    try {
        const { db, connection } = await getDb2();
        await db.delete(VideoBookSectionsTable).where(eq(VideoBookSectionsTable.id, id));

        connection.end();

        return true;
    } catch (e) {
        return false;
    }
}