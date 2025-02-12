import { prisma } from "../../db/prismaClient";
import { transactionModel } from "../../models/transactionModel";
import { FastifyReply, FastifyRequest } from "fastify";

export async function CreateTransactionService(request: FastifyRequest, reply: FastifyReply) {
  const { title, categoryName, categoryIconId, parcels, paid, paimentType, paimentDate, type, value, description } = transactionModel.parse(request.body)

  const transaction = await prisma.transaction.create({
    data: {
      title,
      description,
      type,
      categoryName,
      categoryIconId,
      value,
      paimentDate,
      paid,
      paimentType, 
      parcels
    }
  })

  return reply.status(201).send(transaction.id)

}