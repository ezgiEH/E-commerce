const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js") //import cryptojs for password
const jwt = require("jsonwebtoken") //for verify


//REGISTER
// we did not write other lines
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASS_SECRET
            ).toString(),
    })

    //send db but we can do this trcath and async function
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser) //200 successfull, 201 successfull edit
    } catch (error) {
        res.status(500).json(error)
    }

})

//LOGIN

router.post("/login", async (req,res) =>{
    try {
        const user = await User.findOne({username: req.body.username}) //user control
        !user && res.status(401).json("Wrong credentials!") // warning if no user

        //decrypted password control 
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SECRET
            );
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        
        Originalpassword !== req.body.password && res.status(401).json("Wrong credentials!") //wrong password warning
            
        //JWT USE
        const accessToken = jwt.sign({
                id: user._id, 
                isAdmin: user.isAdmin,
            }, process.env.JWT_SECRET,
            {expiresIn: "3d"} //3days for access token
        )   

        const { password, ...others } = user._doc //to not show the password in the database 

        res.status(200).json({...others, accessToken}) //send res

    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router