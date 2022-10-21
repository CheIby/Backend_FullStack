const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.userRegister=async(req,res)=>{
    const encryptedPassword = await bcrypt.hash(req.body.password,10)
    const newUser = new User({
        username : req.body.username,
        password: encryptedPassword
    })

    const token = jwt.sign(
        {user_id:newUser._id },
        process.env.TOKEN_KEY,
        {
            expiresIn:"2h"
        }
    )
    newUser.token = token

    try{
        const saveUser = await newUser.save()
        res.status(201).json(saveUser);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.login=async(req,res)=>{
   try{
        const {username, password} =req.body
        const user =await User.findOne({username})

        if (user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign(
                {user_id:user._id},
                process.env.TOKEN_KEY,
                {
                    expiresIn:'2h'
                }
            )

            user.token = token

            res.status(200).json(user)
        }
        res.status(400).send("Invalid")
   }catch(err){
        console.log(err)
   }
}