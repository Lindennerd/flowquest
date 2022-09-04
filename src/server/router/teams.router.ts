import { Role } from "@prisma/client";
import { z } from "zod";
import { teamInputSchema } from "./../../schemas/team.schema";
import { createRouter } from "./context";

const teamSelect = {
  id: true,
  name: true,
  TeamUser: {
    select: {
      role: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  },
  forms: true,
};

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
        select: teamSelect,
      });
    },
  })
  .query("findFirst", {
    input: z.number(),
    async resolve({ ctx, input }) {
      return ctx.prisma.team.findFirst({
        where: { id: input },
        select: teamSelect,
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
