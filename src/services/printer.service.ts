import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export const createPrinter = (data: Prisma.PrinterCreateInput) => {
  return prisma.printer.create({ data });
};

export const getPrinters = () => {
  return prisma.printer.findMany({
    include: { tags: true },
  });
};

export const getPrinterById = (id: string) => {
  return prisma.printer.findUnique({
    where: { id },
    include: {
      tags: true,
      jobs: true,
      commandLogs: true,
      maintenanceLogs: true,
    },
  });
};

export const updatePrinter = (id: string, data: Prisma.PrinterUpdateInput) => {
  return prisma.printer.update({
    where: { id },
    data,
  });
};

export const deletePrinter = async (id: string) => {
  const printer = await prisma.printer.findUnique({ where: { id } });
  if (!printer) throw new Error("Printer not found");

  await prisma.printJob.deleteMany({ where: { printerId: id } });

  return prisma.printer.delete({ where: { id } });
};