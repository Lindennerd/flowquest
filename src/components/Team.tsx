import { useTeams } from "../hooks/useTeams";

export function Team() {
  const { getUsersTeam } = useTeams();

  ///const { data: Team, isLoading } = getUsersTeam();

  return <div>Team ldsa</div>;
}
