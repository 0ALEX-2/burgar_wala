import { asyncError } from "../middlewares/errorMiddleware";
import { OrderModel } from "../models/OrderModel.js";

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
