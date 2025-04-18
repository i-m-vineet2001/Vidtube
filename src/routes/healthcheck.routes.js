import { Router } from "express";
import { healthcheck } from '../controllers/healthcheck.controller.js';
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()
// /api/v1/healthcheck/test
    // router.route("/").get(upload.single('avatar'), healthcheck)
router.route("/").get(healthcheck)
    
export default router