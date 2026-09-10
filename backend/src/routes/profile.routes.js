import multer from "multer";
import Router from "express";
import { createProfile, deleteProfile, editProfile, getProfile } from "../controllers/profile.controller.js";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

router.post("/create", upload.single("image"), createProfile);
router.get("/get", getProfile);
router.put("/edit/:id", upload.single("image"), editProfile);
router.delete("/delete/:id", deleteProfile)

export default router;