import { Button, Modal } from "react-daisyui";
import Image from "next/image";
import { User } from "../../schemas/user.schema";
import { TeamMember } from "../../schemas/team.schema";

interface ITeamMembers {
  members: TeamMember[];
  open: boolean;
  toggle: () => void;
}

export function TeamMembersModal(props: ITeamMembers) {
  return (
    <Modal open={props.open}>
      <Button
        size="sm"
        shape="circle"
        className="absolute right-2 top-2"
        onClick={(e) => props.toggle()}
      >
        x
      </Button>
      <Modal.Header>Team Members</Modal.Header>
      <Modal.Body>
        <div className="overflow">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Roles</th>
              </tr>
            </thead>
            <tbody>
              {props.members.length > 0 &&
                props.members.map((member) => (
                  <tr key={member.user?.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={member.user?.image ?? ""}
                              alt="profile image"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{member.user?.name}</td>
                    <td>{member.user?.email}</td>
                    <td>{member.Role.join(", ")}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
}
