const express = require('express');
const serach = require("./serach");
const router = express.Router();

router.get('/', (req, res) => res.send('It works.'));
//app.use("/serach", serach);

module.exports = router;