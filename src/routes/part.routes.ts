import { Router } from "express";
import * as ctrl from "../controllers/part.controller";

const router = Router();

router.post("/", ctrl.create);
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);
/**
 * @swagger
 * tags:
 *   name: Parts
 *   description: Part/file management
 *
 * /parts:
 *   get:
 *     summary: Get all parts
 *     tags: [Parts]
 *     responses:
 *       200:
 *         description: List of parts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Part'
 *   post:
 *     summary: Create a new part
 *     tags: [Parts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [image, title, duration, nozzleDiameter, filamentUsed]
 *             properties:
 *               image: { type: string, example: "https://example.com/bracket.png" }
 *               title: { type: string, example: "Bracket v1" }
 *               duration: { type: integer, example: 120 }
 *               nozzleDiameter: { type: number, example: 0.4 }
 *               filamentUsed: { type: number, example: 15.5 }
 *     responses:
 *       201:
 *         description: Part created
 *
 * /parts/{id}:
 *   get:
 *     summary: Get part by ID
 *     tags: [Parts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Part found
 *       404:
 *         description: Part not found
 *   put:
 *     summary: Update a part
 *     tags: [Parts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Part'
 *     responses:
 *       200:
 *         description: Part updated
 *   delete:
 *     summary: Delete a part and its related jobs
 *     tags: [Parts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Part deleted
 *       404:
 *         description: Part not found
 */
export default router;