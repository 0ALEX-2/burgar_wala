import { asyncError } from "../middlewares/errorMiddleware.js";
import { User } from "../models/UserModel.js";
import { OrderModel } from "../models/OrderModel.js";

export const myProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("connect.sid");
    res.status(200).json({
      message: "Logged Out",
    });
  });
};

export const getAdminUsers = asyncError(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    success: true,
    users,
  });
});
export const getAdminStats = asyncError(async (req, res, next) => {
  const userCount = await User.countDocuments();
  const orders = await OrderModel.find();
  const preparingOrders = orders.filter(
    (elm) => elm.orderStatus === "Preparing"
  );
  const shippedOrders = orders.filter((elm) => elm.orderStatus === "Shipped");
  const deliveredOrders = orders.filter(
    (elm) => elm.orderStatus === "Delivered"
  );
  res.status(200).json({
    success: true,
    userCount,
    totalIncome,
    ordersCount: {
      total: orders.length,
      preparing: preparingOrders.length,
      shipped: shippedOrders.length,
      delivered: deliveredOrders.length,
    },
  });
});
