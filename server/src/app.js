const express = require("express");
const app = express();
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const locationRoutes = require("./routes/locationRoutes");
app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", locationRoutes);

app.get("/", (req, res) => {
    res.send("GeoPulse Backend running");
});

module.exports = app;