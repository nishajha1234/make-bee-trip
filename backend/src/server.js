const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const flightRoutes = require("./routes/flight.routes");
const busRoutes = require("./routes/bus.routes");
const trainRoutes = require("./routes/train.routes");
const hotelRoutes = require("./routes/hotel.routes");

// Middleware
const logger = require("./middleware/logger.middleware");
const errorHandler = require("./middleware/error.middleware");

const app = express();

/* Core middleware */
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(logger);

/* API routes */
app.use("/api/flights", flightRoutes);
app.use("/api/buses", busRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/hotels", hotelRoutes);

/* Health check */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

/* 404 handler */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* Global error handler */
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});