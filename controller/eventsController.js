const slugify = require('slugify')
const Events = require('../models/eventsSchema')
const {v4:uuid4} = require('uuid')

exports.create=async(req,res)=>{
    const newEvents = new Events({
        title : req.body.title,
        img : req.body.img,
        content: req.body.content,
        date:req.body.date,
        lastDate:req.body.lastDate,
        teacher:req.body.teacher,
        learnLocation:req.body.learnLocation,
        price:req.body.price,
        studentNum:req.body.studentNum,
        slug:slugify(req.body.title)
    })
    if (!newEvents.slug){
        newEvents.slug = uuid4()
    }

    try{
        const saveEvent = await newEvents.save()
        res.status(201).json(saveEvent)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getEvents=async(req,res)=>{
    await Events.find({}).exec((err,events)=>{
        res.json(events)
    })
}

exports.getOneEvent=async (req,res)=>{
    const {slug}  = req.params
    // console.log({slug})
    await Events.findOne({slug}).exec((err,event)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(event)
        }
    })
}