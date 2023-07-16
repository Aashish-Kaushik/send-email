const express = require('express')
const route = express.Router()
const {mailsenders} = require("../controllers/mail.controller")

route.post('/sendMail' , mailsenders)
module.exports = route;  