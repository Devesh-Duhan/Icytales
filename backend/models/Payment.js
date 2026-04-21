const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: { type: Number, required: true },
    method: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transactionId: { type: String },
    paidAt: { type: Date },
    rawResponse: { type: Object },
  },
  {
    timestamps: true,
  },
);

paymentSchema.index({ order: 1 });

module.exports =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
