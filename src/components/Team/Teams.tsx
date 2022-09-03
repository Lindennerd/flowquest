import { useState } from "react";
import { Button, Modal } from "react-daisyui";
import { useTeams } from "../../hooks/useTeams";
import { Loading } from "../UI/Loading";
import { NoTeam } from "./NoTeam";
import { TeamForm } from "./TeamForm";
import { TeamList } from "./TeamList";

export function Teams() {
  const { getUsersTeams } = useTeams();
  const { data: userTeams, isLoading, refetch } = getUsersTeams();

  const [newTeamModal, setNewTeamModal] = useState(false);

  function userHasTeams() {
    if (userTeams?.length !== undefined && userTeams.length > 0)
      return <TeamList teams={userTeams} />;
    else return <NoTeam />;
  }

  function onMutated() {
    setNewTeamModal(false);
    refetch();
  }

  return (
    <div className="border rounded-md">
      <div className="p-2 border-b flex justify-between items-center bg-base-200 rounded-t-md">
        <span className="text-md font-semibold">Your Teams</span>
        <Button
          size="sm"
          color="success"
          onClick={(e) => setNewTeamModal(true)}
        >
          new team
        </Button>
      </div>
      <div className="p-4">
        {isLoading && <Loading />}
        {userHasTeams()}
      </div>

      <Modal open={newTeamModal}>
        <Button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={(e) => setNewTeamModal(false)}
        >
          ✕
        </Button>
        <Modal.Body>
          <div className="mt-8">
            <TeamForm onMutated={onMutated} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
