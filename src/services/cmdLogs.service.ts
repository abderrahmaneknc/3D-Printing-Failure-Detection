import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export const createCommandLog = async (data: Prisma.CommandLogCreateInput) => {
  const printer = await prisma.printer.findUnique({
    where: { id: data.printer.connect?.id },
  });
  if (!printer) throw new Error("Printer not found");

  const command = await prisma.gcodeCommand.findUnique({
    where: { id: data.gcodeCommand.connect?.id },
  });
  if (!command) throw new Error("Gcode command not found");

  return prisma.commandLog.create({
    data,
    include: { printer: true, gcodeCommand: true },
  });
};

export const getCommandLogs = () => {
  return prisma.commandLog.findMany({
    include: { printer: true, gcodeCommand: true },
  });
};

export const getCommandLogById = (id: string) => {
  return prisma.commandLog.findUnique({
    where: { id },
    include: { printer: true, gcodeCommand: true },
  });
};

export const getCommandLogsByPrinter = async (printerId: string) => {
  const printer = await prisma.printer.findUnique({ where: { id: printerId } });
  if (!printer) throw new Error("Printer not found");

  return prisma.commandLog.findMany({
    where: { printerId },
    include: { gcodeCommand: true },
  });
};

export const updateCommandLog = async (id: string, data: Prisma.CommandLogUpdateInput) => {
  const log = await prisma.commandLog.findUnique({ where: { id } });
  if (!log) throw new Error("Command log not found");

  return prisma.commandLog.update({
    where: { id },
    data,
    include: { printer: true, gcodeCommand: true },
  });
};

export const deleteCommandLog = async (id: string) => {
  const log = await prisma.commandLog.findUnique({ where: { id } });
  if (!log) throw new Error("Command log not found");

  return prisma.commandLog.delete({ where: { id } });
};