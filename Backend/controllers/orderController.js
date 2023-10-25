import { asyncError } from "../middlewares/errorMiddleware.js";
import { OrderModel } from "../models/OrderModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const orderController = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  const user = req.user._id;

  const orderOptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };

  await OrderModel.create(orderOptions);

  res.status(201).json({
    success: true,
    message: "Order placed successfully via COD",
  });
});

export const getMyOrders = asyncError(async (req, res, next) => {
  const orders = await OrderModel.find({
    user: req.user._id,
  }).populate("user", "name");
  res.status(200).json({
    success: true,
    orders,
  });
});

export const getOrderDetails = asyncError(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id).populate(
    "user",
    "name"
  );
  if (!order) return next(new ErrorHandler("Invalid order Id", 404));

  res.status(200).json({
    success: true,
    order,
  });
});
