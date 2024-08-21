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

export const HomeCarouselTable = mysqlTable('HomeCarousel', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 256 }).notNull(),
  platform: text('platform',{enum:['web','app','both']}),
  image: varchar('image', { length: 1250 }),
  subtitle: varchar('subtitle', { length: 256 }),
  link: varchar('link', { length: 2000 }),
}, (HomeCarousel) => ({
  nameIndex:
    uniqueIndex('title_idx').on(HomeCarousel.title),
}));

export const ParishTable = mysqlTable('DioceseParishData', {
  id: int('id').primaryKey().autoincrement(),
  no_id: int('no_id').notNull(),
  name: varchar('name', { length: 700 }),
  parent: int('parent_no'),
}, (ParishTable) => ({
  nameIndex:
    uniqueIndex('title_idx').on(ParishTable.name),
}));

export const NoticeBoardTable = mysqlTable('notice_board', {
  id: int('id').primaryKey().autoincrement(),
  message: varchar('message', { length: 5000 }),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});
export const VachanavayalImageCollections = mysqlTable('vachanavideoBook_image_collections', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('ititle', { length: 300 }).notNull(),
});

export const VachanavayalImages = mysqlTable('vachanavideoBook_images', {
  id: int('id').primaryKey().autoincrement(),
  collectionId: int('collection_id').notNull(),
  image: varchar('image', { length: 5000 }).notNull(),
  title: varchar('ititle', { length: 255 }).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});
export const VideoBookSectionsTable = mysqlTable('vachanavideoBook_sections', {
  id: int('id').primaryKey().autoincrement(),
  type: text('stype',{enum:['subject','topic','programme']}).notNull(),
  title: varchar('title', { length: 5000 }).notNull(),
  parent: int('parent_id').notNull(),
});
export const VideoBookTable = mysqlTable('vachanavideoBook', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 5000 }).notNull(),
  episodeNo: int('episodeNo').notNull(),
  subjectId: int('subject_id').notNull(),
  topicId: int('topic_id').notNull(),
  programmeId: int('programme_id').notNull(),
  link: varchar('link', { length: 5000 }).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});