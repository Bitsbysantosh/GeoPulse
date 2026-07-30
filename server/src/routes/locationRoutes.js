const express = require("express");
const router = express.Router();

const {
    locationController,
    getLocations,
} = require("../controllers/locationController");

router.post("/location", locationController);
router.get("/location", getLocations);

module.exports = router;