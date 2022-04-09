import { Router } from "express";
import handleGetImage from "../controllers/getImage.js";
const router = Router();

router.post("/", handleGetImage);

export { router as getImage };
