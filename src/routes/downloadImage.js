import { Router } from "express";
import handleDowloadImage from "../controllers/downloadImage.js";
const router = Router();

router.get("/", handleDowloadImage);

export { router as downloadImage };
