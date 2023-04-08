const Room = require("../models/Room");
const Hotel = require("../models/Hotel");

exports.createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(saveRoom);
  } catch (error) {
    next(error);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newRoom = await Room.findByIdAndUpdate(id, { $set: req.body },{new:true});
    res.status(200).json({
      status: "Success",
      message: "Successfully update data.",
      newRoom,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.deleteRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Room.findByIdAndDelete(id);
    res.status(200).json({
      status: "Success",
      message: "Successfully deleted data.",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};
exports.getRoom = async (req, res, next) => {
  try {
    const room = await Room.find();
    res.status(200).json({
      status: "Success",
      message: "Successfully fetched data.",
      room,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};
exports.getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const hotel = await Room.findById(id);
    res.status(200).json({
      status: "Success",
      message: "Successfully fetched data.",
      hotel,
    });
  } catch (error) {
    next(error);
  }
};
