
const express = require("express");// express import 
const app = express();// mongosee import
const mongoose = require("mongoose")//For env field
const dotenv = require("dotenv")//For env field
dotenv.config()

//Routes
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")



mongoose.connect(process.env.MONGO_URL)
    //Promise so if this is success console.log
    .then(() => console.log("DBConnection is successfull!"))
    //is failed console.log error
    .catch((err) =>{ 
        console.log(err)}
    )
//For app can use json 
app.use(express.json())

//when we go to endpoint this will work
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

//listen backend server check
app.listen(process.env.PORT || 5000, () =>{
    console.log("Backend server is running")
})