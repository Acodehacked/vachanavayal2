ALTER TABLE `AdminLogin` MODIFY COLUMN `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `varietyQuiz` MODIFY COLUMN `annual_quiz` date NOT NULL DEFAULT '2024-05-28';--> statement-breakpoint
ALTER TABLE `user_logintable` MODIFY COLUMN `date_of_birth` date NOT NULL DEFAULT '2024-05-28';--> statement-breakpoint
ALTER TABLE `user_logintable` ADD `premium_membership` json DEFAULT ('[]') NOT NULL;--> statement-breakpoint
ALTER TABLE `user_logintable` ADD `logos_membership` json DEFAULT ('[]') NOT NULL;--> statement-breakpoint
ALTER TABLE `user_logintable` ADD `twentytwenty_membership` json DEFAULT ('[]') NOT NULL;--> statement-breakpoint
ALTER TABLE `user_logintable` ADD `ebook_membership` json DEFAULT ('[]') NOT NULL;--> statement-breakpoint
ALTER TABLE `user_logintable` ADD `publication` json DEFAULT ('[]') NOT NULL;