import { Role } from "@prisma/client";
import { z } from "zod";
import { teamInputSchema } from "./../../schemas/team.schema";
import { createRouter } from "./context";

export const teamsRouter = createRouter()
  .query("getUsersTeams", {
    async resolve({ ctx }) {
      return await ctx.prisma.team.findMany({
        where: {
          TeamUser: {
            some: {
              user: {
                id: Number(ctx.session?.user?.id),
              },
            },
          },
        },
        select: {
          id: true,
          name: true,
          TeamUser: true,
          forms: true,
        },
      });
    },
  })
  .query("findFirst", {
    input: z.number(),
    async resolve({ ctx, input }) {
      return ctx.prisma.team.findFirst({
        where: { id: input },
        select: {
          id: true,
          name: true,
          TeamUser: true,
          forms: true,
        },
      });
    },
  })
  .mutation("create", {
    input: teamInputSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.team.create({
        data: {
          name: input.name,
          TeamUser: {
            create: {
              role: [Role.OWNER],
              user: {
                connect: {
                  id: Number(ctx.session?.user?.id),
                },
              },
            },
          },
        },
      });
    },
  });
