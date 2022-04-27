import { prisma } from "../prismaClient/prisma";

export const generateUniqueId: any = async () => {
  const generatedId = Math.random().toString(32).substring(2, 8);

  const existingId = await prisma.url.findUnique({
    where: { generatedId: generatedId },
  });
  if (existingId) {
    return generateUniqueId();
  } else {
    return generatedId;
  }
};
