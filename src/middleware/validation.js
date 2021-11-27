const { body, validationResult } = require("express-validator");

const dateValidation = (value) => {
  const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  const validated = dateRegex.test(value);
  if (!validated) {
    return Promise.reject("Invalid date");
  }
  return Promise.resolve();
};

// Validates and sanitazes the body
exports.recordQueryRequestValidation = () => [
  body(
    "minCount",
    "minCount is required, and must be a number greater or equal to 0"
  )
    .notEmpty()
    .isNumeric({ min: 0 })
    .toInt(),
  body(
    "maxCount",
    "maxCount is required, and must be a number greater or equal to 0"
  )
    .notEmpty()
    .isNumeric()
    .toInt(),
  body(
    "startDate",
    "startDate is required, and must be a valid date following the YYYY-MM-DD format"
  )
    .trim()
    .notEmpty()
    .isString()
    .custom(dateValidation),
  body(
    "endDate",
    "endDate is required, and must be a valid date following the YYYY-MM-DD format"
  )
    .trim()
    .notEmpty()
    .isString()
    .custom(dateValidation),
];

// Based on validation errors, creates a new Error to be handled
exports.validationErrorHandler = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const valError = new Error(
      `Validation Error: ${validationErrors.array()[0].msg}`
    );
    valError.httpStatus = 400;
    valError.errorCode = 2;
    next(valError);
  }
  next();
};
