-- CreateTable
CREATE TABLE "Receita" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "task" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Receita_pkey" PRIMARY KEY ("id")
);
