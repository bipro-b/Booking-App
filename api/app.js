const express = require("express")
const app = express();
const cors= require("cors");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

// middle wires
app.use(express.json());
app.use(cors());
app.use(cookieParser())

const hotelRoute = require("./routes/hotel");
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const roomRoute = require("./routes/rooms")

app.use("/api/v1/hotel",hotelRoute);
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/users",usersRoute);
app.use("/api/v1/rooms",roomRoute)
// error handling

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message:errorMessage,
        stack:err.stack,
})

});

module.exports = app;