var express = require('express');
var {sign,login} = require('../controllers/Login')

var router = express.Router();



router.post('/sign', sign);

router.post("/login", login);

module.exports = router;
