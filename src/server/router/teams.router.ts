import { createRouter } from "./context";

export const teamsRouter = createRouter().query("getUsersTeam", {
  async resolve({ ctx }) {
    let team = await ctx.prisma.team.findFirst({
      where: {
        users: {
          some: {
            id: Number(ctx.session?.user?.id),
          },
        },
      },
      select: {
        users: true,
      },
    });

    if (!team) {
      team = await ctx.prisma.team.create({
        data: {
          users: {
            connect: {
              id: Number(ctx.session?.user?.id),
            },
          },
        },
        select: {
          users: true,
        },
      });
    }

    return team;
  },
});
