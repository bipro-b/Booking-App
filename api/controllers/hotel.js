const Hotel = require("../models/Hotel")
exports.createHotel = async(req,res,next)=>{
    try {
        const newHotel = await Hotel.create(req.body);
       res.status(200).json({
        status:"Success",
        message:"Successfully created data.",
        newHotel
         })
        
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

exports.updateHotel = async(req,res,next)=>{
    try {
        const {id}= req.params;
        const newHotel = await Hotel.findByIdAndUpdate(id,{$set:req.body});
       res.status(200).json({
        status:"Success",
        message:"Successfully update data.",
        newHotel
         })
        
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}

exports.deleteHotel = async(req,res,next)=>{
    try {
        const {id}= req.params;
        await Hotel.findByIdAndDelete(id);
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
exports.getHotel = async(req,res,next)=>{
    try {

     const hotel  = await Hotel.find();
       res.status(200).json({
        status:"Success",
        message:"Successfully fetched data.",
         hotel
         })
        
    } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:error.message
        })
    }
}
exports.getHotelById= async(req,res,next)=>{
    try {

        const{id}= req.params;

        const hotel  = await Hotel.findById(id);
          res.status(200).json({
           status:"Success",
           message:"Successfully fetched data.",
            hotel
            })
           
       } catch (error) {
          next(error);
       }

}