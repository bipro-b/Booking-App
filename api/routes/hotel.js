const express = require("express");
const hotelController = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.route("/")
.post(verifyAdmin,hotelController.createHotel)
.get(verifyAdmin,hotelController.getHotel)

router.route("/:id")
.get(verifyAdmin,hotelController.getHotelById)
.put(verifyAdmin,hotelController.updateHotel)
.delete(verifyAdmin,hotelController.deleteHotel)

module.exports = router;