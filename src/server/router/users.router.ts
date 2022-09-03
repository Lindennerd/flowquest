import { z } from "zod";
import { createRouter } from "./context";
export const usersRouter = createRouter().query("findFirst", {
  input: z.number(),
  async resolve({ ctx, input }) {
    return await ctx.prisma.user.findFirst({
      where: { id: input },
    });
  },
});
