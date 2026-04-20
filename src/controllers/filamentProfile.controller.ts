import { RequestHandler } from "express";
import * as service from "../services/filamentProfile.service";

type IdParam = { id: string };

const handleError = (res: any, error: unknown) => {
  const message = error instanceof Error ? error.message : "Internal server error";
  const status =
    message.includes("not found") ? 404 :
    message.includes("Invalid") || message.includes("must") ? 400 :
    500;
  res.status(status).json({ error: message });
};

export const createFilamentProfile: RequestHandler = async (req, res) => {
  try {
    const data = await service.createFilamentProfile(req.body);
    res.status(201).json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const getFilamentProfiles: RequestHandler = async (_req, res) => {
  try {
    const data = await service.getFilamentProfiles();
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const getFilamentProfileById: RequestHandler<IdParam> = async (req, res) => {
  try {
    const data = await service.getFilamentProfileById(req.params.id);
    if (!data) return res.status(404).json({ error: "Filament profile not found" });
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateFilamentProfile: RequestHandler<IdParam> = async (req, res) => {
  try {
    const data = await service.updateFilamentProfile(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteFilamentProfile: RequestHandler<IdParam> = async (req, res) => {
  try {
    const data = await service.deleteFilamentProfile(req.params.id);
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
};