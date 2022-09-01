import { BiLogInCircle } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";

export function Navbar() {
  const {data: session, status} = useSession();

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Flow Quest</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost mr-2" onClick={e => signOut()}>Register</button>

          {status === "authenticated" && (<div>Bem vindo {session.user?.email}</div>)}
          {status !== "authenticated" && (<button className="btn btn-ghost" onClick={e => signIn()}>Login</button>)}
        </div>
      </div>
    </>
  );
}
