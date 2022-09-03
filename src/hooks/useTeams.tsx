import { useErrorContext } from "../context/error.context";
import { trpc } from "../utils/trpc";

export function useTeams() {
  const { setError } = useErrorContext();

  return {
    getUsersTeam() {
      return trpc.useQuery(["team.getUsersTeam"], {
        onError: (error) => setError(error.message),
      });
    },
  };
}
