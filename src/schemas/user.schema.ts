import { inferQueryOutput } from "./../utils/trpc";
export type User = inferQueryOutput<"user.findFirst">;
