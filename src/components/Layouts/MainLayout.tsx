import Head from "next/head";
import React from "react";
import { Navbar } from "../UI/Navbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Flow Quest</title>
        <meta name="description" content="A Smart way to manage knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}
