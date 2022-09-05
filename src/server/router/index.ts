import { formsRouter } from "./form.router";
import { usersRouter } from "./users.router";
import { teamsRouter } from "./teams.router";
import { createRouter } from "./context";
import superjson from "superjson";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("team.", teamsRouter)
  .merge("forms.", formsRouter)
  .merge("user.", usersRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
