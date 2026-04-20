import { Router } from "express";
import * as ctrl from "../controllers/tag.controller";

const router = Router();

router.post("/", ctrl.createTag);
router.get("/", ctrl.getTags);
router.get("/:id", ctrl.getTagById);
router.put("/:id", ctrl.updateTag);
router.delete("/:id", ctrl.deleteTag);

export default router;