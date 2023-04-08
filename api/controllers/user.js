const User = require("../models/User")

exports.updateUser = async(req,res,next)=>{
    try {
        const {id}= req.params;
        const newUser = await User.findByIdAndUpdate(id,{$set:req.body});
       res.status(200).json({
        status:"Success",
        message:"Successfully update data.",
        newUser
         })
        
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

exports.deleteUser = async(req,res,next)=>{
    try {
        const {id}= req.params;
        await User.findByIdAndDelete(id);
       res.status(200).json({
        status:"Success",
        message:"Successfully deleted data.",
  
         })
        
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}
exports.getUser = async(req,res,next)=>{
    try {

     const user  = await User.find();
       res.status(200).json({
        status:"Success",
        message:"Successfully fetched data.",
         user
         })
        
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}
exports.getUserById= async(req,res,next)=>{
    try {

        const{id}= req.params;

        const user  = await User.findById(id);
          res.status(200).json({
           status:"Success",
           message:"Successfully fetched data.",
            user
            })
           
       } catch (error) {
          next(error);
       }

}