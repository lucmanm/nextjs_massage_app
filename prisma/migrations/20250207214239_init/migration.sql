-- AlterTable
ALTER TABLE "contact_us" ALTER COLUMN "isRead" DROP NOT NULL,
ALTER COLUMN "isRead" SET DEFAULT false;
