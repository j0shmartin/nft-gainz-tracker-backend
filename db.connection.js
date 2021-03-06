require("dotenv").config();
const { PORT=4000 , MONGODB_URI } = process.env;
const mongoose = require("mongoose");

mongoose.connect(MONGODB_URI);

mongoose.connection
    .on("open", ()=> console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconected"))
    .on("error", (error) => console.log(error));