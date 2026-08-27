import Router from "express";
import { addNote, deleteNote, getNotes, patchNote, getNoteById } from "../controllers/controllers.js";

const router = Router();

router.get("/getNotes", getNotes);
router.get("/notes/:id", getNoteById);
router.post("/addNote", addNote);
router.patch("/notes/:uid", patchNote);
router.delete("/notes/:uid", deleteNote);


export default router;  