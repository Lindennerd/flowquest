import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Loading } from "../components/UI/Loading";
import { UserPage } from "../components/UserPage";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <div>Landing Page</div>;
  }

  if (status === "authenticated") {
    return (
      <>
        <main>
          <UserPage />
        </main>
      </>
    );
  }

  return <></>;
};

export default Home;
