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


type PremiumType = {
  addedAt: Date | string | number,
  validAt: Date | string | number,
  values:  number[] | string[],
} | [];
export const user_logintable = mysqlTable('user_logintable', {
    id: int('id').primaryKey().autoincrement(),
    name: varchar('user_name', { length: 256 }).notNull(),
    email: varchar('user_mail', { length: 256 }).notNull(),
    password: varchar('user_password', { length: 256 }).notNull(),
    phone: varchar('user_phone_number', { length: 25 }).notNull(),
    status: varchar('user_active', { length: 20,enum:["active","inactive"] }).notNull(),
    cc: varchar('user_cc', { length: 20 }).notNull(),
    house_name: varchar('user_house_name', { length: 300 }).notNull(),
    diocese_id: int('user_diocese_id').notNull(),
    parish_id: int('user_parish_id').notNull(),
    isIndian: boolean('user_residential_status').notNull().default(false),
    dob: date('date_of_birth').default(new Date()).notNull(),
    gender: text('user_gender',{enum:['male','female']}),
    last_login: timestamp("last_login").default(sql`CURRENT_TIMESTAMP`).$onUpdate(() => new Date()),
    rdm_code: text('recovery_code'),
    device: varchar('user_device',{length:255}),
    premium: json('premium_membership').$type<PremiumType>().notNull().default([]),
    logos: json('logos_membership').$type<PremiumType>().notNull().default([]),
    twentyTwenty: json('twentytwenty_membership').$type<PremiumType>().notNull().default([]),
    ebooks: json('ebook_membership').$type<PremiumType>().notNull().default([]),
    publications: json('publication').$type<PremiumType>().notNull().default([]),
  }, (user_logintable) => ({
    emailIndex: uniqueIndex('email_idx').on(user_logintable.email),
    phoneIndex: uniqueIndex('phone_idx').on(user_logintable.phone),
  }))
  


export const QuizResponses = mysqlTable('QuizResponses', {
    id: int('id').primaryKey().autoincrement(),
    gen_id: varchar('generated_id',{length:300}).notNull(),
    status: varchar('status', { length: 20, enum: ['started', 'progress', 'completed']}),
    responses: varchar('responses',{length:2000}),
    added_on : date('date')
  }, (ClientDb) => ({
    genIndex: uniqueIndex('gen_idx').on(ClientDb.gen_id),
  }))
  
  
