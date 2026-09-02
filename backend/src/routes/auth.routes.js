import Router from "express";
import {register, login} from "../controllers/auth.controller.js"
import { getProfile, createProfile } from "../controllers/profile.controller.js";
    
const router = Router()

router.post("/register", register);
router.post("/login", login);

router.get("/getProfile", getProfile);
router.post("/createProfile", createProfile);
// router.patch("/editprofile");
// router.delete("/deleteprofile");

export default router;