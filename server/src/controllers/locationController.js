const Location = require('../models/Location');
const locationController = async(req, res) => {
    const { latitude, longitude } = req.body;

    console.log(latitude);
    console.log(longitude);

    const location = new Location({
        latitude,
        longitude,
    });

    await location.save();

    console.log("Location saved successfully");
    
    res.json({
        message: "location received successfully"
    });
};

module.exports = locationController;
