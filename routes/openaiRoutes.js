const express = require('express')
const router = express.Router()
const {generateImages} = require('../controllers/openAIController')

router.post('/generateImages',generateImages)
module.exports=router   