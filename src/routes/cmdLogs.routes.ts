import { Router } from "express";
import * as ctrl from "../controllers/cmdLogs.controller";

const router = Router({ mergeParams: true });

router.post("/", ctrl.createCommandLog);
router.get("/", ctrl.getCommandLogs);
router.get("/:id", ctrl.getCommandLogById);
router.put("/:id", ctrl.updateCommandLog);
router.delete("/:id", ctrl.deleteCommandLog);

export default router;