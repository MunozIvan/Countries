const { Router } = require("express");
const  Activity = require('./Activity.js')
const  Country  = require('./Country.js')

const router = Router();

router.use('/activities', Activity);
router.use('/countries', Country);

module.exports = router;
