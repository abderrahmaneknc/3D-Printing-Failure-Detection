import { Router } from "express";
import * as controller from "../controllers/printer.controller";

const router = Router();

router.post("/", controller.createPrinter);
router.get("/", controller.getPrinters);
router.get("/:id", controller.getPrinterById);
router.put("/:id", controller.updatePrinter);
router.delete("/:id", controller.deletePrinter);

export default router;