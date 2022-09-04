import { inferQueryOutput } from "./../utils/trpc";
import { z } from "zod";
import Email from "next-auth/providers/email";

export const teamInputSchema = z.object({
  name: z.string().min(4, "The team name need to have at least 4 characters"),
});

export const teamMemberSchema = z.object({
  user: z.object({
    id: z.number(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    image: z.string().nullable(),
  }),
  Role: z.array(z.string()),
});

export type TeamInputSchema = z.TypeOf<typeof teamInputSchema>;
export type TeamMember = z.TypeOf<typeof teamMemberSchema>;
export type Team = inferQueryOutput<"team.findFirst">;
