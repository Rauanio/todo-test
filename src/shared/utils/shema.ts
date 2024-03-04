import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, { message: "Title field is required" }),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;
