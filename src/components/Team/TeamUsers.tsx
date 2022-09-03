import Image from "next/image";
import { BiAlarmExclamation } from "react-icons/bi";
import { User } from "../../schemas/user.schema";

interface ITeamUsers {
  users?: User[];
}

export function TeamUsers(props: ITeamUsers) {
  return (
    <>
      <div className="mt-2">
        {props.users && (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Roles</th>
                </tr>
              </thead>
              <tbody>
                {props.users.map((user) => (
                  <tr key={user?.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={user?.image ?? ""}
                              alt="profile image"
                              layout="fill"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{[]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
