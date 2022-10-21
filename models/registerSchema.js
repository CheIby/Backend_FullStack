const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    tel:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model('Register',registerSchema)