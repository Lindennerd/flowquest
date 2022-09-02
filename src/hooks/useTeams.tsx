import { trpc } from "../utils/trpc";

export function useTeams() {
  return {
    getTeamMembers(teamId: number) {
      return trpc.useQuery([
        "team.findManyTeam",
        {
          where: {
            id: teamId,
          },
        },
      ]);
    },

    getUsersTeam() {
      return [];
    },
  };
}
