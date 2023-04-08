const express = require("express");
const userController = require("../controllers/user");
const { verifyUser, verifyAdmin, verifyToken } = require("../utils/verifyToken");
const router = express.Router();

// router.route("/")
// .get(verifyAdmin,userController.getUser)

router.get("/",verifyAdmin,userController.getUser)

router.route("/:id")
.get(verifyUser,userController.getUserById)
.put(verifyUser,userController.updateUser)
.delete(verifyUser,userController.deleteUser)

module.exports = router;