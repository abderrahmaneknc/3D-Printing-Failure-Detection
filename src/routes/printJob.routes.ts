import { Router } from "express";
import * as ctrl from "../controllers/printJob.controller";

const router = Router();

router.post("/", ctrl.createJob);
router.get("/", ctrl.getAllJobs);
router.get("/:id", ctrl.getJobById);

router.post("/:id/start", ctrl.startJob);
router.patch("/:id/progress", ctrl.updateJobProgress);
router.post("/:id/pause", ctrl.pauseJob);
router.post("/:id/resume", ctrl.resumeJob);
router.post("/:id/cancel", ctrl.cancelJob);  
router.post("/:id/fail", ctrl.failJob);

router.delete("/:id", ctrl.deleteJob);

export default router;