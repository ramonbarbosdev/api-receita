/*
  Warnings:

  - The `task` column on the `Receita` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tags` column on the `Receita` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Receita" DROP COLUMN "task",
ADD COLUMN     "task" TEXT[],
DROP COLUMN "tags",
ADD COLUMN     "tags" TEXT[];
