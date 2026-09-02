import Router from "express";
import { createProfile } from "../controllers/profile.controller.js";

const router = Router();

router.post("/create", upload.single("image"), createProfile);

export default router;