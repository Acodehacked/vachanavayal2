import { getDb2 } from "@/db";
import { VideoBookSectionsTable, VideoBookTable } from "@/db/schema/publicData";
import { AddForm } from "./AddForm";

export default function Page(){
    return <main>
        <AddForm />
    </main>
}