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
/**
 * @swagger
 * tags:
 *   name: Filament Profiles
 *   description: Filament profile management
 *
 * /filament-profiles:
 *   get:
 *     summary: Get all filament profiles
 *     tags: [Filament Profiles]
 *     responses:
 *       200:
 *         description: List of filament profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FilamentProfile'
 *   post:
 *     summary: Create a filament profile
 *     tags: [Filament Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [material, name, color, roleSize]
 *             properties:
 *               material: { type: string, enum: [PLA, PLA_PLUS, ABS, PETG, TPU, ASA] }
 *               name: { type: string, example: "Matte Black PLA" }
 *               color: { type: string, example: "#1A1A1A" }
 *               roleSize: { type: number, example: 1.0 }
 *     responses:
 *       201:
 *         description: Filament profile created
 *
 * /filament-profiles/{id}:
 *   get:
 *     summary: Get filament profile by ID
 *     tags: [Filament Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filament profile found
 *       404:
 *         description: Filament profile not found
 *   put:
 *     summary: Update a filament profile
 *     tags: [Filament Profiles]
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
 *             $ref: '#/components/schemas/FilamentProfile'
 *     responses:
 *       200:
 *         description: Filament profile updated
 *   delete:
 *     summary: Delete a filament profile and its inventory
 *     tags: [Filament Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filament profile deleted
 *       404:
 *         description: Filament profile not found
 *
 * /filament-profiles/{profileId}/inventory:
 *   get:
 *     summary: Get inventory by filament profile
 *     tags: [Filament Profiles]
 *     parameters:
 *       - in: path
 *         name: profileId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of inventory entries
 */
export default router;