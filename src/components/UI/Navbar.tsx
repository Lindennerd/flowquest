import { BiLogInCircle } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Flow Quest</a>
        </div>
        <div className="navbar-end">
          {status === "authenticated" && (
            <div className="flex items-center gap-4">
              <span>({session.user?.email})</span>
              <button className="btn btn-ghost btn-circle">
                <BiLogInCircle className="text-2xl" />
              </button>
            </div>
          )}
          {status !== "authenticated" && (
            <button className="btn btn-ghost" onClick={(e) => signIn("auth0")}>
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}
