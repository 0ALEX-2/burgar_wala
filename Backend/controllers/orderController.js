import { asyncError } from "../middlewares/errorMiddleware.js";
import { OrderModel } from "../models/OrderModel.js";
import { PaymentModel } from "../models/PaymentModel.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { instance } from "../server.js";
import crypto from "crypto";

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

export const onlineOrderController = asyncError(async (req, res, next) => {
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

  let options = {
    amount: Number(totalAmount) * 100,
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  await OrderModel.create();

  res.status(201).json({
    success: true,
    order,
    orderOptions,
  });
});

export const paymentVerification = asyncError(async (req, res, next) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderOptions,
  } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    const payment = await PaymentModel.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    await OrderModel.create({
      ...orderOptions,
      paidAt: new Date(Date.now()),
      paymentInfo: payment._id,
    });

    res.status(201).json({
      success: true,
      message: `Order placed successfully. Payment ID: ${payment._id}`,
    });
  } else {
    return next(new ErrorHandler("Payment Failed!", 400));
  }
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

export const getAdminOrders = asyncError(async (req, res, next) => {
  const orders = await OrderModel.find({}).populate("user", "name");
  res.status(200).json({
    success: true,
    orders,
  });
});

export const processOrder = asyncError(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id);
  if (!order) return next(new ErrorHandler("Invalid order Id", 404));
  if (order.orderStatus === "Preparing") order.orderStatus === "Shipped";
  else if (order.orderStatus === "Shipped") {
    order.orderStatus === "Delivered";
    order.deliveredAt === new Date(Date.now());
  } else if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("Food already delivered", 400));
    await order.save();
  }

  res.status(200).json({
    success: true,
    message: "Status updated successfully",
  });
});
