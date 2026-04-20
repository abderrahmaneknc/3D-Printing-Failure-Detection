import { Router } from "express";
import * as ctrl from "../controllers/gCodeCmd.controller";

const router = Router();

router.post("/", ctrl.createGcodeCommand);
router.get("/", ctrl.getGcodeCommands);
router.get("/:id", ctrl.getGcodeCommandById);
router.put("/:id", ctrl.updateGcodeCommand);
router.delete("/:id", ctrl.deleteGcodeCommand);

export default router;