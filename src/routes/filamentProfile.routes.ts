import { Router } from "express";
import * as ctrl from "../controllers/filamentProfile.controller";
import inventoryRouter from "./inventory.routes";

const router = Router();

router.post("/", ctrl.createFilamentProfile);
router.get("/", ctrl.getFilamentProfiles);
router.use("/:profileId/inventory", inventoryRouter); 

router.get("/:id", ctrl.getFilamentProfileById);
router.put("/:id", ctrl.updateFilamentProfile);
router.delete("/:id", ctrl.deleteFilamentProfile);

export default router;