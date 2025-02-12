import z from "zod";

export const categoryModel = z.object({
  name: z.string(),
  categoryIconId: z.string()
})