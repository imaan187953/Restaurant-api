const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createWaiter,
  getWaiters,
  getWaiterById,
  updateWaiter,
  deleteWaiter,
} = require("../controllers/waiterController");

router.post("/", protect, createWaiter);
router.get("/", protect, getWaiters);
router.get("/:id", protect, getWaiterById);
router.put("/:id", protect, updateWaiter);
router.delete("/:id", protect, deleteWaiter);

module.exports = router;