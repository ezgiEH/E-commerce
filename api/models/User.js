const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {type:String, require:true , unique:true},
        email: {type:String, require:true , unique:true},
        password: {type:String, require:true},
        isAdmin:{
            type: Boolean,
            default: false,
        },
        //createdAt: Date.now()
    },
    {
        //created dor updates date
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema) 