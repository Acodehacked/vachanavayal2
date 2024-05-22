-- CREATE TABLE `AdminLogin` (
-- 	`id` int AUTO_INCREMENT NOT NULL,
-- 	`type` varchar(20) NOT NULL,
-- 	`name` varchar(256) NOT NULL,
-- 	`username` varchar(256) NOT NULL,
-- 	`email` varchar(256) NOT NULL,
-- 	`password` varchar(256) NOT NULL,
-- 	`last_login` timestamp DEFAULT (now()),
-- 	CONSTRAINT `AdminLogin_id` PRIMARY KEY(`id`),
-- 	CONSTRAINT `email_idx` UNIQUE(`email`),
-- 	CONSTRAINT `username_idx` UNIQUE(`username`)
-- );
-- --> statement-breakpoint
CREATE TABLE `QuestionsDb` (
	`id` int AUTO_INCREMENT NOT NULL,
	`book_id` int NOT NULL,
	`chapter_no` int NOT NULL,
	`title` varchar(256) NOT NULL,
	`options` json NOT NULL DEFAULT ('[]'),
	`correct_option` int NOT NULL,
	`option_info` varchar(256) NOT NULL,
	`subjects_list` json NOT NULL DEFAULT ('[]'),
	`language` varchar(20),
	`updated_on` date,
	`attempted` int NOT NULL DEFAULT 0,
	`corrected` int NOT NULL DEFAULT 0,
	CONSTRAINT `QuestionsDb_id` PRIMARY KEY(`id`),
	CONSTRAINT `title_idx` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `VachanavayalBooks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`order_no` int NOT NULL,
	`type` varchar(20) NOT NULL,
	`from` varchar(20),
	`title` json NOT NULL DEFAULT ('[]'),
	`chapters` int NOT NULL DEFAULT 0,
	`random` boolean DEFAULT false,
	`images` json NOT NULL DEFAULT ('[]'),
	`for_sell` boolean NOT NULL DEFAULT true,
	CONSTRAINT `VachanavayalBooks_id` PRIMARY KEY(`id`),
	CONSTRAINT `title_idx` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `varietyQuiz` (
	`id` int DEFAULT 0,
	`vType` text,
	`language` varchar(20),
	`Vtitle` varchar(300) NOT NULL,
	`images` json NOT NULL DEFAULT ('[]'),
	`Vdescription` varchar(500) NOT NULL,
	`annual_quiz` date NOT NULL DEFAULT '2024-05-21',
	`syllabus` json NOT NULL,
	`model_quiz` boolean NOT NULL DEFAULT false,
	`total_questions` int NOT NULL,
	`total_time` int NOT NULL,
	`one_time_quiz` boolean NOT NULL DEFAULT false,
	`start_datetime` timestamp NOT NULL DEFAULT (now()),
	`end_datetime` timestamp NOT NULL DEFAULT (now()),
	`target_diocese` int NOT NULL DEFAULT 0,
	`target_parish` int NOT NULL DEFAULT 0,
	`updated_on` date,
	CONSTRAINT `varietyQuiz_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `verses_subjects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`language` varchar(20),
	`name` varchar(500) NOT NULL,
	CONSTRAINT `verses_subjects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `verses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`language` varchar(20),
	`book_id` int NOT NULL,
	`chapter_no` int NOT NULL,
	`verse_no` text NOT NULL,
	`verse` varchar(256) NOT NULL,
	`subjects_list` json NOT NULL DEFAULT ('[]'),
	`updated_on` date,
	CONSTRAINT `verses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `app_activities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`activity_type` text,
	`activity_value` varchar(500),
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `app_activities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `app_quizlog` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`activity_type` text,
	`log_value` json NOT NULL DEFAULT ('[]'),
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `app_quizlog_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `app_settings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`setting_name` text NOT NULL,
	`setting_type` text,
	`setting_value` json NOT NULL DEFAULT ('[]'),
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `app_settings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `plans_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`plan_id` int NOT NULL,
	`plan_name` varchar(100),
	`plan_amt_inr` int NOT NULL,
	`plan_amt_nri` int NOT NULL,
	`plan_duration` int NOT NULL,
	`plan_term` varchar(50) NOT NULL,
	`ref_codes` json NOT NULL DEFAULT ('[]'),
	`discount` int,
	CONSTRAINT `plans_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Purchases` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`type` varchar(20) NOT NULL,
	`amt` int NOT NULL,
	`plan_id` int NOT NULL,
	`processed_on` timestamp DEFAULT (now()),
	`completed_on` timestamp DEFAULT (now()),
	`end_date` date NOT NULL,
	`refer_id` varchar(500),
	`values` json NOT NULL DEFAULT ('[]'),
	`status` varchar(100),
	CONSTRAINT `Purchases_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `HomeCarousel` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`platform` text,
	`image` varchar(1250),
	`subtitle` varchar(256),
	`link` varchar(2000),
	CONSTRAINT `HomeCarousel_id` PRIMARY KEY(`id`),
	CONSTRAINT `title_idx` UNIQUE(`title`)
);
--> statement-breakpoint
CREATE TABLE `notice_board` (
	`id` int AUTO_INCREMENT NOT NULL,
	`message` varchar(5000),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `notice_board_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `DioceseParishData` (
	`id` int AUTO_INCREMENT NOT NULL,
	`no_id` int NOT NULL,
	`name` varchar(700),
	`parent_no` int,
	CONSTRAINT `DioceseParishData_id` PRIMARY KEY(`id`),
	CONSTRAINT `title_idx` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `vachanavideoBook_image_collections` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ititle` varchar(300) NOT NULL,
	CONSTRAINT `vachanavideoBook_image_collections_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `vachanavideoBook_images` (
	`id` int AUTO_INCREMENT NOT NULL,
	`collection_id` int NOT NULL,
	`image` varchar(5000) NOT NULL,
	`ititle` varchar(255) NOT NULL,
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `vachanavideoBook_images_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `vachanavideoBook_sections` (
	`id` int AUTO_INCREMENT NOT NULL,
	`stype` text NOT NULL,
	`title` varchar(5000) NOT NULL,
	`parent_id` int NOT NULL,
	CONSTRAINT `vachanavideoBook_sections_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `vachanavideoBook` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(5000) NOT NULL,
	`episodeNo` int NOT NULL,
	`subject_id` int NOT NULL,
	`topic_id` int NOT NULL,
	`programme_id` int NOT NULL,
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `vachanavideoBook_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `QuizResponses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`generated_id` varchar(300) NOT NULL,
	`status` varchar(20),
	`responses` varchar(2000),
	`date` date,
	CONSTRAINT `QuizResponses_id` PRIMARY KEY(`id`),
	CONSTRAINT `gen_idx` UNIQUE(`generated_id`)
);
--> statement-breakpoint
CREATE TABLE `user_logintable` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_name` varchar(256) NOT NULL,
	`user_mail` varchar(256) NOT NULL,
	`user_password` varchar(256) NOT NULL,
	`user_phone_number` varchar(25) NOT NULL,
	`user_active` varchar(20) NOT NULL,
	`user_cc` varchar(20) NOT NULL,
	`user_house_name` varchar(300) NOT NULL,
	`user_diocese_id` int NOT NULL,
	`user_parish_id` int NOT NULL,
	`user_residential_status` boolean NOT NULL DEFAULT false,
	`date_of_birth` date NOT NULL DEFAULT '2024-05-21',
	`user_gender` text,
	`last_login` timestamp DEFAULT CURRENT_TIMESTAMP,
	`recovery_code` text,
	`user_device` varchar(255),
	CONSTRAINT `user_logintable_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_idx` UNIQUE(`user_mail`),
	CONSTRAINT `phone_idx` UNIQUE(`user_phone_number`)
);
--> statement-breakpoint
ALTER TABLE `app_activities` ADD CONSTRAINT `app_activities_user_id_user_logintable_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user_logintable`(`id`) ON DELETE no action ON UPDATE no action;
--> statement-breakpoint
ALTER TABLE `app_quizlog` ADD CONSTRAINT `app_quizlog_user_id_user_logintable_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user_logintable`(`id`) ON DELETE no action ON UPDATE no action;