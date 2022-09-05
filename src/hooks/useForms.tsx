import { useErrorContext } from "../context/error.context";
import { FormInput } from "../schemas/forms.schema";
import { trpc } from "../utils/trpc";

export function useForms() {
  const { setError } = useErrorContext();

  const createMutation = trpc.useMutation(["forms.create"], {
    onError: (error) => setError(error.message),
  });

  return {
    async create(form: FormInput) {
      return createMutation.mutateAsync(form);
    },
  };
}
