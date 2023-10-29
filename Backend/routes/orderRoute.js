import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  getAdminOrders,
  getMyOrders,
  getOrderDetails,
  onlineOrderController,
  orderController,
  paymentVerification,
  processOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/createorder", isAuthenticated, orderController);
router.post("/createorderonline", isAuthenticated, onlineOrderController);
router.post("/paymentverification", isAuthenticated, paymentVerification);
router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

export default router;
