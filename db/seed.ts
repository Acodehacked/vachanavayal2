import { getDb, getDb2 } from ".";
import bcrypt from "bcrypt";
import { AdminLoginTable } from "./schema/adminPanel";
import { user_logintable } from "./schema/userData";

async function main() {
    const { db, connection } = await getDb2();
    var password = '';
    // bcrypt.hash('abinantony@kattady', 10).then(async (result: string) => {
    //     password = result || "Abianin";
    //     await db.insert(AdminLoginTable).values({
    //         name: 'Abin Antony',
    //         type: 'VA',
    //         username: 'abinantony@kattady',
    //         email: 'abina5448@gmail.com',
    //         password: password,
    //     })
    //     console.log("Seeded successfully")
    // })
    bcrypt.hash('admin@vachanavayal', 10).then(async (result: string) => {
        password = result || "Abianin";
        await db.insert(AdminLoginTable).values({
            name: 'Main Admin',
            type: 'VA',
            username: 'bibliya2025@gmail.com',
            email: 'bibliya2025@gmail.com',
            password: password,
        })
        connection.end();
        console.log("Seeded successfully")
    })
    // await db.insert(user_logintable).values({
    //     name:'Abin Antony',
    //     email: 'abina5448@gmail.com',
    //     password:'Abinantony@1',
    //     phone:'8547036701',
    //     status:'active',
    //     cc:'91',
    //     house_name:'Kattady',
    //     diocese_id:1,
    //     parish_id:100,
    //     isIndian:true,
    //     dob: new Date('08-07-2006'),
    //     gender:'male',
    //     premium:{
    //         addedAt: new Date(),
    //         validAt: new Date(),
    //         values: []
    //     },
    //     logos:{
    //         addedAt: new Date(),
    //         validAt: new Date(),
    //         values: []
    //     },
    //     twentyTwenty:{
    //         addedAt: new Date(),
    //         validAt: new Date(),
    //         values: []
    //     },
    //     ebooks:{
    //         addedAt: new Date(),
    //         validAt: new Date(),
    //         values: []
    //     },
    //     publications:{
    //         addedAt: new Date(),
    //         validAt: new Date(),
    //         values: []
    //     }
    // })
}
main();