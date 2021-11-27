// Express error handler
const errorHandler = (error, req, res, next) => {
  const httpStatus = error.httpStatus || 500;
  const message = error.errorCode? error.message : "Unknown Error Occured";
  const code = error.errorCode || 1;
  res.status(httpStatus).json({
    code,
    msg: message,
    records: [],
  });
};

module.exports = errorHandler;