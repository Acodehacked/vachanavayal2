import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  date,
  datetime,
  int,
  json,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
  year,
} from 'drizzle-orm/mysql-core';



export const PlansTable = mysqlTable('plans_table', {
    id: int('id').primaryKey().autoincrement(),
    planId: int('plan_id').notNull(),
    name: varchar('plan_name',{length:100}),
    amt_inr: int('plan_amt_inr').notNull(),
    amt_nri: int('plan_amt_nri').notNull(),
    duration: int('plan_duration').notNull(),
    term: varchar('plan_term', { length: 50, enum: ["YEARLY","MONTHLY","LIFETIME","LIMITED"] }).notNull(),
    ref_codes: json('ref_codes').$type<string[]>().notNull().default([]),
    discount: int('discount'),
  });

export const PurchasesTable = mysqlTable('Purchases', {
    id: int('id').primaryKey().autoincrement(),
    userId: int('user_id'),
    type: varchar('type', { length: 20, enum: ["PREMIUM","TWENTY","LOGOS"] }).notNull(),
    amount: int('amt').notNull(),
    plan_id: int('plan_id').notNull(),
    processed_on: timestamp('processed_on').defaultNow(),
    completed_on: timestamp('completed_on').defaultNow(),
    end_date: date('end_date').notNull(),
    refer_id: varchar('refer_id',{length:500}),
    values: json('values').$type<number[]>().notNull().default([]),
    status: varchar('status',{length:100, enum:['started','processing',"completed"]}),
  });