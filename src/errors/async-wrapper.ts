import { Request, RequestHandler, Response } from "express";
import { NextFunction } from "express-serve-static-core";

export const asyncWrapper = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
