
const express = require("express");// express import 
const app = express();// mongosee import
const mongoose = require("mongoose")//For env field
const dotenv = require("dotenv")//For env field
dotenv.config()
var cors = require("cors");

//Routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")




mongoose
    .connect(process.env.MONGO_URL)
    //Promise so if this is success console.log
    .then(() => console.log("DBConnection is successfull!"))
    //is failed console.log error
    .catch((err) =>{ 
        console.log(err)}
    )

//CORS before app.use(express.json())
app.use(cors())    
//For app can use json 
app.use(express.json())

//when we go to endpoint this will work
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)



//listen backend server check
app.listen(process.env.PORT || 5000, () =>{
    console.log("Backend server is running")
})

