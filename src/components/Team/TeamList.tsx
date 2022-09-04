import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Table } from "react-daisyui";
import { Team, TeamMember } from "../../schemas/team.schema";
import { User } from "../../schemas/user.schema";
import { TeamMembersModal } from "./TeamMembersModal";

interface ITeamListProps {
  teams: Team[];
}

export function TeamList(props: ITeamListProps) {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [membersModal, setMembersModal] = useState(false);
  const router = useRouter();

  function toggleMembersModal(users: TeamMember[]) {
    setMembers(users);
    setMembersModal(true);
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table className="rounded-box w-full">
          <Table.Head>
            <span>Name</span>
            <span>Users</span>
            <span>Forms</span>
            <span />
          </Table.Head>
          <Table.Body>
            {props.teams &&
              props.teams.map((team) => (
                <Table.Row key={team!.id}>
                  <div>{team?.name}</div>
                  <Button
                    size="sm"
                    color="primary"
                    variant="outline"
                    onClick={(e) =>
                      toggleMembersModal(
                        team!.TeamUser.map((member) => {
                          return {
                            user: member.user,
                            Role: member.role.map((role) => role),
                          };
                        })
                      )
                    }
                  >
                    Users ({team?.TeamUser.length})
                  </Button>
                  <Button size="sm" color="primary" variant="outline">
                    Forms ({team?.forms ? team.forms.length : 0})
                  </Button>
                  <Button
                    size="sm"
                    color="ghost"
                    onClick={(e) => router.push(`/team/${team?.id}`)}
                  >
                    details
                  </Button>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>

      <TeamMembersModal
        members={members}
        open={membersModal}
        toggle={() => setMembersModal(!membersModal)}
      />
    </>
  );
}
