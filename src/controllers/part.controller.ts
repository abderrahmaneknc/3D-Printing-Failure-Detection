import { RequestHandler } from "express";
import * as service from "../services/part.service";

type IdParam = { id: string };

const handleError = (res: any, error: unknown) => {
  const message = error instanceof Error ? error.message : "Internal server error";
  const status =
    message.includes("not found") ? 404 :
    message.includes("Invalid") || message.includes("must") ? 400 :
    500;
  res.status(status).json({ error: message });
};

export const create: RequestHandler = async (req, res) => {
  try {
    const data = await service.createPart(req.body);
    res.status(201).json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const getAll: RequestHandler = async (_req, res) => {
  try {
    const data = await service.getParts();
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const getById: RequestHandler<IdParam> = async (req, res) => {
  try {
    const data = await service.getPartById(req.params.id);
    if (!data) return res.status(404).json({ error: "Part not found" });
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const update: RequestHandler<IdParam> = async (req, res) => {
  try {
    const data = await service.updatePart(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const remove: RequestHandler<IdParam> = async (req, res) => {
  try {
    const data = await service.deletePart(req.params.id);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};