import {  getDb2 } from "@/db";
import { AdminLoginTable } from "@/db/schema/adminPanel";
import { compare, hash } from "bcrypt";
import { sql } from "drizzle-orm";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
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
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const {db,connection} = await getDb2();
        const user = await db.select().from(AdminLoginTable).where(sql`${AdminLoginTable.username}=${credentials?.username}`);

        let User = {
          id: '',
          name: '',
          email: '',
          type: ''
        }
        connection.end();
        if (user.length > 0) {
          User = {
            id: user[0].id.toString(),
            name: user[0].name || "",
            email: user[0].email || "",
            type: user[0].type || 'VE'
          };
          if (await compare(credentials?.password as string,user[0].password || 'Unknownpass')) {
            return User;
          }
        }
        return null;
      },
    })
  ]
});

export { handler as GET, handler as POST }
