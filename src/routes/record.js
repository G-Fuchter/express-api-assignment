const recordController =  require("../controllers/record");
const express = require('express');

const router = express.Router();

router.post("/", recordController.queryRecords);

module.exports = router;