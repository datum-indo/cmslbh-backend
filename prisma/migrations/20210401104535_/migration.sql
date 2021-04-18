/*
  Warnings:

  - You are about to drop the column `profile` on the `users` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[userProfileId]` on the table `users`. If there are existing duplicate values, the migration will fail.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_ibfk_1`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `profile`,
    ADD COLUMN     `userProfileId` INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX `users.userProfileId_unique` ON `users`(`userProfileId`);

-- AddForeignKey
ALTER TABLE `users` ADD FOREIGN KEY (`userProfileId`) REFERENCES `user_profiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
