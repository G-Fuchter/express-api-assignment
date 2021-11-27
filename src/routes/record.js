const express = require("express");

const recordController = require("../controllers/record");
const validator = require("../middleware/validation");

const router = express.Router();

router.post(
  "/",
  validator.recordQueryRequestValidation(),
  validator.validationErrorHandler,
  recordController.queryRecords
);

module.exports = router;
