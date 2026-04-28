import { prisma } from "../../lib/prisma";

interface CreatePrintJobInput {
  printerId: string;
  fileId: string;
  [key: string]: unknown;
}

export const createPrintJob = async (data: CreatePrintJobInput) => {
  const printer = await prisma.printer.findUnique({
    where: { id: data.printerId },
  });
  if (!printer) throw new Error("Printer not found");

  const part = await prisma.part.findUnique({
    where: { id: data.fileId },
  });
  if (!part) throw new Error("Part not found");

  return prisma.printJob.create({
    data: {
      ...data,
      status: "QUEUED",
      progress: 0,
    },
  });
};

export const getPrintJobs = () => {
  return prisma.printJob.findMany({
    include: { printer: true, part: true, profiles: true },
  });
};

export const getPrintJobById = (id: string) => {
  return prisma.printJob.findUnique({
    where: { id },
    include: { printer: true, part: true, profiles: true },
  });
};

export const startPrintJob = async (id: string) => {
  const job = await prisma.printJob.findUnique({ where: { id } });
  if (!job) throw new Error("Job not found");
  if (job.status !== "QUEUED") throw new Error("Only queued jobs can be started");

  await prisma.printer.update({
    where: { id: job.printerId },
    data: { status: "PRINTING" },
  });

  return prisma.printJob.update({
    where: { id },
    data: { status: "PRINTING", startedAt: new Date() },
  });
};

export const updateProgress = async (id: string, progress: number) => {
  if (progress < 0 || progress > 100) {
    throw new Error("Progress must be between 0 and 100");
  }

  const job = await prisma.printJob.findUnique({ where: { id } });
  if (!job) throw new Error("Job not found");
  if (job.status !== "PRINTING") throw new Error("Job is not currently printing");

  const isDone = progress === 100;

  if (isDone) {
    await prisma.printer.update({
      where: { id: job.printerId },
      data: { status: "IDLE" },
    });
  }

  return prisma.printJob.update({
    where: { id },
    data: {
      progress,
      status: isDone ? "DONE" : "PRINTING",
      finishedAt: isDone ? new Date() : undefined,
    },
  });
};

export const pauseJob = async (id: string) => {
  const job = await prisma.printJob.findUnique({ where: { id } });
  if (!job) throw new Error("Job not found");
  if (job.status !== "PRINTING") throw new Error("Only printing jobs can be paused");

  await prisma.printer.update({
    where: { id: job.printerId },
    data: { status: "PAUSED" },
  });

  return prisma.printJob.update({
    where: { id },
    data: { status: "PAUSED" },
  });
};

export const resumeJob = async (id: string) => {
  const job = await prisma.printJob.findUnique({ where: { id } });
  if (!job) throw new Error("Job not found");
  if (job.status !== "PAUSED") throw new Error("Only paused jobs can be resumed");

  await prisma.printer.update({
    where: { id: job.printerId },
    data: { status: "PRINTING" },
  });

  return prisma.printJob.update({
    where: { id },
    data: { status: "PRINTING" },
  });
};

export const cancelJob = async (id: string) => {
  const job = await prisma.printJob.findUnique({ where: { id } });
  if (!job) throw new Error("Job not found");

  const cancellableStatuses = ["QUEUED", "PRINTING", "PAUSED"];
  if (!cancellableStatuses.includes(job.status)) {
    throw new Error("Job cannot be cancelled in its current state");
  }

  await prisma.printer.update({
    where: { id: job.printerId },
    data: { status: "IDLE" },
  });

  return prisma.printJob.update({
    where: { id },
    data: { status: "CANCELLED", finishedAt: new Date() },
  });
};  

export const failJob = async (id: string) => {
  const job = await prisma.printJob.findUnique({ where: { id } });
  if (!job) throw new Error("Job not found");

  await prisma.printer.update({
    where: { id: job.printerId },
    data: { status: "IDLE" },
  });

  return prisma.printJob.update({
    where: { id },
    data: { status: "FAILED", finishedAt: new Date() },
  });
};

export const deletePrintJob = (id: string) => {
  return prisma.printJob.delete({ where: { id } });
};

export const deleteManyPrintJobsService = async (ids: string[]) => {
  if (!ids || ids.length === 0) {
    throw new Error("No IDs provided");
  }

  const result = await prisma.printJob.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  return result;
};