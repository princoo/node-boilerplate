// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Internal Server Error';

  res.status(errStatus).json({
    code: errStatus,
    message: errMsg,
    error: err,
  });
};

export default errorHandler;
