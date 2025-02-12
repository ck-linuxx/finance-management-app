import z from "zod";

export const transactionModel = z.object({
  title: z.string(),
  description: z.optional(z.string()),
  type: z.string(),
  categoryName: z.string(),
  categoryIconId: z.string(),
  value: z.number(),
  paimentDate: z.string(),
  paid: z.boolean(),
  paimentType: z.string(),
  parcels: z.optional(z.number())
})

export const getId = z.object({
  id: z.string()
})