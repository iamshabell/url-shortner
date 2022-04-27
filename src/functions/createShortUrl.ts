import { prisma } from "../prismaClient/prisma";
import { generateUniqueId } from "./generatedUniqueId";
import { Request, Response } from "express";

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const id = await generateUniqueId();
    console.log(id);

    const shortUrl = `http://localhost:${process.env.PORT}/${id}`;
    await prisma.url.create({
      data: {
        originalUrl: req.body.url,
        shortUrl: shortUrl,
        generatedId: id,
      },
    });
    return res.status(201).json({
      shortUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
