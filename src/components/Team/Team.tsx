import { BiAddToQueue } from "react-icons/bi";
import { TeamUsers } from "./TeamUsers";
import ReactLoading from "react-loading";
import { useTeams } from "../../hooks/useTeams";

export function Team() {
  const { getUsersTeam } = useTeams();
  const { data: usersTeam, isLoading } = getUsersTeam();

  return (
    <div className="border rounded-md">
      <div className="text-center p-2 border-b bg-base-200  font-semibold rounded-t-md flex items-center justify-between">
        Team Members
        <button className="btn btn-success btn-sm">
          <BiAddToQueue className="text-xl mr-2" />
          New
        </button>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex itens-center justify-center">
            <ReactLoading color="#000" />
          </div>
        ) : (
          <TeamUsers users={usersTeam?.users} />
        )}
      </div>
    </div>
  );
}
