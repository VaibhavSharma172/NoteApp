import multer from "multer";
import Router from "express";
import { createProfile, deleteProfile, editProfile, getProfile } from "../controllers/profile.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage});
const upload = multer({
  storage: multer.memoryStorage()
});

router.post("/create", authMiddleware, upload.single("image"), createProfile);
router.get("/get",authMiddleware, getProfile);
router.put("/edit/:id", authMiddleware, upload.single("image"), editProfile);
router.delete("/delete/:id", authMiddleware, deleteProfile)

export default router;