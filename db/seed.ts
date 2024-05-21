import { getDb } from ".";
import { AdminLoginTable } from "./schema.js";
import bcrypt from "bcrypt";

async function main() {
    const db = await getDb();
    var password = '';
    bcrypt.hash('porukaracollege@champakulam', 10).then(async (result: string) => {
        password = result || "Abianin";
        await db.insert(AdminLoginTable).values({
            name: 'Porukara College',
            email: 'porukaracollege@gmail.com',
            password: password,
        })
        console.log("Seeded successfully")
    })
}
main();