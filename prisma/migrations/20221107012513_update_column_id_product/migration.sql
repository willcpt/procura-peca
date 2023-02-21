/*
  Warnings:

  - You are about to drop the column `productId` on the `image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "image" DROP CONSTRAINT "image_productId_fkey";

-- AlterTable
ALTER TABLE "image" DROP COLUMN "productId";

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
