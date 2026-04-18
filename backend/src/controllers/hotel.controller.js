const hotels = require("../data/hotels");

/* Fetch hotel listings with optional filters */
exports.getHotels = (req, res, next) => {
  try {
    const { city } = req.query;

    let filtered = hotels;

    if (city) {
      filtered = filtered.filter(
        (h) => h.city.toLowerCase() === city.toLowerCase()
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