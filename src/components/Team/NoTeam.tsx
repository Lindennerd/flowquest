import { BiAlarmExclamation } from "react-icons/bi";

export function NoTeam() {
  return (
    <div className="alert alert-info shadow-lg">
      <div>
        <BiAlarmExclamation className="text-xl" />
        <strong>Oops!</strong> Looks like you're not a part of any team yet...
      </div>
    </div>
  );
}
