const trains = require("../data/trains");

/* Fetch train listings with optional filters */
exports.getTrains = (req, res, next) => {
  try {
    const { from, to } = req.query;

    let filtered = trains;

    if (from) {
      filtered = filtered.filter(
        (t) => t.from.toLowerCase() === from.toLowerCase()
      );
    }

    if (to) {
      filtered = filtered.filter(
        (t) => t.to.toLowerCase() === to.toLowerCase()
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