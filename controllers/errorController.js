// Calling err, req, res, next as arguments to the function
// is a convention in Express to signal that this is an
// ERROR HANDLING MIDDLEWARE
const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  console.log(err.stack);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = globalErrorHandler;
