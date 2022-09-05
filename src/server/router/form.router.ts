import { formInputSchema } from "./../../schemas/forms.schema";
import { createRouter } from "./context";

export const formsRouter = createRouter().mutation("create", {
  input: formInputSchema,
  async resolve({ ctx, input }) {
    return await ctx.prisma.form.create({
      data: input,
    });
  },
});
