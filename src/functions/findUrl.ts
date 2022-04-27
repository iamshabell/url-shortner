import { Request, Response } from "express";
import { prisma } from "../prismaClient/prisma";

export const findUrl = async (req: Request, res: Response) => {
  const { urlId } = req.params;
  const returnedUrl = await prisma.url.findUnique({
    where: { generatedId: urlId },
  });
  return returnedUrl ? res.redirect(returnedUrl.originalUrl) : res.status(404);
};
