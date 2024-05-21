// import { db } from "@/db";
import {  getDb2 } from "@/db";
import { AdminLoginTable } from "@/db/schema/adminPanel";
import { compare, hash } from "bcrypt";
import { sql } from "drizzle-orm";
import { connect } from "http2";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login'
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'Enter Your Username', },
        password: { label: 'Username', type: 'password' },
      },
      async authorize(credentials, req) {
        const {db,connection} = await getDb2();
        
        const user = await db.select().from(AdminLoginTable).where(
          sql`${AdminLoginTable.email}=${credentials?.username}`);

        let User = {
          id: '',
          name: '',
          email: ''
        }
        connection.end();
        if (user.length > 0) {
          User = {
            id: user[0].id.toString(),
            name: user[0].name || "",
            email: user[0].email || ""
          };
          if (await compare(credentials.password as unknown as string,user[0].password || 'Unknownpass')) {
            return User;
          }
        }
        return null;
      },
    })
  ]
});

export { authOptions as GET, authOptions as POST }
