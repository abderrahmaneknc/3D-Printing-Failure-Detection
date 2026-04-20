import { Router } from "express";
import * as ctrl from "../controllers/maintenanceLog.controller";

const router = Router({ mergeParams: true });

router.post("/", ctrl.createMaintenanceLog);
router.get("/", ctrl.getMaintenanceLogs);
router.get("/:id", ctrl.getMaintenanceLogById);
router.put("/:id", ctrl.updateMaintenanceLog);
router.delete("/:id", ctrl.deleteMaintenanceLog);

export default router;