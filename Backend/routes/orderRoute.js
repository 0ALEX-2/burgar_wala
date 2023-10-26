import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  orderController,
  processOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, orderController);
router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
router.get("/admin/orders", isAuthenticated, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, processOrder);

export default router;
