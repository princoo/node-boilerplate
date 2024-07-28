import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Internal Server Error';

  res.status(errStatus).json({
    code: errStatus,
    message: errMsg,
    error: err,
  });
};

export default errorHandler;
