/*
  Warnings:

  - Made the column `description` on table `Receita` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Receita" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "task" DROP NOT NULL,
ALTER COLUMN "tags" DROP NOT NULL;
