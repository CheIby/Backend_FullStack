const mongoose = require('mongoose')

const eventsSchema = mongoose.Schema({
    title:{
        type: String,
        require : true,
        unique: true
    },
    img:{
        type:String,
        require:true,
        unique:true
    },
    content:{
        type:{},
        require:true
    },
    date:{
        type:String,
        require:true
    },
    lastDate:{
        type:String,
        require:true
    },
    teacher:{
        type:String,
        require:true
    },
    learnLocation:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    studentNum:{
        type:Number,
        require:true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model('Events',eventsSchema)