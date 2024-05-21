import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { getDb } from './index.js';

async function migration(){
    const db = await getDb();
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('migrated Successfully')
    return 0;
}

migration();