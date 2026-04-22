import { Router } from "express";
import * as ctrl from "../controllers/tag.controller";

const router = Router();

router.post("/", ctrl.createTag);
router.get("/", ctrl.getTags);
router.get("/:id", ctrl.getTagById);
router.put("/:id", ctrl.updateTag);
router.delete("/:id", ctrl.deleteTag);
/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: Tag management
 *
 * /tags:
 *   get:
 *     summary: Get all tags
 *     tags: [Tags]
 *     responses:
 *       200:
 *         description: List of tags
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tag'
 *   post:
 *     summary: Create a new tag
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name: { type: string, example: "Fast" }
 *               color: { type: string, example: "#FF5733" }
 *     responses:
 *       201:
 *         description: Tag created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *
 * /tags/{id}:
 *   get:
 *     summary: Get tag by ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tag found
 *       404:
 *         description: Tag not found
 *   put:
 *     summary: Update a tag
 *     tags: [Tags]
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
 *             type: object
 *             properties:
 *               name: { type: string }
 *               color: { type: string }
 *     responses:
 *       200:
 *         description: Tag updated
 *       404:
 *         description: Tag not found
 *   delete:
 *     summary: Delete a tag
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tag deleted
 *       404:
 *         description: Tag not found
 */
export default router;