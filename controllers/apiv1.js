const express = require('express')

const apiv1 = express.Router();

apiv1.get('/',(req,res)=>{
    res.send("API version 1")
}
)

module.exports = apiv1;