import { Router } from "express";
import * as ctrl from "../controllers/inventory.controller";

const router = Router({ mergeParams: true });

router.post("/", ctrl.createInventory);
router.get("/", ctrl.getInventories);
router.get("/:id", ctrl.getInventoryById);
router.put("/:id", ctrl.updateInventory);
router.delete("/:id", ctrl.deleteInventory);

export default router;