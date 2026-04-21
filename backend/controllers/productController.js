const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");
const { uploadImage } = require("../utils/cloudinary");

const createProduct = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    description,
    price,
    category,
    tags,
    images,
    stock,
    status,
  } = req.body;

  if (!title || !slug || !description || !price || !category) {
    res.status(400);
    throw new Error("Missing required product fields");
  }

  const productExists = await Product.findOne({ slug });
  if (productExists) {
    res.status(409);
    throw new Error("Product slug already exists");
  }

  const product = await Product.create({
    title,
    slug,
    description,
    price,
    category,
    tags: tags || [],
    images: images || [],
    stock: stock || 0,
    status: status || "active",
  });

  res.status(201).json(product);
});

const uploadProductImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("Image file is required");
  }

  const result = await uploadImage(req.file.path);
  res.json({ url: result.secure_url, publicId: result.public_id });
});

const getProducts = asyncHandler(async (req, res) => {
  const { category, tag, search } = req.query;
  const filter = { status: "active" };

  if (category) filter.category = category;
  if (tag) filter.tags = tag;
  if (search) {
    filter.$or = [
      { title: new RegExp(search, "i") },
      { description: new RegExp(search, "i") },
    ];
  }

  const products = await Product.find(filter).sort({ createdAt: -1 });
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const updates = {
    title: req.body.title || product.title,
    slug: req.body.slug || product.slug,
    description: req.body.description || product.description,
    price: req.body.price ?? product.price,
    category: req.body.category || product.category,
    tags: req.body.tags || product.tags,
    images: req.body.images || product.images,
    stock: req.body.stock ?? product.stock,
    status: req.body.status || product.status,
  };

  Object.assign(product, updates);
  const updated = await product.save();
  res.json(updated);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  await product.remove();
  res.json({ message: "Product removed" });
});

module.exports = {
  createProduct,
  uploadProductImage,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
