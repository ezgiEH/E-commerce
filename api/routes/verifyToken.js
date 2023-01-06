const jwt = require("jsonwebtoken")


//Token verify
const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (error, user) =>{
            if(error) res.status(403).json("Token is not valid!")
            req.user = user
            next() //to continue
        })

    }else{
        return res.status(401).json("You are not authenticated!")
    }
}


//Update control for users and admin
const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res,() =>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}

//Admin verify
const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res,() =>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }