import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prismaClient";

export async function GetCategoryService(request: FastifyRequest, reply: FastifyReply) {
  const categories = await prisma.category.findMany()

  return reply.status(200).send(categories)
}