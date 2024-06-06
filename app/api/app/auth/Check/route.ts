import { getDb2 } from "@/db";
import { user_logintable } from "@/db/schema/userData";
import { asc, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
    const { db, connection } = await getDb2();
    try {
        const reqdata = await req.json();
        const getcc = reqdata['cc'] as string;
        const getphone = reqdata['phone'] as string;
        const getapp = reqdata['from_app'] as Boolean;
        const { db, connection } = await getDb2();
        const data = await db.select().from(user_logintable).where(eq(user_logintable.phone,getphone));
        connection.end();
        if (data != null) {
            data.forEach((item)=>{
                if(item.cc == getcc){
                    return NextResponse.json({
                        status: 'success',
                        data: 'Hurray! your number is already registererd'
                    });
                }
            })
            return NextResponse.json({
                status: 'error',
                data: 'we didn\'t find your number'
            });
        }
    }catch(e){
        return NextResponse.json({
            status: 'error',
            data: 'we didn\'t find your number'
        });
    }
}


async function GET(req: NextRequest) {
    return NextResponse.json({
        status: 'error',
        data: 'we didn\'t find your number'
    });
}
export { POST, GET }