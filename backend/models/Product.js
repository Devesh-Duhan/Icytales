const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    images: [{ type: String }],
    stock: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["active", "draft", "archived"],
      default: "active",
    },
    featured: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

productSchema.index({ slug: 1 });
productSchema.index({ category: 1 });

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);
