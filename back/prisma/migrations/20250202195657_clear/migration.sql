-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "categoryName" TEXT,
    "categoryIconId" TEXT,
    "value" INTEGER NOT NULL,
    "paimentDate" TIMESTAMP(3) NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "paimentType" TEXT NOT NULL,
    "parcels" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
