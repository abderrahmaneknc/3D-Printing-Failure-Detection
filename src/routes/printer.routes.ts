import { Router } from "express";
import * as controller from "../controllers/printer.controller";
import printerTagRouter from "./printerTag.routes";
import commandLogRouter from "./cmdLogs.routes";
import maintenanceLogRouter from "./maintenanceLog.routes";

const router = Router();

router.post("/", controller.createPrinter);
router.get("/", controller.getPrinters);
router.use("/:printerId/tags", printerTagRouter);
router.use("/:printerId/command-logs", commandLogRouter); 
router.use("/:printerId/maintenance-logs", maintenanceLogRouter); // add this

router.get("/:id", controller.getPrinterById);
router.put("/:id", controller.updatePrinter);
router.delete("/:id", controller.deletePrinter);


export default router;