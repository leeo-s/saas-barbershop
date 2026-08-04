/*
  Warnings:

  - Added the required column `employeeId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DeleteRows: remove existing bookings since they predate the employee relation
DELETE FROM "Booking";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "employeeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BarbershopEmployees" (
    "id" TEXT NOT NULL,
    "barbershopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BarbershopEmployees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BarbershopEmployees" ADD CONSTRAINT "BarbershopEmployees_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarbershopEmployees" ADD CONSTRAINT "BarbershopEmployees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "BarbershopEmployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
