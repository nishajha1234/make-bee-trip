const flights = require("../data/flights");

/* Fetch flight listings with optional filters */
exports.getFlights = (req, res, next) => {
  try {
    const { from, to } = req.query;

    let filtered = flights;

    if (from) {
      filtered = filtered.filter(
        (f) => f.from.toLowerCase() === from.toLowerCase()
      );
    }

    if (to) {
      filtered = filtered.filter(
        (f) => f.to.toLowerCase() === to.toLowerCase()
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