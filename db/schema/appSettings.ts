
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
import { user_logintable } from './userData';


type AppSettingType = string[] | 
number[] | 
{
  value?:string
}[] | 
{
  type?: "FULL_SYLLABUS" | "BOOKWISE" | "CHAPTERWISE",
  difficulty?: "EASY" | "MEDIUM" | "HARD",
  plan_id?: number,
  time?: number,
  question_no? :number,
  syllabus?: string
};
type QuizLogTableType = 
//BIBLIYA QUIZ
{
    BcurrentBook? :number,
    BcurrentChapter?: number,
    BcurrentQuestion?: number | null,
    Bsaved?: {
      id?: number | null,
      userSelected? : number | String | null,
    },
    BtotalScore? :number,
    BlastUpdated?:string | Date,
    BlimitDay? : number
} |
//Variety Quiz
{
  VquizStatus?: "started" | 'progress' | 'ended',
  VquizId? : number,
  VtotalTimeTaken?: number,
  VtotalMark?: number,
  VstartedTime?: String | Date | null,
  VendedTime?: Date | String | null
} | 
//Search
{
  searchValue?: String,
} |
//Page
{
  pageType?: "videbook" | 'vachana_bokka' | 'logos_club' | 'twenty_twenty' | 'ebook' | 'publications' | 'profile_update' | 'password_change',
  pageValue? : number | string | null,
} |
// VIDEOBOOK
{
  sectionId?:number,
} |
//LOGOS CLUB
{
  quizId?: number | string | null,
} |
//PAYMENT PAGE 
{
  paymentType?: "logos_club" | 'publications' | 'ebook' | 'twenty_twenty' | 'app_premium',
  paymentAmount?: number
} | 
//PUBLICATIONS
{ 
  PbookId?: number,
} | 
//TWENTY TWENTY
{ 
  TbookId?: number,
  TnofQ?: number
} | [];

export const AppSettingsTable = mysqlTable('app_settings',{
  id: int('id').primaryKey().autoincrement(),
  name: text('setting_name').notNull(),
  type: text('setting_type',{enum:['QUIZ',"APP"]}),
  values: json('setting_value').$type<AppSettingType>().notNull().default([]),
  updated_at : timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const AppQuizLogTable = mysqlTable('app_quizlog',{
  id: int('id').primaryKey().autoincrement(),
  userId: int('user_id').notNull().references(()=>user_logintable.id),
  type: text('activity_type',{enum:["BIBLIYA","VARIETYQUIZ","SEARCH","PAGE","VIDEOBOOK","LOGOS","PUBLICATIONS","PAYMENT","TWENTYTWENTY"]}),
  value: json('log_value').$type<QuizLogTableType>().default([]).notNull(),
  updated_at : timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});


export const AppActivitiesLogTable = mysqlTable('app_activities',{
    id: int('id').primaryKey().autoincrement(),
    user_id: int('user_id').notNull().references(()=>user_logintable.id),
    type: text('activity_type',{enum:["BIBLIYA","VARIETYQUIZ","SEARCH","PAGE","VIDEOBOOK","LOGOS","PUBLICATIONS","TWENTYTWENTY"]}),
    value: varchar('activity_value',{length:500}),
    updated_at : timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
  });
  