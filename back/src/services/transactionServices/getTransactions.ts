import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prismaClient";

export async function GetTransactions(request: FastifyRequest, reply: FastifyReply) {
  const transactions = await prisma.transaction.findMany()

  return reply.status(200).send(transactions)
}