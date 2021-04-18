/*
  Warnings:

  - You are about to drop the column `type` on the `roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `roles` DROP FOREIGN KEY `roles_ibfk_1`;

-- AlterTable
ALTER TABLE `roles` DROP COLUMN `type`,
    ADD COLUMN     `typeRole` INTEGER;

-- AddForeignKey
ALTER TABLE `roles` ADD FOREIGN KEY (`typeRole`) REFERENCES `roles_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
