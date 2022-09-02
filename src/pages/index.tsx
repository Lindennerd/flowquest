import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import ReactLoading from "react-loading";
import { UserPage } from "../components/UserPage";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex itens-center justify-center">
        <ReactLoading color="#000" />
      </div>
    );
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
