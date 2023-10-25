import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  getMyOrders,
  getOrderDetails,
  orderController,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, orderController);
router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);

export default router;
