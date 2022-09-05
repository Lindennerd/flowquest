import { z } from "zod";

export const formInputSchema = z.object({
  name: z.string().min(1, "The name is required"),
  description: z.string().min(1, "The description is required"),
  minimalRate: z
    .number({
      invalid_type_error: "The minimal rate must be a number ",
      required_error: "the minimal rate is required",
    })
    .min(0, "the minimal rate required is 10")
    .max(10, "the max rate required is 10"),
  teamId: z.number({
    invalid_type_error: "You must select a team",
    required_error: "The team field is required",
  }),
});

export const formUpdateSchema = formInputSchema.extend({
  id: z.string(),
});

export type FormUpdate = z.TypeOf<typeof formUpdateSchema>;
export type FormInput = z.TypeOf<typeof formInputSchema>;
