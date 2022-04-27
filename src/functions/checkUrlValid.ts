import validUrl from "valid-url";
import { Request, Response } from "express";

export const checkIfUrlIsValid = (req: Request, res: Response, next: any) => {
  const { url } = req.body;
  if (validUrl.isUri(url)) {
    next();
  } else {
    res.send(400);
  }
};
