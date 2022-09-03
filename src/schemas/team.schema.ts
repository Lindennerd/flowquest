import { inferQueryOutput } from "./../utils/trpc";
import { z } from "zod";

export const teamInputSchema = z.object({
  name: z.string().min(4, "The team name need to have at least 4 characters"),
});

export type TeamInputSchema = z.TypeOf<typeof teamInputSchema>;
export type Team = inferQueryOutput<"team.findFirst">;
