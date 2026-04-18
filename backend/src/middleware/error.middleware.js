// Centralized error handler

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;

  const response = {
    success: false,
    message: err.message || "Internal server error",
  };

  // Include stack trace only in development
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  // Log structured error
  console.error({
    message: err.message,
    statusCode,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(statusCode).json(response);
};