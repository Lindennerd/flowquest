import { useErrorContext } from "../context/error.context";
import { TeamInputSchema } from "../schemas/team.schema";
import { trpc } from "../utils/trpc";

export function useTeams() {
  const { setError } = useErrorContext();

  const createMutation = trpc.useMutation(["team.create"], {
    onError: (error) => setError(error.message),
  });

  return {
    getUsersTeams() {
      return trpc.useQuery(["team.getUsersTeams"], {
        onError: (error) => setError(error.message),
      });
    },

    getTeam(id: number) {
      return trpc.useQuery(["team.findFirst", id], {
        onError: (error) => setError(error.message),
      });
    },

    async create(team: TeamInputSchema) {
      return await createMutation.mutateAsync(team);
    },
  };
}
