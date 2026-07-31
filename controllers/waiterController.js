const Waiter = require("../models/Waiter");

// Create Waiter
const createWaiter = async (req, res) => {
  try {
    const waiter = await Waiter.create(req.body);

    res.status(201).json({
      message: "Waiter created successfully",
      waiter,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Waiters
const getWaiters = async (req, res) => {
  try {
    const waiters = await Waiter.find();

    res.status(200).json(waiters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Waiter
const getWaiterById = async (req, res) => {
  try {
    const waiter = await Waiter.findById(req.params.id);

    if (!waiter) {
      return res.status(404).json({
        message: "Waiter not found",
      });
    }

    res.status(200).json(waiter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Waiter
const updateWaiter = async (req, res) => {
  try {
    const waiter = await Waiter.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!waiter) {
      return res.status(404).json({
        message: "Waiter not found",
      });
    }

    res.status(200).json({
      message: "Waiter updated successfully",
      waiter,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Waiter
const deleteWaiter = async (req, res) => {
  try {
    const waiter = await Waiter.findByIdAndDelete(req.params.id);

    if (!waiter) {
      return res.status(404).json({
        message: "Waiter not found",
      });
    }

    res.status(200).json({
      message: "Waiter deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWaiter,
  getWaiters,
  getWaiterById,
  updateWaiter,
  deleteWaiter,
};