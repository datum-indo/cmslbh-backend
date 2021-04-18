/*
  Warnings:

  - You are about to alter the column `created_at` on the `case` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.

*/
-- AlterTable
ALTER TABLE `case` ADD COLUMN     `pelaku_korban_relasi` VARCHAR(191),
    MODIFY `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- CreateTable
CREATE TABLE `case_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_incident_location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_modus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_violence_method` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `case_category` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_incident_location` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_modus` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_violence_method` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
