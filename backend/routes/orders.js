const express = require("express");
const {
  createOrder,
  getOrders,
  getOrdersByUser,
  updateOrderStatus,
} = require("../controllers/orderController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.get("/:userId", protect, getOrdersByUser);
router.put("/:id/status", protect, admin, updateOrderStatus);

module.exports = router;
