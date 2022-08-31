import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <button className="btn btn-primary">Ola Mundo</button>
      </main>
    </>
  );
};

export default Home;
