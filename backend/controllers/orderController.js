const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");
const Payment = require("../models/Payment");

const createOrder = asyncHandler(async (req, res) => {
  const {
    items,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (!items || items.length === 0) {
    res.status(400);
    throw new Error("Order items are required");
  }

  const order = await Order.create({
    user: req.user._id,
    items,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
    paymentStatus: paymentMethod === "cod" ? "pending" : "paid",
    orderStatus: "pending",
  });

  await Payment.create({
    order: order._id,
    amount: totalPrice,
    method: paymentMethod,
    status: paymentMethod === "cod" ? "pending" : "completed",
    paidAt: paymentMethod === "cod" ? null : new Date(),
  });

  res.status(201).json(order);
});

const getOrders = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.user.role !== "admin") {
    filter.user = req.user._id;
  }

  const orders = await Order.find(filter)
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(orders);
});

const getOrdersByUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  if (req.user.role !== "admin" && req.user._id.toString() !== userId) {
    res.status(403);
    throw new Error("Access denied");
  }
  const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
  res.json(orders);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.orderStatus = req.body.orderStatus || order.orderStatus;
  order.paymentStatus = req.body.paymentStatus || order.paymentStatus;
  const updated = await order.save();
  res.json(updated);
});

module.exports = { createOrder, getOrders, getOrdersByUser, updateOrderStatus };
