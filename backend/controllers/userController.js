const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
    .select("name email role isBlocked createdAt lastLoginAt")
    .sort({ createdAt: -1 });
  res.json(users);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.role === "admin") {
    res.status(403);
    throw new Error("Cannot delete admin user");
  }

  await user.remove();
  res.json({ message: "User deleted" });
});

const blockUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.isBlocked = req.body.isBlocked === true;
  await user.save();
  res.json({ message: `User ${user.isBlocked ? "blocked" : "unblocked"}` });
});

module.exports = { getUsers, deleteUser, blockUser };
