/*
  Warnings:

  - You are about to drop the column `brand` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `products` table without a default value. This is not possible if the table is not empty.
  - Made the column `price` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "brand",
DROP COLUMN "model",
ADD COLUMN     "salePrice" DOUBLE PRECISION,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_title_key" ON "products"("title");

-- CreateIndex
CREATE UNIQUE INDEX "products_description_key" ON "products"("description");
