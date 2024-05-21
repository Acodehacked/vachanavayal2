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


export const AdminLoginTable = mysqlTable('AdminLogin', {
    id: int('id').primaryKey().autoincrement(),
    type: varchar('type', { length: 20, enum: ["VA","VE"] }).notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    username: varchar('username', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    password: varchar('password', { length: 256 }).notNull(),
    last_login: timestamp("last_login").default(sql`CURRENT_TIMESTAMP`).notNull(),
  }, (AdminLoginTable) => ({
    nameIndex: uniqueIndex('email_idx').on(AdminLoginTable.email),
    usernameIndex: uniqueIndex('username_idx').on(AdminLoginTable.username),
  }))
  
  export const VachanavayalBooksTable = mysqlTable('VachanavayalBooks', {
    id: int('id').primaryKey().autoincrement(),
    order_no: int('order_no').notNull(),
    type: varchar('type', { length: 20, enum: ["BIBLE","OTHERS"] }).notNull(),
    from: varchar('from', { length: 20, enum: ["OLD_TESTAMENT","NEW_TESTAMENT"] }),
    title: json('title').$type<string[]>().notNull().default([]),
    chapters: int('chapters').default(0).notNull(),
    random: boolean('random').default(false),
    images: json('images').$type<string[]>().notNull().default([]),
    forSell: boolean('for_sell').default(true).notNull()
  }, (VachanavayalBooks) => ({
    titleIndex: uniqueIndex('title_idx').on(VachanavayalBooks.title),
  }))
  

  export const QuestionsDB = mysqlTable('QuestionsDb', {
    id: int('id').primaryKey().autoincrement(),
    bookId: int('book_id').notNull(),
    chapterNo: int('chapter_no').notNull(),
    title: varchar('title', { length: 256 }).notNull(),
    optionsList: json('options').$type<string[]>().notNull().default([]),
    correctOption: int('correct_option').notNull(),
    info: varchar('option_info', { length: 256 }).notNull(),
    subjectList: json('subjects_list').$type<string[]>().notNull().default([]),
    language: varchar('language', { length: 20, enum: ['eng', 'mal']}),
    updated_on : date('updated_on').$onUpdate(() => new Date()),
    attempted: int('attempted').notNull().default(0),
    corrected: int('corrected').notNull().default(0),
  }, (QuestionsDB) => ({
    nameIndex: uniqueIndex('title_idx').on(QuestionsDB.title),
  }))

  export const VersesSubjectsTable = mysqlTable('verses_subjects', {
    id: int('id').primaryKey().autoincrement(),
    language: varchar('language', { length: 20, enum: ['eng', 'mal']}),
    name: varchar('name', { length: 500 }).notNull(),
  });
  
  export const VersesTable = mysqlTable('verses', {
    id: int('id').primaryKey().autoincrement(),
    language: varchar('language', { length: 20, enum: ['eng', 'mal']}),
    bookId: int('book_id').notNull(),
    chapterNo: int('chapter_no').notNull(),
    verseNo: text('verse_no').notNull(),
    verse: varchar('verse', { length: 256 }).notNull(),
    subjectList: json('subjects_list').$type<string[]>().notNull().default([]),
    updated_on : date('updated_on').$onUpdate(() => new Date()),
  });
  export const VarietyQuizTable = mysqlTable('varietyQuiz', {
    id: int('id').primaryKey().autoincrement(),
    episode: int('id').default(0),
    type: text('vType',{enum:["Vachanavayal","Others"]}),
    language: varchar('language', { length: 20, enum: ['eng', 'mal']}),
    title: varchar('Vtitle',{length:300}).notNull(),
    images: json('images').$type<string[]>().default([]).notNull(),
    description: varchar('Vdescription',{length:500}).notNull(),
    annualQuiz: date('annual_quiz').notNull().default(new Date()),
    syllabus: json('syllabus').$type<{
      bookId?: number,
      percentage? :number
    }[]>().notNull(),
    modelQuiz: boolean('model_quiz').default(false).notNull(),
    totalQuestions: int('total_questions').notNull(),
    totalTime: int('total_time').notNull(),
    oneTime: boolean('one_time_quiz').default(false).notNull(),
    startDate: timestamp('start_datetime').defaultNow().notNull(),
    endDate: timestamp('end_datetime').defaultNow().notNull(),
    targetDiocese: int('target_diocese').default(0).notNull(),
    targetParish: int('target_parish').default(0).notNull(),
    updated_on : date('updated_on').$onUpdate(() => new Date()),
  });


  
  