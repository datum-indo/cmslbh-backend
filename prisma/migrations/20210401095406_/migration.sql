/*
  Warnings:

  - You are about to drop the column `keterangan` on the `case_consultation_app` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `case_korban` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `log_request_app` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `case_consultation_app` DROP COLUMN `keterangan`;

-- AlterTable
ALTER TABLE `case_korban` DROP COLUMN `keterangan`;

-- AlterTable
ALTER TABLE `log_request_app` DROP COLUMN `keterangan`;

-- AlterIndex
ALTER TABLE `users` RENAME INDEX `users.profile_unique` TO `users_profile_unique`;
