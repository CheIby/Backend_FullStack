const express = require('express')
const router = express.Router()
const {add,getSameEvents,getAllRegister} = require('../controller/registerController')

router.post('/add',add)
router.get('/getSameEvents/:title',getSameEvents)
router.get('/getAll',getAllRegister)

module.exports=router