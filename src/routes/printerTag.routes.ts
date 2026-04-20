import { Router } from "express";
import * as ctrl from "../controllers/printerTag.controller";

const router = Router({ mergeParams: true });

router.get("/", ctrl.getTagsForPrinter);
router.post("/", ctrl.addTagToPrinter);
router.delete("/:tagId", ctrl.removeTagFromPrinter);

export default router;