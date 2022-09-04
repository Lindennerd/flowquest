import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useTeams } from "../../hooks/useTeams";
import { Team } from "../../schemas/team.schema";
import { trpc } from "../../utils/trpc";

export default function TeamPage() {
  const { getTeam } = useTeams();
  const router = useRouter();
  const { data: team, isLoading } = getTeam(Number(router.query.id));

  return <div>{team?.name}</div>;
}
