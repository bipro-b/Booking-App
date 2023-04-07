const express = require("express");
const hotelController = require("../controllers/hotel")
const router = express.Router();

router.route("/")
.post(hotelController.createHotel)
.get(hotelController.getHotel)

router.route("/:id")
.get(hotelController.getHotelById)
.put(hotelController.updateHotel)
.delete(hotelController.deleteHotel)

module.exports = router;