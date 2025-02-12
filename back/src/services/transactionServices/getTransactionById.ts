import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prismaClient";
import { getId } from "../../models/transactionModel";

export async function GetTransactionById(request: FastifyRequest, reply: FastifyReply) {
  const { id } = getId.parse(request.params)
  const transaction = await prisma.transaction.findUnique({
    where: {
      id
    }
  })

  if(!transaction) return reply.status(404).send({ message: "Transação não encontrada!" })

  return reply.status(201).send(transaction)
}