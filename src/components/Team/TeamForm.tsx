import { FormEvent, useState } from "react";
import { Button, Input } from "react-daisyui";
import { useTeams } from "../../hooks/useTeams";

interface ITeamFormProps {
  onMutated: () => void;
}

export function TeamForm(props: ITeamFormProps) {
  const { create } = useTeams();
  const [teamName, setTeamName] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await create({
      name: teamName,
    });

    setLoading(false);
    props.onMutated();
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-2">
      <Input
        placeholder="Give your team a cool name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <Button color="success" size="sm" loading={loading}>
        Save!
      </Button>
    </form>
  );
}
