import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { orderController } from "../controllers/orderController.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, orderController);

export default router;
