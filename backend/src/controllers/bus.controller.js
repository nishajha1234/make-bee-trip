const buses = require("../data/buses");

/* Fetch bus listings with optional filters */
exports.getBuses = (req, res, next) => {
  try {
    const { from, to } = req.query;

    let filtered = buses;

    if (from) {
      filtered = filtered.filter(
        (b) => b.from.toLowerCase() === from.toLowerCase()
      );
    }

    if (to) {
      filtered = filtered.filter(
        (b) => b.to.toLowerCase() === to.toLowerCase()
      );
    }

    // Always return success response (even if empty)
    res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (error) {
    next(error);
  }
};