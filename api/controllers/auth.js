const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error");
const jwt = require("jsonwebtoken")

exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({
      status: "Success",
      message: "User has been created",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong Password"));


   const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT);
    const { password, isAdmin, ...others } = user._doc;
    res.cookie("access_token",token,{
      httpOnly:true,
    })
    res.status(200).json({
      status: "Success",
      message: "Login successfully.",
      ...others,
    });
  } catch (error) {
    next(error);
  }
};
