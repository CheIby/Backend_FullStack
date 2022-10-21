const Register = require('../models/registerSchema')

exports.add=async(req,res)=>{
    const newRegister = new Register({
        title: req.body.title,
        name: req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        tel:req.body.tel
    })

    try{
        const saveRegister = await newRegister.save()
        res.status(201).json(saveRegister)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getAllRegister=async(req,res)=>{
    await Register.find({}).exec((err,allUser)=>{
        res.json(allUser)
    })
    
}

exports.getSameEvents=async(req,res)=>{
    const {title} = req.params
    await Register.find({title}).exec((err,users)=>{
        res.json({
            count:users.length
        })
    })
}