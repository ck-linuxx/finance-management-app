import fastify, { FastifyInstance } from "fastify";
import { Transactions as transactions } from "./transactions.routes";

export async function App(fastify: FastifyInstance) {
  fastify.register(transactions, { prefix: "/transactions" })
}