const express = require("express");
const roomController = require("../controllers/room");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.route("/")
.get(roomController.getRoom)

router.route("/:hotelId").post(verifyAdmin,roomController.createRoom)
router.route("/:id/:hotelId").delete(verifyAdmin,roomController.deleteRoom)

router.route("/:id")
.get(verifyAdmin,roomController.getRoomById)
.put(verifyAdmin,roomController.updateRoom)

module.exports = router;