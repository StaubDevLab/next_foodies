/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Meal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Meal_slug_key" ON "Meal"("slug");
