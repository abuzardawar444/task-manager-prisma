import { Request, Response } from "express";
import { CustomAPIError } from "../errors/custom-errors";

const errorHandlerMiddleware = (
  err: Error | CustomAPIError,
  req: Request,
  res: Response,
  next: unknown
) => {
  console.log(next);
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ msg: err.message });
    return;
  }
  res.status(500).json({ msg: "Something went wrong" });
  return;
};

export default errorHandlerMiddleware;
