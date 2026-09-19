import Router from "express";
import { addNote, deleteNote, getNotes, patchNote, getNoteById } from "../controllers/notes.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/getNotes", authMiddleware, getNotes);
router.get("/notes/:id", authMiddleware, getNoteById);
router.post("/addNote", authMiddleware, addNote);
router.patch("/notes/:id", authMiddleware, patchNote);
router.delete("/notes/:id", authMiddleware, deleteNote);


export default router; 