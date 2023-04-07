const User = require("../models/User")

exports.register = async(req,res,next)=>{
    try {
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
        await newUser.save()
        res.status(200).json({
            status:"Success",
            message:"User has been created",
            newUser
        })
        
    } catch (error) {
        next(error)
        
    }
}