const express = require('express');
const router  = express.Router();


router.get('/',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.send('server is up and running')
})

module.exports=router;