import { NextFunction, Request, Response } from "express";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("ERROR:", err);
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
  next();
};
