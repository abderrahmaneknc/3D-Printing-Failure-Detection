import { Router } from "express";
import * as ctrl from "../controllers/filamentProfile.controller";

const router = Router();

router.post("/", ctrl.createFilamentProfile);
router.get("/", ctrl.getFilamentProfiles);
router.get("/:id", ctrl.getFilamentProfileById);
router.put("/:id", ctrl.updateFilamentProfile);
router.delete("/:id", ctrl.deleteFilamentProfile);

export default router;