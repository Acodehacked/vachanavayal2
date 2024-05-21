import { getDb } from ".";
import bcrypt from "bcrypt";
import { AdminLoginTable } from "./schema/adminPanel";

async function main() {
    const db = await getDb();
    var password = '';
    bcrypt.hash('abinantony@kattady', 10).then(async (result: string) => {
        password = result || "Abianin";
        await db.insert(AdminLoginTable).values({
            name: 'Abin Antony',
            type: 'VA',
            username: 'abinantony@kattady',
            email: 'abina5448@gmail.com',
            password: password,
        })
        console.log("Seeded successfully")
    })
}
main();