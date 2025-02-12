import { FastifyInstance } from "fastify";
import { CreateTransactionService } from "../services/transactionServices/createTransactionService";
import { GetTransactions } from "../services/transactionServices/getTransactions";
import { GetTransactionById } from "../services/transactionServices/getTransactionById";
import { request } from "http";

export async function Transactions(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    await GetTransactions(request, reply)
  })

  fastify.get("/:id", async (request, reply) => {
    await GetTransactionById(request, reply)
  })

  fastify.post("/create", (request, reply) => {
    CreateTransactionService(request, reply)
  })

  fastify.post("/delete/:id", (request, reply) => {
    
  })
}