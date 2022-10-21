const express = require('express')
const router = express.Router()
const {create,getEvents,getOneEvent} = require('../controller/eventsController')

router.post('/create' ,create)
router.get('/getEvents',getEvents)
router.get('/getOneEvent/:slug',getOneEvent)

module.exports=router