import { Request, Response } from "express";
import { prisma } from "../prismaClient/prisma";

export const checkIfUrlExists = async (
  req: Request,
  res: Response,
  next: any
) => {
  const findOriginalUrl = await prisma.url.findUnique({
    where: {
      originalUrl: req.body.url,
    },
  });
  if (findOriginalUrl) {
    return res.status(200).json({ shortUrl: findOriginalUrl.shortUrl });
  }
  next();
};
