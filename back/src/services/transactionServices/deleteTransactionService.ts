import { FastifyReply, FastifyRequest } from "fastify";
import { parse } from "path";
import { getId } from "../../models/transactionModel";
import { prisma } from "../../db/prismaClient";

export async function DeleteTransactionService(request: FastifyRequest, reply: FastifyReply) {
  const { id } = getId.parse(request.params)

  const transaction = await prisma.transaction.findUnique({
    where: {
      id
    }
  })

  if(!transaction) return reply.status(404).send({ message: "Transação não encontrada!" })

  await prisma.transaction.delete({
    where: {
      id
    },

  })

  return reply.status(200).send({ message: "Transação excluída!" })
}