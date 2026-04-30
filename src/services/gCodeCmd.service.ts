import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export const createGcodeCommand = (data: Prisma.GcodeCommandCreateInput) => {
  return prisma.gcodeCommand.create({ data });
};

export const getGcodeCommands = () => {
  return prisma.gcodeCommand.findMany({
    include: { commandLog: true },
  });
};

export const getGcodeCommandById = (id: string) => {
  return prisma.gcodeCommand.findUnique({
    where: { id },
    include: { commandLog: true },
  });
};

export const updateGcodeCommand = async (id: string, data: Prisma.GcodeCommandUpdateInput) => {
  const command = await prisma.gcodeCommand.findUnique({ where: { id } });
  if (!command) throw new Error("Gcode command not found");

  return prisma.gcodeCommand.update({
    where: { id },
    data,
    include: { commandLog: true },
  });
};

export const deleteGcodeCommand = async (id: string) => {
  const command = await prisma.gcodeCommand.findUnique({ where: { id } });
  if (!command) throw new Error("Gcode command not found");

  return prisma.gcodeCommand.delete({ where: { id } });
};

export const deleteManyGcodeCommandsService = async (ids: string[]) => {
  if (!ids || ids.length === 0) {
    throw new Error("No IDs provided");
  }

  const result = await prisma.gcodeCommand.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  return result;
};