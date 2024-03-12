const express = require('express')
const apiv2 = express.Router();

apiv2.get('/', (req,res)=>
    res.send("API version 2")
)

module.exports = apiv2;