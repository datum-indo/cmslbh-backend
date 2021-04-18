-- CreateTable
CREATE TABLE `application` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `duduk_perara` MEDIUMTEXT,
    `info_lbh` MEDIUMTEXT,
    `jumlah_penerima_manfaat` INTEGER,
    `konfirmasi_data` BOOLEAN NOT NULL,
    `no_reg` MEDIUMTEXT,
    `pernah_klien` MEDIUMTEXT,
    `pernah_pp_lain` MEDIUMTEXT,
    `pp_lain` MEDIUMTEXT,
    `reg_date` DATETIME(3),
    `relasi_wakil_client` MEDIUMTEXT,
    `setuju_advokasi` BOOLEAN NOT NULL,
    `status_perwakilan` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `waktu_pernah_klien` MEDIUMTEXT,
    `why_lbh` MEDIUMTEXT,
    `tahap` MEDIUMTEXT,
    `status` MEDIUMTEXT,
    `wakil_id` INTEGER,
    `case` INTEGER,
UNIQUE INDEX `application.case_unique`(`case`),
INDEX `case`(`case`),
INDEX `wakil_id`(`wakil_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `application_id` INTEGER,
    `case_closed` BOOLEAN NOT NULL,
    `case_closed_jenis` MEDIUMTEXT,
    `created_at` DATETIME(3) NOT NULL,
    `created_by` MEDIUMTEXT,
    `hak_terlanggar` MEDIUMTEXT,
    `issue` MEDIUMTEXT,
    `judul_kasus` MEDIUMTEXT,
    `klasifikasi_dok` MEDIUMTEXT,
    `kronologi_kasus` MEDIUMTEXT,
    `lock_ditolak` BOOLEAN NOT NULL,
    `status_pendampingan` MEDIUMTEXT,
    `target_advokasi` MEDIUMTEXT,
    `unlock_pk` BOOLEAN NOT NULL,
    `unlock_transfer` BOOLEAN NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `progresses` INTEGER,
    `transfer` INTEGER,
    `pk` INTEGER,
UNIQUE INDEX `case.progresses_unique`(`progresses`),
UNIQUE INDEX `case.transfer_unique`(`transfer`),
UNIQUE INDEX `case.pk_unique`(`pk`),
INDEX `pk`(`pk`),
INDEX `progresses`(`progresses`),
INDEX `transfer`(`transfer`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseReferral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tglTransfer` DATETIME(3),
    `catatan` MEDIUMTEXT,
    `createdBy` MEDIUMTEXT,
    `updatedBy` MEDIUMTEXT,
    `caseId` INTEGER,
    `network` INTEGER,
    `client` INTEGER,
INDEX `caseId`(`caseId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseTransfer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tglTransfer` DATETIME(3),
    `catatan` MEDIUMTEXT,
    `createdBy` MEDIUMTEXT,
    `updatedBy` MEDIUMTEXT,
    `network` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_classification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_consultation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `app_konsul` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `isi_konsul` MEDIUMTEXT,
    `harapan` MEDIUMTEXT,
    `saranHukum` MEDIUMTEXT,
    `rencanaTindakLanjut` MEDIUMTEXT,
    `judul_aktifitas` MEDIUMTEXT,
    `pp_konsul` MEDIUMTEXT,
    `tgl_konsul` DATETIME(3),
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_consultation_app` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `app_consultation` INTEGER,
    `case_consultation_id` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `jenis_dokumen` MEDIUMTEXT,
    `judul_dokumen` MEDIUMTEXT,
    `keterangan` MEDIUMTEXT,
    `link` MEDIUMTEXT,
    `filename` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_issue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_korban` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `case_id` INTEGER,
    `person_id` INTEGER,
INDEX `case_id`(`case_id`),
INDEX `person_id`(`person_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_pelaku` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenisPelaku` MEDIUMTEXT,
    `case_id` INTEGER,
    `person_id` INTEGER,
INDEX `case_id`(`case_id`),
INDEX `person_id`(`person_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_pk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `didampingi` MEDIUMTEXT,
    `legal_memo` MEDIUMTEXT,
    `notula_rapat` MEDIUMTEXT,
    `target_akhir_advokasi` MEDIUMTEXT,
    `strategi_advokasi` MEDIUMTEXT,
    `status_alasan_tdk` MEDIUMTEXT,
    `tgl_rapat` DATETIME(3),
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `ppPendamping` INTEGER,
INDEX `ppPendamping`(`ppPendamping`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `catatan` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `jenis_peradilan` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_progress_activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `capaian` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `hambatan` MEDIUMTEXT,
    `judul_aktifitas` MEDIUMTEXT,
    `position` MEDIUMTEXT,
    `rencana_strategi` MEDIUMTEXT,
    `target_advokasi` MEDIUMTEXT,
    `tgl_aktifitas` DATETIME(3),
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_progress_activity_lit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_progress_activity_id` INTEGER,
INDEX `case_progress_activity_id`(`case_progress_activity_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_progress_activity_nonlit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_progress_activity_id` INTEGER,
INDEX `case_progress_activity_id`(`case_progress_activity_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_transfer_referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `catatan` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `document` MEDIUMTEXT,
    `jenis_transfer_referral` MEDIUMTEXT,
    `network_id` INTEGER,
    `tgl_transfer_referral` DATETIME(3),
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `case_violated_rights` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_mt` MEDIUMTEXT,
    `case_id` INTEGER,
INDEX `case_id`(`case_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alamat_lokasi` MEDIUMTEXT,
    `aset_gedung` MEDIUMTEXT,
    `aset_kios` MEDIUMTEXT,
    `aset_lahan_garapan` MEDIUMTEXT,
    `aset_lapak` MEDIUMTEXT,
    `aset_mobil` MEDIUMTEXT,
    `aset_motor` MEDIUMTEXT,
    `aset_rumah` MEDIUMTEXT,
    `aset_tanah` MEDIUMTEXT,
    `aset_toko` MEDIUMTEXT,
    `aset_warung` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `pendapatan` MEDIUMTEXT,
    `sktm` BOOLEAN NOT NULL,
    `sktm_upload` MEDIUMTEXT,
    `stm_keterangan` MEDIUMTEXT,
    `tanggungan_anak` INTEGER,
    `tanggungan_famili` INTEGER,
    `tanggungan_lain` INTEGER,
    `tanggungan_pasangan` INTEGER,
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `usia_saat_klien` INTEGER,
    `person_id` INTEGER,
    `application_id` INTEGER,
INDEX `person_id`(`person_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daftar_pengacara` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `jabatan` MEDIUMTEXT,
    `nama_lengkap` MEDIUMTEXT,
    `sembunyikan` BOOLEAN NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_dict` (
    `field_number` CHAR(30) NOT NULL,
    `data_type` MEDIUMTEXT,
    `entity` MEDIUMTEXT,
    `field_name` MEDIUMTEXT,
    `field_type` MEDIUMTEXT,
    `is_repeat` MEDIUMTEXT,
    `link_field` MEDIUMTEXT,
    `link_table` MEDIUMTEXT,
    `list_code` MEDIUMTEXT,
    `required` MEDIUMTEXT,
    `validation` MEDIUMTEXT,
    `visible_select_query` MEDIUMTEXT,

    PRIMARY KEY (`field_number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_dict_local` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` MEDIUMTEXT,
    `lang` MEDIUMTEXT,
    `field_number` CHAR(30),
INDEX `field_number`(`field_number`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_request` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `isi_request` MEDIUMTEXT,
    `jenis_request` MEDIUMTEXT,
    `statusRequest` MEDIUMTEXT,
    `tanggapan_request` MEDIUMTEXT,
    `tanggapanRequestIsi` MEDIUMTEXT,
    `tgl_expired` DATETIME(3),
    `tgl_request` DATETIME(3),
    `tgl_respon` DATETIME(3),
    `updated_at` DATETIME(3),
    `person_id` INTEGER,
    `case_id` INTEGER,
    `request_by` INTEGER,
    `application_id` INTEGER,
    `network_id` INTEGER,
    `request_to` INTEGER,
INDEX `case_id`(`case_id`),
INDEX `network_id`(`network_id`),
INDEX `person_id`(`person_id`),

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_request_app` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `log_request_id` INTEGER,
    `app_consultation` INTEGER,
INDEX `app_consultation`(`app_consultation`),
INDEX `log_request_id`(`log_request_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mt_vocab` (
    `KODE` CHAR(30) NOT NULL,
    `KODE_INDUK` MEDIUMTEXT,
    `LEVEL` INTEGER,
    `SEMBUNYIKAN` BOOLEAN NOT NULL,
    `TEKS` MEDIUMTEXT,
    `URUTAN` INTEGER,
    `KODE_LIST` INTEGER,
INDEX `KODE_LIST`(`KODE_LIST`),

    PRIMARY KEY (`KODE`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mt_vocab_group` (
    `KODE_LIST` INTEGER NOT NULL AUTO_INCREMENT,
    `NAMA_LIST` MEDIUMTEXT,

    PRIMARY KEY (`KODE_LIST`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `networks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` MEDIUMTEXT,
    `contact_person` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `email` MEDIUMTEXT,
    `name` MEDIUMTEXT,
    `no_contact` MEDIUMTEXT,
    `province_id` INTEGER,
    `regency_id` INTEGER,
    `type` MEDIUMTEXT,
    `status` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agama` MEDIUMTEXT,
    `alamat_domisili` MEDIUMTEXT,
    `alamat_id` MEDIUMTEXT,
    `alat_bantu` MEDIUMTEXT,
    `alias` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` MEDIUMTEXT,
    `disabilitas` BOOLEAN NOT NULL,
    `distrik_domisili` MEDIUMTEXT,
    `distrik_id` MEDIUMTEXT,
    `domisili_sama` BOOLEAN NOT NULL,
    `email` MEDIUMTEXT,
    `gol_darah` MEDIUMTEXT,
    `jenis_disabilitas` MEDIUMTEXT,
    `jenis_domisili` MEDIUMTEXT,
    `jenis_id` MEDIUMTEXT,
    `jenis_kelamin` MEDIUMTEXT,
    `jml_anggota` INTEGER,
    `nama_lengkap` MEDIUMTEXT,
    `nomor_id` MEDIUMTEXT,
    `pekerjaan` MEDIUMTEXT,
    `pendidikan` MEDIUMTEXT,
    `status_pernikahan` MEDIUMTEXT,
    `telepon` MEDIUMTEXT,
    `tgl_lahir` DATETIME(3),
    `tmp_lahir` MEDIUMTEXT,
    `unit_satuan` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,
    `updated_by` MEDIUMTEXT,
    `warga_negara` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person_documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(3),
    `file` INTEGER,
    `title` INTEGER,
    `updated_at` DATETIME(3) NOT NULL,
    `person_id` INTEGER,
INDEX `person_id`(`person_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `type` INTEGER,
INDEX `type`(`type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `description` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `src_analisa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group` MEDIUMTEXT,
    `label` MEDIUMTEXT,
    `field` MEDIUMTEXT,
    `type` MEDIUMTEXT,
    `source` MEDIUMTEXT,
    `kode_list` MEDIUMTEXT,
    `alias` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `src_operator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` MEDIUMTEXT,
    `operator` MEDIUMTEXT,
    `label` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `src_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` MEDIUMTEXT,
    `template` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` MEDIUMTEXT,
    `avatar` MEDIUMTEXT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(3),
    `email` MEDIUMTEXT,
    `name` MEDIUMTEXT,
    `password` MEDIUMTEXT,
    `phone` MEDIUMTEXT,
    `position` MEDIUMTEXT,
    `remember_token` MEDIUMTEXT,
    `roles` MEDIUMTEXT,
    `status` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,
    `username` MEDIUMTEXT,
    `profile` INTEGER,
UNIQUE INDEX `users.profile_unique`(`profile`),
INDEX `profile`(`profile`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `no_contact` MEDIUMTEXT,
    `occupation` MEDIUMTEXT,
    `photo` MEDIUMTEXT,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClientToLogRequest` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
UNIQUE INDEX `_ClientToLogRequest_AB_unique`(`A`, `B`),
INDEX `_ClientToLogRequest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoleToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
UNIQUE INDEX `_RoleToUser_AB_unique`(`A`, `B`),
INDEX `_RoleToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `application` ADD FOREIGN KEY (`case`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `application` ADD FOREIGN KEY (`wakil_id`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case` ADD FOREIGN KEY (`pk`) REFERENCES `case_pk`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case` ADD FOREIGN KEY (`progresses`) REFERENCES `case_progress`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case` ADD FOREIGN KEY (`transfer`) REFERENCES `CaseTransfer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseReferral` ADD FOREIGN KEY (`caseId`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseReferral` ADD FOREIGN KEY (`client`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseReferral` ADD FOREIGN KEY (`network`) REFERENCES `networks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseTransfer` ADD FOREIGN KEY (`network`) REFERENCES `networks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_classification` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_consultation` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_consultation_app` ADD FOREIGN KEY (`app_consultation`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_consultation_app` ADD FOREIGN KEY (`case_consultation_id`) REFERENCES `case_consultation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_document` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_issue` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_korban` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_korban` ADD FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_pelaku` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_pelaku` ADD FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_pk` ADD FOREIGN KEY (`ppPendamping`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_progress_activity` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_progress_activity_lit` ADD FOREIGN KEY (`case_progress_activity_id`) REFERENCES `case_progress_activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_progress_activity_nonlit` ADD FOREIGN KEY (`case_progress_activity_id`) REFERENCES `case_progress_activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_transfer_referral` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `case_violated_rights` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client` ADD FOREIGN KEY (`application_id`) REFERENCES `application`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `client` ADD FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `data_dict_local` ADD FOREIGN KEY (`field_number`) REFERENCES `data_dict`(`field_number`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request` ADD FOREIGN KEY (`application_id`) REFERENCES `application`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request` ADD FOREIGN KEY (`case_id`) REFERENCES `case`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request` ADD FOREIGN KEY (`network_id`) REFERENCES `networks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request` ADD FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request` ADD FOREIGN KEY (`request_by`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request` ADD FOREIGN KEY (`request_to`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request_app` ADD FOREIGN KEY (`app_consultation`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_request_app` ADD FOREIGN KEY (`log_request_id`) REFERENCES `log_request`(`ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mt_vocab` ADD FOREIGN KEY (`KODE_LIST`) REFERENCES `mt_vocab_group`(`KODE_LIST`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `person_documents` ADD FOREIGN KEY (`person_id`) REFERENCES `person`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roles` ADD FOREIGN KEY (`type`) REFERENCES `roles_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD FOREIGN KEY (`profile`) REFERENCES `user_profiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClientToLogRequest` ADD FOREIGN KEY (`A`) REFERENCES `client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClientToLogRequest` ADD FOREIGN KEY (`B`) REFERENCES `log_request`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToUser` ADD FOREIGN KEY (`A`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToUser` ADD FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
