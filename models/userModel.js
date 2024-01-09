const mongoose = require('mongoose')

//schema design
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },email:{
        type:String,
        required:[true,'Email is required and should be unique'],
        unique:true,
    },password:{
        type:String,
        required:[true,"Password is required"],
    },

},{timestamps:true})

const userModel = mongoose.model('Users',userSchema)

module.exports=userModel