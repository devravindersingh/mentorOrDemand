const express = require('express');
const router = express.Router();

//login/authenticate
router.get('/login',(req,res,next)=>{
    res.send('authenticate');
})


module.exports = router;

