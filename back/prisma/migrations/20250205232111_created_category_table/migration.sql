-- CreateTable
CREATE TABLE "Category" (
    "name" TEXT NOT NULL,
    "categoryIconId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
