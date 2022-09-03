import { Button, Table } from "react-daisyui";
import { Team } from "../../schemas/team.schema";

interface ITeamListProps {
  teams: Team[];
}

export function TeamList(props: ITeamListProps) {
  return (
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
                <Button size="sm" color="primary" variant="outline">
                  Users ({team?.TeamUser.length})
                </Button>
                <Button size="sm" color="primary" variant="outline">
                  Forms ({team?.forms ? team.forms.length : 0})
                </Button>
                <Button size="sm" color="ghost">
                  details
                </Button>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
