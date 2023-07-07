import clsx from "clsx"
import Head from "next/head"
import { Dispatch, SetStateAction } from "react";
import Origami from "@/components/origami";

export default function Home({dark, globalPageHandler} : {dark : boolean, globalPageHandler: Dispatch<SetStateAction<String>>}) {
  globalPageHandler("origami")
  return (
    <>
      <Head>
        <title>🎨 KK | Origami Creations</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/" />
      </Head>
      <main className={clsx("flex min-h-screen flex-col items-center justify-center",dark ? 'bg-gradient-to-b from-black to-indigo-950' : 'bg-gradient-to-b from-gray-300 to-white')}>
        <Origami dark={dark}/>
      </main>
    </>
  );
}
