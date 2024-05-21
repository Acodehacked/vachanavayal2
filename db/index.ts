import "dotenv/config";
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from "mysql2/promise";

export async function getDb(){
  // const poolConnection = mysql.createPool({
  //   host: "localhost",
  //   user: "root",
  //   port: 3306,
  //   database: "porukaracollege",
  //   password: "Abin@12345",
  // });
  // const db = drizzle(poolConnection);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "vachanavayal",
    password: "Abin@12345",
  });  
  const db = drizzle(connection);
  return db;
}
export async function getDb2(){
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "vachanavayal",
    password: "Abin@12345",
  });  
  const db = drizzle(connection);
  return {db,connection};
}
